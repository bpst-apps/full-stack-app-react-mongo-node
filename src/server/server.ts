// import packages
import express from 'express';
import os from "node:os";

// note: config default import, PORT is named import
// import config, {PORT} from './config';

import config from './config';

// create server
const server = express();

// middleware
server.use(express.static("dist"));

server.set("view engine", "ejs");

// routes
server.use("/", (req, res) => {
    res.render("index", {
        initialContent: "Loading ..."
    })
});

// run server
server.listen(config.PORT, config.HOST, () => {
    console.info(`Server listening on ${config.SERVER_URL}`);
    console.info(
        "Press Ctrl+C to quit",
        `Free Memory: ${os.freemem() / 1024 / 1024}`
    );
});