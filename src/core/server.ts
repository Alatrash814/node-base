import express from "express";
import compression from "compression";
import http from "http";

const app = express();

app.use(compression());

app.use(express.json());
app.use(express.urlencoded());

const server = http.createServer(app);

export {
    app,
    server
};