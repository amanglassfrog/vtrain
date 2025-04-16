import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, phone, course } = req.body;

    // Create a transporter using your email service
    const transporter = nodemailer.createTransport({
      service: "gmail", // Or another email service
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.RECEIVER_EMAIL,
      subject: `New Student Admission Inquiry: ${name}`,
      html: `
        <html>
          <body>
            <h3>Student Admission Inquiry</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Course:</strong> ${course}</p>
          </body>
        </html>
      `,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: "Your inquiry has been sent successfully!" });
    } catch (error) {
      res.status(500).json({ error: "Failed to send the email" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
