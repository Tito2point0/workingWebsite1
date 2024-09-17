const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Test route to ensure server is running
app.get('/', (req, res) => {
    res.send('Backend server is running');
});

// Nodemailer transporter setup
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL, // Make sure this exists in .env
        pass: process.env.PASSWORD // Ensure you are using the correct password or app password
    }
});

// Route for sending emails
app.post('/send', (req, res) => {
    const { name, email, message } = req.body;

    const mailOptions = {
        from: email, // Sender's email
        to: process.env.EMAIL, // Your email from the .env file
        subject: `Message from ${name}`,
        text: `You have a new message:\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`
    };

    // Send email using Nodemailer
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error:', error); // Log the full error
            return res.status(500).send('Error sending email: ' + error.message);
        }
        res.status(200).send('Message sent successfully');
    });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
