import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-page">

      <section className="about-hero">
        <div className="overlay"></div>
        {/* <img src="schoolimage.png" alt="" className="overlay"/> */}
        <div className="about-hero-text">
          <h1>About One Word Academy</h1>
          <p>Empowering young minds through knowledge, creativity, and compassion.</p>
        </div>
      </section>

      <section className="about-story">
        <h2>Our Story</h2>
        <p>
          Founded in 2005, <strong>One Word Academy</strong> has been a beacon of academic
          excellence and holistic education. What started as a small group of passionate
          educators has now evolved into a dynamic institution nurturing over 1200 students.
          We focus on developing not only strong intellectual abilities but also moral values
          that shape responsible global citizens.
        </p>
        <p>
          Our school encourages curiosity, critical thinking, and creativity — helping every
          learner discover their potential and build confidence to take on future challenges.
        </p>
      </section>

      <section className="mission-vision">
        <div className="mission">
          <h3>Our Mission</h3>
          <p>
            To provide a transformative learning experience that inspires students to
            achieve academic excellence and become compassionate, confident, and capable
            individuals ready to lead in a global society.
          </p>
        </div>

        <div className="vision">
          <h3>Our Vision</h3>
          <p>
            To be recognized as a leading educational institution that fosters innovation,
            creativity, and lifelong learning in a nurturing environment.
          </p>
        </div>
      </section>


      <section className="core-values">
        <h2>Our Core Values</h2>
        <div className="values-grid">
          <div className="value-card">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135823.png"
              alt="Integrity"
            />
            <h4>Integrity</h4>
            <p>We believe in honesty, transparency, and doing the right thing always.</p>
          </div>
          <div className="value-card">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2921/2921222.png"
              alt="Excellence"
            />
            <h4>Excellence</h4>
            <p>We strive for the highest standards in academics and co-curricular activities.</p>
          </div>
          <div className="value-card">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt="Empathy"
            />
            <h4>Empathy</h4>
            <p>We nurture compassion, respect, and kindness in our students and staff.</p>
          </div>
          <div className="value-card">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2942/2942789.png"
              alt="Innovation"
            />
            <h4>Innovation</h4>
            <p>We promote creativity and encourage new ways of thinking and learning.</p>
          </div>
        </div>
      </section>


      <section className="teachers-achievements">
        <div className="teachers">
          <h2>Our Dedicated Teachers</h2>
          <p>
            Our educators are the heart of One Word Academy. Each teacher is trained to
            inspire, guide, and support students in every step of their academic journey.
          </p>
          <div className="teacher-grid">
            <div className="teacher-card">
              <img
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt="Teacher 1"
              />
              <h4>Mrs. Priya Sharma</h4>
              <p>Head of Science Department</p>
            </div>
            <div className="teacher-card">
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="Teacher 2"
              />
              <h4>Mr. Rajesh Kumar</h4>
              <p>Mathematics Faculty</p>
            </div>
            <div className="teacher-card">
              <img
                src="https://randomuser.me/api/portraits/women/55.jpg"
                alt="Teacher 3"
              />
              <h4>Ms. Anjali Mehta</h4>
              <p>English Department Head</p>
            </div>
          </div>
        </div>

        <div className="achievements">
          <h2>Our Achievements</h2>
          <ul>
            <li>Ranked Top 10 CBSE Schools in the District (2023)</li>
            <li>95% Board Exam Success Rate for 5 Consecutive Years</li>
            <li>Eco-friendly Campus with Green Initiatives</li>
            <li>National Level Winners in Art & Robotics Competitions</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default About;