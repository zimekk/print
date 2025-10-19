import { Router } from "express";

export const middleware = Router().get("/status", (_req, res) => {
  res.json({ status: "ok" });
});
