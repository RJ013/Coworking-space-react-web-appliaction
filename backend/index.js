// require(`dotenv`).config();
const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser');
require("./DB/config");
const Form = require("./DB/form");
const Blog = require('./DB/blog');
const User = require('./DB/adminLogin');
const nodemailer = require('nodemailer');

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());



const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: "smpt.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: 'email',
    pass: 'app_password'
  }
});


app.post("/form", async (req, res) => {
  const { WhatAreYouInterestedIn, name, email, phone, WhenDoYouNeedToMove, HowManyPeople, HowLongFor, CompanyName, CompanySize } = req.body;

  // Save the form data to the database
  try {
      let form = new Form(req.body);
      let result = await form.save();

      // Send an email
      const mailOptions = {
          from: 'your_email@gmail.com',
          to: 'your_email@gmail.com',
          subject: 'Quote Request',
          text: `
              Name: ${name}
              Email: ${email}
              Phone: ${phone}
              What Are You Interested In: ${WhatAreYouInterestedIn}
              When Do You Need to Move: ${WhenDoYouNeedToMove}
              How Many People: ${HowManyPeople}
              How Long For: ${HowLongFor}
              Company Name: ${CompanyName}
              Company Size: ${CompanySize}
          `
      };

      transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
              console.error(error);
              return res.status(500).json({ success: false, message: 'An error occurred while sending the email.' });
          } else {
              console.log('Email sent: ' + info.response);
              return res.json({ success: true, message: 'Form data saved and email sent successfully.', data: result });
          }
      });
  } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: 'An error occurred while saving the form data.' });
  }
});



// API to handle GET requests for fetching all forms
app.get("/getallform", async (req, res) => {
  try {
    const allForms = await Form.find({});
    res.status(200).json({ status: "success", data: allForms });
  } catch (error) {
    console.error("Error fetching forms:", error);
    res.status(500).json({ status: "error", message: "Failed to fetch forms" });
  }
});





const jwt = require('jsonwebtoken');

app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;

  try {

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

   
    if (user.password !== password) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
    const token = jwt.sign({ userId: user._id }, 'your_secret_key', { expiresIn: '1h' });

    res.status(200).json({ message: 'Login successful', token });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});






// server.js
const multer = require('multer');
const path = require('path');

// Middleware for parsing JSON bodies
app.use(express.json());

// Multer configuration for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.resolve(`./uploads/`));
  },
  filename: function (req, file, cb) {
    const fileName = `${Date.now()}-${file.originalname}`;
    cb(null, fileName);
  },
});

// // Add this line after the Multer configuration
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


const upload = multer({ storage: storage });

// Route to add a new blog post
app.post('/api/blogs', upload.single('coverImage'), async (req, res) => {
  const { title, body } = req.body;
  try {
    const blog = await Blog.create({
      title,
      body,
      coverImageURL: `/uploads/${req.file.filename}`,
    });
    res.status(201).json({ success: true, blog });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
});


app.get('/api/blogs', async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.json({ success: true, blogs });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
});




app.get('/api/blogs/:id', async (req, res) => {
  try {
    const {id} = req.params;
   const blogs= await Blog.findById(id);
   res.status(200).json({success: true, blogs})
    } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
});





// Signup endpoint
app.post('/signup', async (req, res) => {
  const { email, password, secretKey } = req.body;

  // Check if secret key matches
  if (secretKey !== 'kipm') {
    return res.status(400).json({ message: 'Invalid secret key' });
  }

  // Check if user with the same email already exists
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(400).json({ message: 'Email already exists' });
  }

  // Create a new user
  const newUser = new User({
    email,
    password
  });

  // Save the user to the database
  await newUser.save();

  res.status(201).json({ message: 'User created successfully' });
});





app.listen(5000);
