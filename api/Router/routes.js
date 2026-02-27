const express = require("express")
const router = express.Router()
const UserSaved = require("../model/user")
const jwt = require("jsonwebtoken");
const cors = require("cors")
const bcrypt = require("bcryptjs")

const SALT_ROUNDS = 10;
const app = express()

// cors används här så att min frontend har tillstånd till backenden, Cors begreänssar tillstånden för att den funkar som en säkerhets system, så här jag bara säger att det är okej att tillåta requests från min domän(front ends)
app.use(cors({
  origin:[
  "https://bedrock-studios-u28l.vercel.app",
  ],  
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  credentials: true
}));
app.use(express.json());

// en rutta som kollar om använderen existerar 
router.get("/user/me", authMiddleware, async (req, res) => {
    try {
      const id = req.user.id
      console.log("id: ", id)
      const user = await UserSaved.findOne({ _id: id })
      console.log("namn som loggar in: ", user.username)
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

// middleware som används för att att lägga JWT token, så att man har en session
function authMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ message: "No token provided" });

  const token = authHeader.split(" ")[1];
  if (!token) return res.status(401).json({ message: "Invalid token format" });

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);

    req.user = payload;
    next(); 
  } catch (err) {
    return res.status(403).json({ message: "Token is invalid or expired" });
  }
}

// väldigt viktigt för säkerhet att spara lösenordet från användaren i hash from och för det använder jag bcrypt
router.post("/auth/signup", async (req, res) => {

    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    console.log(req.body)
    try {
        const newUser = new UserSaved({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword,
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
//  när man loggar in så kollas det om du har konto registrerat och sen ger användaren JWT token
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

// i alla fall om något går dåligt med inlogningen så kan det enkelt bara visa till användaren att något just gick dåligt
router.get("/auth/login", (req, res) => {
    res.send("autherisation failed")
})

module.exports = router