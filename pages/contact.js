"use client"
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from "react";
import axios from "axios";

export default function Contact() {
     const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    Course: "",
    message: "",
  });

  const [error, setError] = useState(""); // To store any validation errors
  const [isLoading, setIsLoading] = useState(false); // For showing the loading spinner
  const [successMessage, setSuccessMessage] = useState(""); // To store success message

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Validation function for frontend
  const validateForm = () => {
    // Name: Only alphabets (no numbers or special characters)
    const nameRegex = /^[a-zA-Z\s]+$/;
    if (!nameRegex.test(formData.name)) {
      return "Name should contain only alphabets and spaces.";
    }

    // Phone: Must be exactly 10 digits
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(formData.phone)) {
      return "Phone number must be exactly 10 digits.";
    }

    // Email: Basic email validation
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(formData.email)) {
      return "Please enter a valid email address.";
    }

    // Course: Only alphabets (no numbers or special characters)
    const courseRegex = /^[a-zA-Z\s]+$/;
    if (!courseRegex.test(formData.Course)) {
      return "Course name should contain only alphabets and spaces.";
    }

    return ""; // No errors
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form
    const validationError = validateForm();
    if (validationError) {
      setError(validationError); // Set error message if validation fails
      return;
    }
    setError(""); // Clear any previous error messages

    setIsLoading(true); // Start the loading spinner

    try {
      const response = await axios.post("/api/sendEmail", formData);
      setSuccessMessage(response.data.message); // Set success message
      setIsLoading(false); // Stop the loading spinner
      setFormData({
        name: "",
        email: "",
        phone: "",
        Course: "",
        message: "",
      }); // Clear form after successful submission
    } catch (error) {
      setIsLoading(false); // Stop the loading spinner
      alert("Failed to send the message");
    }
  };
    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Contact With Us">
                <div>
                    <section className="contact-area section-py-120">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-5">
                                    <div className="contact-info-wrap">
                                        <h2 className="title">Keep In Touch With Us</h2>
                                        <p>Ready to take the definitive step towards your international education?</p>
                                        <ul className="list-wrap">
                                            <li>
                                                <div className="icon">
                                                    <i className="flaticon-pin-1" />
                                                </div>
                                                <div className="content">
                                                    <p>94, Gobind Nagar , Racecourse (Near Gurudwara) Dehradun 248001</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="icon">
                                                    <i className="flaticon-phone-call" />
                                                </div>
                                                <div className="content">
                                                    <Link href="tel:+91 9999 256 360">+91 9999 256 360</Link>
                                                    <Link href="tel:+91 6396 745 354">+91 6396 745 354</Link>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="icon">
                                                    <i className="flaticon-email" />
                                                </div>
                                                <div className="content">
                                                    <Link href="mailto:vglobalmbbs@gmail.com">vglobalmbbs@gmail.com</Link>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-7">
                                    <div className="contact-form-wrap">
                                        <h4 className="title">Get in Touch</h4>
                                      <form onSubmit={handleSubmit} id="contact-form" method="POST">
      {error && <div style={{ color: "red" }}>{error}</div>} {/* Display error message */}
      {successMessage && <div style={{ color: "green" }}>{successMessage}</div>} {/* Display success message */}

      <div className="row">
        <div className="col-md-6">
          <div className="form-grp">
            <input
              name="name"
              type="text"
              placeholder="Name *"
              required
              value={formData.name}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-grp">
            <input
              name="email"
              type="email"
              placeholder="E-mail *"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-grp">
            <input
              name="phone"
              type="number"
              placeholder="Phone *"
              required
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-grp">
            <input
              name="Course"
              type="text"
              placeholder="Your Course *"
              required
              value={formData.Course}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
      <div className="form-grp">
        <textarea
          name="message"
          placeholder="Message"
          required
          value={formData.message}
          onChange={handleChange}
        />
      </div>
      <button type="submit" className="btn" disabled={isLoading}>
        {isLoading ? (
          <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
        ) : (
          "Send Message"
        )}
      </button>
    </form>
                                        <p className="ajax-response mb-0" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* contact-area-end */}
                    {/* contact-map */}
                    <div className="contact-map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3444.4206079085084!2d78.04270247535575!3d30.31055187479071!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390929a329cc68f3%3A0x8c2d74705b2b3b24!2s94%2C%20near%20Race%20Cource%2C%20East%20Rest%20Camp%2C%20Govind%20Nagar%2C%20Race%20Course%2C%20Dehra%20Dun%2C%20Uttarakhand%20248001!5e0!3m2!1sen!2sin!4v1744620396597!5m2!1sen!2sin" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                    </div>
                </div>

            </Layout>
        </>
    )
}