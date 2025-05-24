import client from "@repo/db/client";
import express, { Express, Request, Response } from "express";
const app: Express = express();

app.get("/", (req: Request, res: Response) => {
  const user = client.user.findMany();
  return res.json({ message: "up" });
});

app.listen(8080, () => console.log("up & running"));
