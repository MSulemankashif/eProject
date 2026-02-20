const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const generateToken = (id) =>{
    return jwt.sign({ id}, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN,
    });
};

exports.register = async (req, res) => {
    const { name, email, password, role, phone } = req.body;

    const UserExists = await User.findOne({
        if(UserExists) {
            return res.status(400).json({message: "User already exists"});

            const hashedPassword = await bcrypt.hash(password, 10);

            const user = await User.create({
                name,
                email,
                password: hashedPassword,
                role,
            });

            
        }
    })
}