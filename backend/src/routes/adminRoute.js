import express from "express";
import { getAllUsers, getRecentUsers, updateUserInfo, insertUser, deleteUser } from "../controllers/manageUser.js";
import { verifyToken } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/manage-users", verifyToken([1]), getAllUsers); //verifyToken
router.get("/recent-users", verifyToken([1]), getRecentUsers);
router.put("/update-user/:id", verifyToken([1]), updateUserInfo);
router.post("/create-user", verifyToken([1]), insertUser);
router.delete("/delete-user/:id", verifyToken([1]), deleteUser);

export default router;