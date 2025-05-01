// import express from "express"
// import { loginUser, registerUser } from "../controllers/userController.js";

// export  const userRouter= express.Router();

// userRouter.post("/register", registerUser);
// userRouter.post("/login", loginUser);

/* edite */

// import express from "express"; import {
//   loginUser,
//   registerUser,
//   refreshToken,   logoutUser, } from "../controllers/userController.js";
//   const userRouter = express.Router();

// userRouter.post("/login", loginUser);
// userRouter.post("/register", registerUser);
// userRouter.post("/refresh", refreshToken);

//  export default userRouter;


import express from "express";
import { loginUser, registerUser, logoutUser } from "../controllers/userController.js";

const router = express.Router();

router.post("/login", loginUser);
router.post("/register", registerUser);
router.post("/logout", logoutUser);


export default router;
