import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, phone, Course, message } = req.body;

    // Server-side validation
    const nameRegex = /^[a-zA-Z\s]+$/;
    if (!nameRegex.test(name)) {
      return res.status(400).json({ error: "Name should contain only alphabets and spaces." });
    }

    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phone)) {
      return res.status(400).json({ error: "Phone number must be exactly 10 digits." });
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: "Please enter a valid email address." });
    }

    const courseRegex = /^[a-zA-Z\s]+$/;
    if (!courseRegex.test(Course)) {
      return res.status(400).json({ error: "Course name should contain only alphabets and spaces." });
    }

    // Create a transporter using your email service (like Gmail, SendGrid, etc.)
    const transporter = nodemailer.createTransport({
      service: "gmail", // Or another email service you are using
      auth: {
        user: process.env.EMAIL_USER, // Your email address
        pass: process.env.EMAIL_PASS, // Your email password or app password
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER, // Sender address
      to: process.env.RECEIVER_EMAIL, // Receiver address
      subject: `Enquiry from ${name}`, // Email subject
      html: `
    <html>
      <head>
        <style>
          body {
            font-family: Arial, sans-serif;
            color: #333;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
          }
          .email-container {
            max-width: 600px;
            margin: 20px auto;
            padding: 20px;
            background-color: #fff;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          }
          h2 {
            color: #007bff;
          }
          .email-content {
            font-size: 16px;
            line-height: 1.6;
            color: #555;
          }
          .email-content p {
            margin-bottom: 10px;
          }
          .email-content .label {
            font-weight: bold;
          }
          .email-footer {
            margin-top: 30px;
            text-align: center;
            font-size: 14px;
            color: #777;
          }
          .email-footer a {
            color: #007bff;
            text-decoration: none;
          }
        </style>
      </head>
      <body>
        <div class="email-container">
          <h2>New Enquiry Received</h2>
          <div class="email-content">
            <p><span class="label">Name:</span> ${name}</p>
            <p><span class="label">Email:</span> ${email}</p>
            <p><span class="label">Phone:</span> ${phone}</p>
            <p><span class="label">Course:</span> ${Course}</p>
            <p><span class="label">Message:</span> ${message}</p>
          </div>
          <div class="email-footer">
            <p>Thank you for using our contact form. We will get back to you shortly.</p>
            <p>If you need immediate assistance, please <a href="mailto:${email}">email us directly</a>.</p>
          </div>
        </div>
      </body>
    </html>
  `,

    };

    try {
      // Send the email
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: "Details sent successfully, we will contact you shortly!" });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ error: "Failed to send email" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
