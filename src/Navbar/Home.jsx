import React, { useState, useEffect } from "react";
import "./Home.css";
import school from '../../public/images.jpg'

const Home = () => {
  const slides = [
    "Welcome to MySchool — where learning never stops!",
    "Empowering young minds for a brighter tomorrow.",
    "Join us today and unlock your full potential!",
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="home-container">

      <div className="hero-section">
        <img
          src={school}
          alt="School Campus"
          className="hero-image"
        />
        <div className="overlay"></div>
        <div className="hero-text">
          <h1>{slides[currentSlide]}</h1>
        </div>
      </div>

      <section className="features">
        <h2>Our Key Highlights</h2>
        <div className="feature-cards">
          <div className="card">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt="Education"
            />
            <h3>Quality Education</h3>
            <p>
              We offer a modern curriculum that encourages curiosity, creativity, and critical thinking.
            </p>
          </div>

          <div className="card">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135823.png"
              alt="Teachers"
            />
            <h3>Expert Teachers</h3>
            <p>
              Our dedicated and experienced teachers ensure that every student receives personalized attention.
            </p>
          </div>

          <div className="card">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1828/1828911.png"
              alt="Technology"
            />
            <h3>Smart Learning</h3>
            <p>
              We integrate technology into education to make learning more engaging and interactive.
            </p>
          </div>
        </div>
      </section>


      <section className="about-section">
        <div className="about-content">
          <h2>About MySchool</h2>
          <p>
            MySchool is committed to excellence in education. Our mission is to create an inclusive learning
            environment where students discover their potential, gain confidence, and achieve academic success.
          </p>
          <button className="learn-more">Learn More</button>
        </div>
      </section>

      <section className="cta">
        <h2>Join Us Today!</h2>
        <p>Take the first step towards your child's bright future.</p>
        <button className="join-btn">Enroll Now</button>
      </section>
    </div>
  );
};

export default Home;

