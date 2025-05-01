// import express from "express"
// import { placeOrder,  } from "../controllers/orderController.js";
// import authMiddleware from "../middleware/auth.js";


// export const orderRouter= express.Router();

// orderRouter.post("/place", authMiddleware, placeOrder);


//  default orderRouter;

import express from "express";
import { listOrders, placeOrder, userOrders, verifyOrder, updateStatus } from "../controllers/orderController.js";
import authMiddleware from "../middleware/auth.js";

export const orderRouter = express.Router();

orderRouter.post("/place", authMiddleware, placeOrder);
orderRouter.post("/verify", verifyOrder);
orderRouter.post("/userorders", authMiddleware, userOrders )
orderRouter.get("/list", listOrders)
orderRouter.post("/status", updateStatus)
