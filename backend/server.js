import dotenv from "dotenv"
dotenv.config()

import express from "express"
import cors from "cors"
import db from "./src/config/db.js"


// Import Routes
import manageUserRoute from "./src/routes/adminRoute.js"
import authRoute from "./src/routes/authRoute.js"


const app = express()
const PORT = process.env.PORT || 5000
// Middleware
app.use(cors())
app.use(express.json())
// app.get("/", (req, res) => res.send("Hello From Backend"))


// Routes
app.use("/api/auth", authRoute)
app.use("/api/auth", manageUserRoute)


async function startServer() {
    try{
        await db.query("SELECT 1")
        console.log("Database reachable. Starting Server...")

        const server = app.listen(PORT, () => {
            console.log(`Server running on http://localhost:${PORT}`)
        })

        process.on('SIGINT', async () => {
            console.log("\nShutting down server...")
            await db.end()
            server.close(() => {
                console.log("Server stopped.")
                process.exit(0)
            })
        })

    } catch (err) {
        console.log("Failed to connect on DB:", err.message)
        process.exit(1)
    }
}

startServer()