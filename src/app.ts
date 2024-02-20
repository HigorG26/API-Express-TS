//ENV variables
require("dotenv").config()

import express from "express"
import config from "config"

const app = express();

//JSON middleware
app.use(express.json());

import db from '../config/db'

//router
import router from "./router";

//Logger
import Logger from "../config/logger";

//Middelware
import morganMW from "./middleware/morganMw";

app.use(morganMW);

app.use("/api/", router);


//app port
const port = config.get<Number>("port")

app.listen(port, async () => {
    await db()

    Logger.info(`Aplicação executando na porta ${port}.`);
})