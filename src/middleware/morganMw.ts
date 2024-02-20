import config from "config";
import Logger from "../../config/logger";
import morgan, { StreamOptions } from "morgan";


const stream: StreamOptions = {
    write: (message) => Logger.http(message),
}

const skip = () => {
    const env = config.get<string> ("env") || "development"
    return env !== "development"
}

const morganMW = morgan (
    ":method :url :status :res[content-length] - :response-time ms",
    { stream, skip }
);

export default morganMW;