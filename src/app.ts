import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import routes from "./routes";

class App {
    public express: express.Application;

    public constructor() {
        this.express = express();
        this.middlewares();
        this.database();
        this.route();
    }

    private middlewares(): void {
        this.express.use(express.json());
        this.express.use(cors());
    }

    private database(): void {
        mongoose.connect(`mongodb+srv://LeoBarreto:L3o!br115@cluster.cib5t.mongodb.net/databaseTeste`);
    }

    private route(): void {
        this.express.use(routes);
    }
}

export default new App().express;