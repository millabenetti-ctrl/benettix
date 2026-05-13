import express, { type Express } from "express";
import cors from "cors";
import pinoHttp = require("pino-http");
import type { IncomingMessage, ServerResponse } from "node:http";
import router from "./routes";
import { logger } from "./lib/logger";

const app: Express = express();

type PinoRequest = IncomingMessage & {
  id?: string | number;
  method?: string;
  url?: string;
};

type PinoResponse = ServerResponse & {
  statusCode: number;
};

app.use(
  pinoHttp({
    logger,
    serializers: {
      req(req: PinoRequest) {
        return {
          id: req.id,
          method: req.method,
          url: req.url?.split("?")[0],
        };
      },
      res(res: PinoResponse) {
        return {
          statusCode: res.statusCode,
        };
      },
    },
  }),
);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", router);

export default app;
