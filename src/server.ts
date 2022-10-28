import http from "http";
import { startApp } from "./app";

startApp().then((app) => {
    const server = http.createServer(app);

    server.listen(2000, () => console.log("port 2000"));
});