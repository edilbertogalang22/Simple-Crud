// displaying user in front end 
import db from "../config/db.js";
import bcrypt from "bcrypt";
// load to table
export const getAllUsers = async (req, res) => {
    try {
        const [rows] = await db.query("SELECT * FROM users");
        res.json(rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Something went wrong" });
    }
};

// load to admin dashnoard
export const getRecentUsers = async (req, res) => {
    try {
        const [user] = await db.query("SELECT id, fullname, email, created_at FROM users ORDER BY created_at DESC LIMIT 5");
        res.json(user);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Something went wrong" });
    }
};

// update user
export const updateUserInfo = async (req, res) => {
    try {
        const { id } = req.params;
        const { fullname, email, status} = req.body;

        await db.query("UPDATE users SET fullname = ?, email = ?, status = ? WHERE id = ?", [fullname, email, status, id,]);
        const [updatedUser] = await db.query("SELECT * FROM users WHERE id = ?", [id]);
        res.json(updatedUser[0]);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Something went wrong" });
    }
};

// insert user
export const insertUser = async (req, res) => {
    try {
        const { fullname, email, password , user_type} = req.body
        if (!fullname || !email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }
        const hashedPassword = await bcrypt.hash(password, 10);

        const [result] = await db.query("INSERT INTO users (fullname, email, password, user_type, status) VALUES (?, ?, ?, ? ,? )", [fullname, email, hashedPassword,  user_type, 0]);
        const [newUser] = await db.query("SELECT * FROM users WHERE id = ?", [result.insertId]);

        res.status(201).json(newUser[0]);
    } catch (err) {
        console.error("Error inserting user:", err);
        res.status(500).json({ message: "Something went wrong" });
    }
}

export const deleteUser = async (req, res) => {
    try {
      const { id } = req.params;

      // Check if user exists but its optional 
      const [existingUser] = await db.query("SELECT * FROM users WHERE id = ?", [id]);
      if (!existingUser.length) {
        return res.status(404).json({ message: "User not found" });
      }

      await db.query("DELETE FROM users WHERE id = ?", [id]);
      res.json({ message: "User deleted successfully" });
    } catch (err) {
        console.error("Error deleting user:", err);
        res.status(500).json({ message: "Something went wrong" });
    }
}