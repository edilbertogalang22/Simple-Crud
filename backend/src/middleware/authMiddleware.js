// middleware/auth.js
import jwt from "jsonwebtoken";

export const verifyToken = (allowedRoles = []) => {
  return (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) return res.status(401).json({ message: "Unauthorized" });

    const token = authHeader.split(" ")[1];
    if (!token) return res.status(401).json({ message: "Unauthorized" });

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded;

      // Check if user role is allowed
      if (allowedRoles.length && !allowedRoles.includes(decoded.user_type)) {
        return res.status(403).json({ message: "Forbidden: Access denied" });
      }

      next(); // pass to route handler
    } catch (error) {
     if (error.name === "TokenExpiredError") {
       return res.status(401).json({ message: "Token expired" });
     }
     if (error.name === "JsonWebTokenError") {
       return res.status(401).json({ message: "Invalid token" });
     }
     console.error("Unexpected token error:", error);
      return res.status(401).json({ message: "Unauthorized" });
    }
  };
};