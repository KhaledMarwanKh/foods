// import jwt from "jsonwebtoken"

//  const authMiddleware=async (req, res, next) => {
//     const {token}=req.headers;
//     if(!token){
//         return res.json({success:false,message:"NOt authorixed login"});
//     }

//     try {
//         const token_decode=jwt.verify(token, process.env.JWT_SECRET);
//         req.body.userId= token_decode.id;
//         next();
//     } catch (error) {
//         console.log(error);
//         res.json({success:false, message:"error"})
//     }
// }

// export default authMiddleware;
/* edite */

// import jwt from "jsonwebtoken";

//   const authMiddleware = async (req, res, next) => {
//   try {
//     const authHeader = req.headers.authorization;

//     if (!authHeader || !authHeader.startsWith("Bearer ")) {
//       return res.status(401).json({ success: false, message: "غير مصرح." });
//     }

//     const token = authHeader.split(" ")[1];
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);

//     req.user = { id: decoded.id };
//     next();
//   } catch (error) {
//     console.error("JWT Error:", error);
//     return res.status(401).json({ success: false, message: "توكن غير صالح." });
//   }
// };
// export default authMiddleware;





// import jwt from "jsonwebtoken";

// const authMiddleware = async (req, res, next) => {
//     const token = req.headers.authorization && req.headers.authorization.split(' ')[1];  // استخراج التوكن من Authorization header
//     if (!token) {
//         return res.status(401).json({ success: false, message: "Not authorized, no token" });
//     }

//     try {
//         const token_decode = jwt.verify(token, process.env.JWT_SECRET);
//         req.body.userId = token_decode.id;
//         next();
//     } catch (error) {
//         console.error("JWT verification error:", error);
//         return res.status(401).json({ success: false, message: "Invalid token" });
//     }
// }

// export default authMiddleware;

import jwt from "jsonwebtoken";

const authMiddleware = async (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ success: false, message: "Unauthorized - no token" });
    }

    const token = authHeader.split(" ")[1];

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.body.userId = decoded.id;
        next();
    } catch (error) {
        console.log("JWT Error:", error.message);
        return res.status(401).json({ success: false, message: "Invalid token" });
    }
};

export default authMiddleware;
