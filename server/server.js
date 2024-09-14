import express from "express";
import mongoose from "mongoose";
import {router as shopRoutes} from './src/routes/shop-routes.js';
import {router as cardRoutes} from './src/routes/card-routes.js';
import cors from "cors";

const PORT = process.env.PORT || 5000;

const URL = 'mongodb+srv://roxst1k:roxst1k@cluster0.wp3mn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

const corsOptions = {
    origin: ['http://localhost:3000'],
    optionsSuccessStatus: 200
};

const app = express();



function setupMiddleware() {
    app.use(cors(corsOptions));
    app.use(express.json());
    app.use(shopRoutes)
    app.use(cardRoutes)
}

function connectToDataBase() {
    mongoose.connect(URL)
        .then(() => console.log("Connected to MongoDB"))
        .catch((err) => {
            console.log('Not connected',err)
            process.exit(1);
        });
}



function startServer() {

    app.listen(PORT, (err) => {
        if (err) {
            console.error('Failed to start server', err);
            process.exit(1);
        } else {
            console.log(`Server started on port ${PORT}`);
        }
    })
}

function main() {
    setupMiddleware();
    connectToDataBase();
    startServer();
}

main()