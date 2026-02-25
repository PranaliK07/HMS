import React from "react";
import { useNavigate } from "react-router-dom";
import "./LandingPage.css";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="hospital-landing">

      {/* Navbar */}
      <nav className="hospital-navbar">
        <h2>CityCare Hospital</h2>
        <button onClick={() => navigate("/login")}>
           Login
        </button>
      </nav>

      {/* Hero Section */}
      <section className="hospital-hero">
        <div className="hero-overlay">
          <h1>Compassionate Care, Advanced Medicine</h1>
          <p>
            Providing world-class healthcare services with modern technology
            and experienced medical professionals.
          </p>
          <button className="primary-btn">
            Book Appointment
          </button>
        </div>
      </section>

      {/* Services */}
      <section className="services-section">
        <h2>Our Services</h2>

        <div className="services-grid">
          <div className="service-card">
            <h3>Emergency Care</h3>
            <p>24/7 emergency and trauma services.</p>
          </div>

          <div className="service-card">
            <h3>Cardiology</h3>
            <p>Advanced heart care and cardiac surgery.</p>
          </div>

          <div className="service-card">
            <h3>Orthopedics</h3>
            <p>Joint replacement and bone treatments.</p>
          </div>

          <div className="service-card">
            <h3>Diagnostics</h3>
            <p>Modern lab and imaging facilities.</p>
          </div>
        </div>
      </section>

      

      {/* DOCTORS SECTION */}
      <section className="doctors">
        <h2>Meet Our Specialists</h2>
        <div className="doctor-cards">

          <div className="doctor-card">
            <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Doctor" />
            <h4>Dr. Aditi Sharma</h4>
            <p>Cardiologist</p>
            <span>12+ Years Experience</span>
          </div>

          <div className="doctor-card">
            <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Doctor" />
            <h4>Dr. Rahul Mehta</h4>
            <p>Orthopedic Surgeon</p>
            <span>10+ Years Experience</span>
          </div>

          <div className="doctor-card">
            <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="Doctor" />
            <h4>Dr. Priya Deshmukh</h4>
            <p>Gynecologist</p>
            <span>8+ Years Experience</span>
          </div>

          <div className="doctor-card">
            <img src="https://randomuser.me/api/portraits/men/75.jpg" alt="Doctor" />
            <h4>Dr. Ankit Verma</h4>
            <p>Neurologist</p>
            <span>15+ Years Experience</span>
          </div>

        </div>
      </section>

      

      {/* About */}
      <section className="about-section">
        <h2>About CityCare Hospital</h2>
        <p>
          CityCare Hospital is a multi-specialty healthcare institution
          committed to delivering safe, affordable, and high-quality
          medical services to the community.
        </p>
      </section>

      {/* Footer */}
      <footer className="hospital-footer">
        <p>📞 Emergency: +91 98765 43210</p>
        <p>© {new Date().getFullYear()} CityCare Hospital</p>
      </footer>

    </div>
  );
};

export default LandingPage;


