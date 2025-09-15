import User from "../models/userModel.js";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import validator from 'validator';

//login user

const loginUser = async (req, res) => {

}

const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET)
}

//register user

const registerUser = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const exist = await User.findOne({ email })
        if (exist) {
            return res.status(409).json({ success: false, message: "User already exists" })
        }

        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "Please enter the valid email" })
        }

        if (password.length < 8) {
            return res.status(400).json({ success: false, message: " Please enter strong password" })
        }

        const salt = await bcrypt.genSalt(10);
        const hashedpassword = await bcrypt.hash(password, salt);

        const newUser = await new User({
            name: name,
            email: email,
            password: hashedpassword
        })

        const user = await newUser.save()
        const token = createToken(user._id)

        res.status(201).json({
            success: true,
            message: "User registered successfully",
            token,
            user: { id: user._id, name: user.name, email: user.email }
        });
    } catch (error) {
        console.log("Error", error)
        res.status(400).json({ success: false, message: "Error in registering user" })
    }
}

export { loginUser, registerUser }