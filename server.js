const express = require('express');
const cors = require('cors');
const app = express(); 
const nodemailer = require('nodemailer');
require('dotenv').config();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send(`Backend server is running on port ${PORT}`)
});

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
})

app.post('/send', (req, res) => {
    const { name, email, message } = req.body;
    
    const mailOptions = {
        from: email,
        to: process.env.EMAIL,
        subject: `Message from ${name}`,
        text: `You have a new message:\n\Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    
    }
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send('Error sending email: ' + error.message);
        }
        res.status(200).send('Message sent Successfully');
    });
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}   
);