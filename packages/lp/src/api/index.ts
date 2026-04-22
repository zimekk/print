import { Router, json } from "express";
import { STATUSES } from "../constants";

export const router = Router().all("/", json(), (req, res) => {
  const { attempt = 0, delay = 1000, limit = 10 } = req.body;

  console.info({ attempt, delay, limit });

  const onClose = () => console.info(["close"]);

  res.socket.on("close", onClose);

  setTimeout(() => {
    res.socket.off("close", onClose);
    Promise.resolve({
      attempt,
      status: attempt >= limit ? STATUSES.READY : STATUSES.PENDING,
    })
      .then((data) => {
        console.info(["data"], data);
        return data;
      })
      .then((data) => res.json(data));
  }, delay);
});
