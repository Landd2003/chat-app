import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (userId , res) =>{
        const token = jwt.sign({userId}, process.env.JWT_SECRET,{
                expiresIn: `45d`
        })

        res.cookie("jwt",token,{
                maxAge : 45 * 24 * 60 * 60 * 1000,
                httpOnly:true,
                sameSite:"strict",
                secure: process.env.Node_ENV != "development"
        })
}

export default generateTokenAndSetCookie;