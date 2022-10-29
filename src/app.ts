import 'reflect-metadata';

import express from "express";
import morgan from "morgan";

import { 
    userRouter,
    postRouter,
    authRouter,
} from "./routes/_.exporter";

export async function startApp() {
    const app = express();

    app.use(morgan("dev"));
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    app.use("/api/user", userRouter);
    app.use("/api/post", postRouter);
    app.use("/api/auth", authRouter);

    return app;
}