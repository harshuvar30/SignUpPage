const router = require("express").Router();
const User = require("../Models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const validator = require("validator");
const path = require("path");

// Multer configuration for handling file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads"); // Specify the directory where you want to store the uploaded files
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Use the current timestamp as the filename
  },
});

const upload = multer({ storage: storage });
// upload.single("profilePicture"),
// REGISTER
router.post("/signup",upload.single("profilePicture"),async (req, res) => {
  console.log("we reached")
  if(!req.body.email){
    return res.status(400).json({ error:  "Wrong Credentials"});
    
  }
  if(!req.body.password){
    return res.status(400).json({ error:  "Wrong Credentials"});
    
  }
  if(!req.body.username){
    return res.status(400).json({ error:  "Wrong Credentials"});
  
  }
// const email = req.body.email;
  if(!validator.isEmail(req.body.email)){
    return res.status(400).json({ error:  "Not a valid Email"});
  }
    const existingUser = await User.findOne({
        $or: [{ username: req.body.username }, { email: req.body.email }],
      });
      

  if (existingUser) {
    return res.status(400).json({ error:  "User with this username/email already exist"});
  }

  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(req.body.password,process.env.PASS_SEC).toString(),
    name: req.body.name,
  });

  // Save profile picture if provided
  if (req.file) {
    newUser.profilePicture = req.file.path;
  }
  else{
    newUser.profilePicture = "defaul.jpg";
  }

  console.log(newUser);

  try {
    const savedUser = await newUser.save();
    const accessToken = jwt.sign(
      {
        id: savedUser._id,
        isAdmin: savedUser.isAdmin,
      },
      process.env.JWT_SEC,
      { expiresIn: "3d" }
    );
    const { password, ...others } = savedUser._doc;

   return res.status(200).json({ ...others, accessToken });

    // res.status(201).json(savedUser);
  
  } catch (error) {
    
    res.status(400).json({error: error.message})
     return;
    
  }
});

// LOGIN
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne( {$or: [{ username: req.body.username }, { email: req.body.username }]});
   
    if(!user){
      res.status(400).json({ error:  "User Not Found"});
      return;
    }

    const hashedPassword = CryptoJS.AES.decrypt(user.password, process.env.PASS_SEC);
    const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

    originalPassword !== req.body.password && res.status(401).json("Wrong Password!");

    const accessToken = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      process.env.JWT_SEC,
      { expiresIn: "3d" }
    );

    const { password, ...others } = user._doc;

    res.status(200).json({ ...others, accessToken });
    return;
  } catch (error) {
    res.status(400).json({error: error.message})
   return;
  }
});

module.exports = router;
