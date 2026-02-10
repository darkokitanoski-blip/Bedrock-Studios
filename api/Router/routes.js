const express = require("express")
const router = express.Router()
const UserSaved = require("../model/user")
const jwt = require("jsonwebtoken");
const cors = require("cors")
const bcrypt = require("bcryptjs")

const SALT_ROUNDS = 10;
const app = express()

app.use(cors({
  origin:[
  "http://localhost:5173/",
  ],  
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  credentials: true
}));
app.use(express.json());

router.get("/user/me", authMiddleware, async (req, res) => {
    try {
      const id = req.user.id
      console.log("id: ", id)
      const user = await UserSaved.findOne({ _id: id })
      console.log("ime: ", user.username)
        res.json({
            success: true,
            userId: id,
            message: "User is logged in",
            userName: user.username
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Something went wrong"
        });
    }
});


function authMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ message: "No token provided" });

  // The header format is "Bearer TOKEN"
  const token = authHeader.split(" ")[1];
  if (!token) return res.status(401).json({ message: "Invalid token format" });

  try {
    // Verify token using the secret key
    const payload = jwt.verify(token, process.env.JWT_SECRET);

    req.user = payload;
    next(); 
  } catch (err) {
    return res.status(403).json({ message: "Token is invalid or expired" });
  }
}

router.post("/auth/signup", async (req, res) => {

    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    console.log(req.body)
    try {
        const newUser = new UserSaved({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword,
            authProvider: "local"
        })

        const savedUser = await newUser.save()
        console.log(savedUser)

        console.log("user saved")
        res.status(201).send("User saved")
    } catch (error) {
        console.error(error)
        res.status(500).json(error.message)
    }
})

router.post("/auth/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log("LOGIN:", email, password);

    const user = await UserSaved.findOne({ email });

    if (!user) {
      return res.status(401).json({ error: "Account does not exist" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    // ✅ USE user._id
    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    console.log("TOKEN:", token);

    return res.status(200).json({
      message: "Login successful",
      token
    });

  } catch (err) {
    console.error("LOGIN ERROR:", err);
    return res.status(500).json({ error: err.message });
  }
});

router.get("/auth/login", (req, res) => {
    res.send("autherisation failed")
})

module.exports = router