import 'reflect-metadata';

import express from "express";
import morgan from "morgan";

import { userRouter } from "./routes/_.exporter";

export async function startApp() {
    const app = express();

    app.use(morgan("dev"));
    app.use(express.json());
    app.use(express.urlencoded());

    app.use("/api/user", userRouter);

    return app;
}