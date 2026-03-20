import jwt from "jsonwebtoken";

export const createAccessToken = (user) => {
    return jwt.sign(
        {
            id: user.id,
            usertype: user.user_type,
        },
        process.env.JWT_SECRET,
        {
            expiresIn: "1n",
        }
    )
}

// saka nato pag okay na ang buong system