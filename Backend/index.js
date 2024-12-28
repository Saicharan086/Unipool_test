const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "<your-gmail>", // Your Gmail
        pass: "<your-app-password>",    // Your Gmail App Password
    },
});


app.post("/send-email", (req, res) => {
    const { name, email, subject, message } = req.body;

    const mailOptions = {
        from: "<your-gmail>", 
        to: `${email}`, 
        subject: `Contact Us: ${subject}`,
        text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error("Error sending email:", error);
            return res.status(500).json({msg: "Failed to send email"});
        }
        console.log("Email sent:", info.response);
        res.status(200).json({msg : "Email sent successfully"});
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
