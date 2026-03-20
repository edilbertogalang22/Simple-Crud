import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import db from "../config/db.js";

export const loginUser = async (req, res) => {
    const { email, password } = req.body

    try {
        // Get user by email only
        const [ users ] = await db.query(`SELECT * FROM users WHERE email = ? `, [email])

        if (users.length === 0) { 
            return res.status(401).json({ message: "Invalid email or password" })
        } 
        
        const user = users[0]

        // Compare password using bcrypt
        const isMatch = await bcrypt.compare(password, user.password)

        if(!isMatch) {
            return res.status(401).json({ message: "Invalid email or password "})
        }

        
        // after 1h user will be logged out automatically and expired token
        const token = jwt.sign({ id: user.id, email: user.email, user_type: user.user_type }, 
            process.env.JWT_SECRET, { expiresIn: "1h" })

        await db.query(`UPDATE users SET status = 1 WHERE id = ?`, [user.id])
        
         // Login successful
        return res.status(200).json({
             message: "Login success", 
             token: token,
             id: user.id,
             fullname: user.fullname, 
             email: user.email, 
             usertype: user.user_type 
             
            })
            
    } catch (err) {
        console.error(err)
        return res.status(500).json({ message: "Something went wrong", err: err.message })
    }
}

export const registerUser = async (req, res) => {
    try {
        const { fullname, email, password } = req.body

        // Check if email already exists
        const [existingemail] = await db.query("SELECT * FROM users WHERE email = ?", [email])
        if (existingemail.length > 0) {
            return res.status(400).json({ message: "Email already registered" })
        }

        // Check if email and password are provided
        if (!email || !password) {
            return res.status(400).json({ message: "Email and password are required" })
        }

        // hasing password
        const hashedPassword = await bcrypt.hash(password, 10)

        // Insert user
        const sql = ` INSERT INTO users (fullname, email, password, status)
                      VALUES (?,?,?,?) `
                      
        const [result] = await db.query(sql, [
            fullname,
            email,
            hashedPassword,
            0
        ])
        return res.status(201).json({
            message: "User registered successfully",
            userId: result.insertId,
        })
    } catch (err) {
        // check if email already exists mysql error handler
       if(err.code == "ER_DUP_ENTRY") {
        return res.status(400).json({ message: "Email already registered" })
       }
       console.error(err)
       return res.status(500).json({ message: "Server error" })
    }

}

export const logoutUser = async (req, res) => {
    const { id } = req.body;
    try {
        await db.query("UPDATE users SET status = 0 WHERE id = ?", [id]);
        res.json({ message: "Logout successful" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Something went wrong" });
    }
}