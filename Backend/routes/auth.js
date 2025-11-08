const router = require("express").Router();
const User = require("../models/user");
const bcrypt=require("bcryptjs")


//SignUp
router.post("/register", async (req, res) => {
    try {
        const { email, username, password } = req.body;

        // hash password
        const hashpassword = bcrypt.hashSync(password, 10);   //10 is here a salt value

        // create user
        const user = new User({ email, username, password: hashpassword });
        await user.save();

        return res.status(201).json({ message: "Sign Up Successful" });
    } catch (error) {
        if (error.code === 11000) {
            // Mongo duplicate key error
            return res.status(409).json({ message: "User already exists" });
        }
        console.error(error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
});

// SignIn
router.post("/signin", async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            return res.status(400).json({ message: "Please Sign Up first" });
        }

        const isPasswordCorrect = bycrypt.compareSync(req.body.password, user.password);
        if (!isPasswordCorrect) {
            return res.status(400).json({ message: "Password is not correct" });
        }

        const { password, ...others } = user._doc;
        return res.status(200).json({ user: others });

    } catch (error) {
        console.error("Signin error:", error);
        return res.status(500).json({ message: "Something went wrong" });
    }
});



module.exports = router;
