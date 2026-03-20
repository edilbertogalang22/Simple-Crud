import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhZG1pbmxtc0BnbWFpbC5jb20iLCJ1c2VyX3R5cGUiOjEsImlhdCI6MTc3MzY1OTE0NCwiZXhwIjoxNzczNjYyNzQ0fQ.J5nCK6P6PgTIVIZM_YSPERVPDnLapu-tVVBz81hZm8M"

try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log("Decoded token:", decoded);
  } catch (error) {
    console.error("Error decoding token:", error);
  }
