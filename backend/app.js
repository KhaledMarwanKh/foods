// import express from "express";
// import cors from "cors";
// import { connectDB } from "./config/db.js";
// import foodRouter from "./routes/foodRoute.js";
// import userRouter from "./routes/userRoute.js";
// import { cartRouter } from "./routes/cartRouter.js";
// import { orderRouter } from './routes/orderRoute.js';
// import cookieParser from "cookie-parser";
// import "dotenv/config";

// // app config
// const app = express();
// const port = 4000;

// // middleware
// app.use(express.json());
// app.use(cookieParser());

// // إعدادات CORS للسماح بعدة origins
// const allowedOrigins = ['http://localhost:5173', 'http://localhost:5174'];

// const corsOptions = {
//     origin: function (origin, callback) {
//         if (!origin || allowedOrigins.includes(origin)) {
//             callback(null, true);
//         } else {
//             callback(new Error('Not allowed by CORS'));
//         }
//     },
//     credentials: true,
// };

// app.use(cors(corsOptions));


// // static files
// app.use('/image', express.static('uploads')); 


import express from "express";
import cors from "cors";
import serverless from "serverless-http";

import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import { cartRouter } from "./routes/cartRouter.js";
import { orderRouter } from './routes/orderRoute.js';
import cookieParser from "cookie-parser";
import "dotenv/config";

// app config
const app = express();

// middleware
app.use(express.json());
app.use(cookieParser());

const allowedOrigins = ['http://localhost:5173', 'http://localhost:5174'];

const corsOptions = {
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true,
};

app.use(cors(corsOptions));

// db connection
connectDB();

// static files
app.use('/image', express.static('uploads')); 

// api endpoints
app.use("/api/food", foodRouter);
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

app.get("/", (req, res) => {
    res.send("API working");
});


export const handler = serverless(app);

export default app; 