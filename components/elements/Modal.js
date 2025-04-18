import { useState, useEffect } from "react";
import axios from "axios";

const PopupModal = ({ closePopup }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.phone || !formData.course) {
      setError("Please fill all fields.");
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      const response = await axios.post("/api/modalEmail", formData);
      setSuccessMessage(response.data.message);
      setIsLoading(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        course: "",
      }); // Clear form after submission
    } catch (error) {
      setIsLoading(false);
      setError("Failed to send the message.");
    }
  };

  return (
    <div className="popup-overlay">
      <div className="popup-container">
        <div className="popup-left col-xl-12 col-lg-6 d-none d-md-block">
          <img src="/doc3.png" alt="Offer" />
        </div>
        <div className="popup-right col-xl-12 col-lg-6">
          <button className="close-btn" onClick={closePopup}>
            &times;
          </button>
          <h2>Exclusive Offer!</h2>
          <p className="text-center sub-title">
            A chance to win a $100 USD visa card and priority check-in at Indian airports for successful students.
          </p>
          {error && <div style={{ color: "red" }}>{error}</div>}
          {successMessage && <div style={{ color: "green" }}>{successMessage}</div>}
                  <form onSubmit={handleSubmit}>
                      <div className="d-flex gap-4">
            <input
              type="text"
              name="name"
              placeholder="Name *"
              value={formData.name}
              onChange={handleChange}
                          required
                          className="col-6"
            />
            <input
              type="email"
              name="email"
              placeholder="Email *"
              value={formData.email}
              onChange={handleChange}
                          required
                          className="col-6"
                          /></div>
                       <div className="d-flex gap-4">
            <input
              type="tel"
              name="phone"
              placeholder="Phone *"
              value={formData.phone}
              onChange={handleChange}
                          required
                          className="col-6"
            />
            <input
              type="text"
              name="course"
              placeholder="Course *"
              value={formData.course}
              onChange={handleChange}
                          required
                          className="col-6"
            /></div>
            <button type="submit" disabled={isLoading}>
              {isLoading ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PopupModal;
