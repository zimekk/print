import EventEmitter from "node:events";
import { Router, json } from "express";
import { STATUSES } from "../constants";

export const event = "log";
export const events = new EventEmitter();

export const log = (message: string, data = {}) => {
  const date = Date.now();
  const json = {
    date,
    time: new Intl.DateTimeFormat("pl", {
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    }).format(date),
    message,
    ...data,
  };
  console.log(json);
  events.emit(event, json);
};

export const router = Router()
  .all("/", json(), (req, res) => {
    const { attempt = 0, delay = 1000, hash, limit = 10 } = req.body;
    const agent = req.get("user-agent");
    const ip = req.get("x-forwarded-for") || req.socket.remoteAddress;

    log("lp", { attempt, delay, hash, ip, limit, agent });

    // const onSocketClose = () => log("lp:socket.close", { hash, ip });
    const onClose = () => log("lp:req.close", { hash, ip });

    // res.socket.on("close", onSocketClose);
    res.on("close", onClose);

    setTimeout(() => {
      // res.socket.off("close", onSocketClose);
      res.off("close", onClose);
      Promise.resolve({
        attempt,
        status: attempt >= limit ? STATUSES.READY : STATUSES.PENDING,
      })
        // .then((data) => {
        //   console.info(["data"], data);
        //   return data;
        // })
        .then((data) => res.json(data));
    }, delay);
  })
  .all("/visibilitychange", json(), (req, res) => {
    const { hash, hidden } = req.body;
    const ip = req.get("x-forwarded-for") || req.socket.remoteAddress;
    log("visibilitychange", { hash, ip, hidden });
    res.json({ hash, hidden });
  })
  .all("/logs", (req, res, next) => {
    const ip = req.get("x-forwarded-for") || req.socket.remoteAddress;
    if (req.get("accept") === "text/event-stream") {
      res.writeHead(200, {
        "content-type": "text/event-stream",
        connection: "keep-alive",
        cache: "no-cache",
      });

      let id = 0;
      const send = (json: object) => {
        const chunk = Object.entries({
          id: id++,
          event,
          data: JSON.stringify(json),
        })
          .reduce(
            (result, [key, value]) => result.concat([key, value].join(": ")),
            [] as string[],
          )
          .concat("", "")
          .join("\n");
        res.write(chunk);
      };

      events.on(event, send);

      log("logs:connection", { ip });

      return req.on("close", () => {
        log("logs:req.close", { ip });
        events.off(event, send);
        res.end();
      });
    }
    next();
  });
