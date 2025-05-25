import client from "@repo/db/client";
import cors from "cors";
import express, { Express, Request, Response } from "express";

const app: Express = express();

app.use(cors());

app.get("/", async (req: Request, res: Response) => {
  const user = await client.user.findMany();
  return res.json({ message: "up", user });
});

app.listen(8080, () => console.log("up & running"));
