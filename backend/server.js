// import express from "express"
// import cors from "cors"
// import { connectDB } from "./config/db.js";
// import foodRouter from "./routes/foodRoute.js";
// import userRouter from "./routes/userRoute.js";
// import "dotenv/config";
// import { cartRouter } from "./routes/cartRouter.js";
// import { orderRouter } from './routes/orderRoute.js';
// import cookieParser from "cookie-parser";

// // connectDB();
// //app config
// const app=express()
// const port=4000

// //middleware 
// app.use(express.json())


// const corsOptions = {
//     origin: 'http://localhost:5173', // الأصل المسموح
//     credentials: true, // السماح بالاعتماديات (مثل الكوكيز)
// };

// app.use(cors(corsOptions));
// // app.use(cors(),
// // )

// //db connection
// connectDB();
// //api endpoints 
// app.use("/api/food", foodRouter)
// app.use("images", express.static('uploads'))
// app.use("/api/user", userRouter)
// app.use("/api/cart", cartRouter )
// app.use("/api/order", orderRouter)

// app.get("/",(req, res)=>{
//     res.send("API working")
// })
// app.listen(port,()=>{
//     console.log(`Server Started on http://localhost:${port}`)
// })

// cookies
// app.use(cookieParser());






// import express from "express";
// import cors from "cors";
// import { connectDB } from "./config/db.js";
// import foodRouter from "./routes/foodRoute.js";
// import userRouter from "./routes/userRoute.js";
// import "dotenv/config";
// import { cartRouter } from "./routes/cartRouter.js";
// import { orderRouter } from './routes/orderRoute.js';
// import cookieParser from "cookie-parser";

// // إعداد السيرفر
// const app = express();
// const port = 4000;

// // middleware
// app.use(cookieParser()); // التأكد من وضعه أولًا لتتمكن من استخدام الكوكيز

// // إعدادات CORS للسماح بإرسال الكوكيز
// app.use(cors({
//   origin: "http://localhost:5173", // رابط الواجهة الأمامية (تأكد من أنه يتطابق مع الرابط الفعلي للواجهة)
//   credentials: true, // ضروري لإرسال الكوكيز بين السيرفر والواجهة
// }));

// // الاتصال بقاعدة البيانات
// connectDB();

// // إعدادات الـ API
// app.use(express.json());
// app.use("/api/food", foodRouter);
// app.use("images", express.static('uploads'));
// app.use("/api/user", userRouter);
// app.use("/api/cart", cartRouter);
// app.use("/api/order", orderRouter);

// app.get("/", (req, res) => {
//   res.send("API working");
// });

// // بدء السيرفر
// app.listen(port, () => {
//   console.log(`Server Started on http://localhost:${port}`);
// });

import app from './app.js'; 
const port = 4000; 

app.listen(port, () => {
    console.log(`✅ Server Started on http://localhost:${port}`);
});