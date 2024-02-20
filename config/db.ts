import mongoose from "mongoose";
import  config  from "config";

//Logger
import Logger from "./logger";

async function conn() {
    const dbUri = config.get<string>("dbUri");

    try{
        await mongoose.connect(dbUri);
        Logger.info("Conectado ao banco de dados!");

    } catch(e) {
        Logger.error("Não foi possível conectar!");
        Logger.error("Erro:", e);
        process.exit(1);
    }
}

export default conn