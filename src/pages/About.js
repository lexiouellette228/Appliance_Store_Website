import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaMapMarkerAlt, FaPhoneAlt, FaFacebook, FaThumbsUp } from "react-icons/fa";
import DOMPurify from "dompurify"; // Security for text content
import "./About.css"; // Custom CSS

const About = () => {
  const sanitizedAddress = DOMPurify.sanitize(`
    1210 Scottsville Rd<br />
    Lafayette, TN 37083<br />
    United States
  `);

  return (
    <div>
      {/* 🏔 Hero Section with Background Image */}
      <section className="hero-section "
    style={{
    backgroundImage: "url('/pictures/sky.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "300px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    }}
>
        <div className="overlay">
          <h1 className="hero-title">About Us</h1>
          <p className="hero-subtitle">Serving the Community with Quality & Trust</p>
        </div>
      </section>

      {/* About Content */}
      <Container className="mt-5 text-center">
        <Row className="align-items-center">
          <Col md={6}>
            <img src="/pictures/storefront.png" alt="Storefront" className="img-fluid rounded shadow-lg about-image" />
          </Col>
          <Col md={6}>
            <h2 className="fw-bold about-heading">Who We Are</h2>
            <br/>
            <p className="lead about-text">
            Gross Appliance & TV, Inc is a family-owned retail store in Lafayette, TN. Gross Appliance & TV, Inc. has served customers in Lafayette and surrounding areas with competitive prices on appliances, mattress sets, TVs, TV stands, and living room groups.
            </p>
            <p className="lead about-text"> 
            Our goal is to give the customer fast and friendly service.  Gross Appliance & TV Inc. stocks an array of different items such as Whirlpool, Maytag, KitchenAid, Amana home appliances, Southerland Mattress mattress sets, Smokin Brothers grills, Samsung HDTV, American Heartland stands, Best Home Furnishings, and more. We service most major appliance brands and also we are an authorized Whirlpool servicer.
            
            </p>
            <Button href="/inventory" className="about-button">
              Explore Our Products
            </Button>
          </Col>
        </Row>
      </Container>

      {/*  Why Choose Us Section */}
      <Container className="mt-5 text-center why-choose-us">
        <h2 className="fw-bold about-heading">Why Choose Us?</h2>
        <Row className="mt-4">
          <Col md={4}>
            <div className="feature-box">
            <svg className="feature-icon" xmlns="http://www.w3.org/2000/svg" width="30" height="25" fill="currentColor" class="bi bi-check2-square" viewBox="0 0 16 16">
                <path d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5z"/>
                <path d="m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0"/>
            </svg>
              <h4>Premium Quality</h4>
              <p>We offer top-tier brands like Whirlpool, Maytag, KitchenAid, Southerland Mattress, and more.</p>
            </div>
          </Col>
          <Col md={4}>
            <div className="feature-box">
            <svg className="feature-icon" xmlns="http://www.w3.org/2000/svg" width="30" height="25" fill="currentColor" class="bi bi-gear-wide-connected" viewBox="0 0 16 16">
                <path d="M7.068.727c.243-.97 1.62-.97 1.864 0l.071.286a.96.96 0 0 0 1.622.434l.205-.211c.695-.719 1.888-.03 1.613.931l-.08.284a.96.96 0 0 0 1.187 1.187l.283-.081c.96-.275 1.65.918.931 1.613l-.211.205a.96.96 0 0 0 .434 1.622l.286.071c.97.243.97 1.62 0 1.864l-.286.071a.96.96 0 0 0-.434 1.622l.211.205c.719.695.03 1.888-.931 1.613l-.284-.08a.96.96 0 0 0-1.187 1.187l.081.283c.275.96-.918 1.65-1.613.931l-.205-.211a.96.96 0 0 0-1.622.434l-.071.286c-.243.97-1.62.97-1.864 0l-.071-.286a.96.96 0 0 0-1.622-.434l-.205.211c-.695.719-1.888.03-1.613-.931l.08-.284a.96.96 0 0 0-1.186-1.187l-.284.081c-.96.275-1.65-.918-.931-1.613l.211-.205a.96.96 0 0 0-.434-1.622l-.286-.071c-.97-.243-.97-1.62 0-1.864l.286-.071a.96.96 0 0 0 .434-1.622l-.211-.205c-.719-.695-.03-1.888.931-1.613l.284.08a.96.96 0 0 0 1.187-1.186l-.081-.284c-.275-.96.918-1.65 1.613-.931l.205.211a.96.96 0 0 0 1.622-.434zM12.973 8.5H8.25l-2.834 3.779A4.998 4.998 0 0 0 12.973 8.5m0-1a4.998 4.998 0 0 0-7.557-3.779l2.834 3.78zM5.048 3.967l-.087.065zm-.431.355A4.98 4.98 0 0 0 3.002 8c0 1.455.622 2.765 1.615 3.678L7.375 8zm.344 7.646.087.065z"/>
            </svg>
              <h4>Reliable Service</h4>
              <p>Our team of experts is dedicated to providing you with the best customer service. </p>
            </div>
          </Col>
          <Col md={4}>
            <div className="feature-box">
            <svg className="feature-icon" xmlns="http://www.w3.org/2000/svg" width="30" height="25" fill="currentColor" class="bi bi-screwdriver" viewBox="0 0 16 16">
                <path d="M0 .995.995 0l3.064 2.19a1 1 0 0 1 .417.809v.07c0 .264.105.517.291.704l5.677 5.676.909-.303a1 1 0 0 1 1.018.24l3.338 3.339a.995.995 0 0 1 0 1.406L14.13 15.71a.995.995 0 0 1-1.406 0l-3.337-3.34a1 1 0 0 1-.24-1.018l.302-.909-5.676-5.677a1 1 0 0 0-.704-.291H3a1 1 0 0 1-.81-.417zm11.293 9.595a.497.497 0 1 0-.703.703l2.984 2.984a.497.497 0 0 0 .703-.703z"/>
            </svg>
              <h4>Trusted Since 2001</h4>
              <p>We are locally owned and operated, serving our customers with honesty and integrity.</p>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Contact & Footer */}
      <Container className="mt-5 border-top pt-4">
        <Row className="row-cols-1 row-cols-md-3 text-center g-4">
          {/* Address */}
          <Col className="border-end">
            <FaMapMarkerAlt size={30} className="icon-style" />
            <h4 className="mt-3 footer-title">Address</h4>
            <p className="footer-text" dangerouslySetInnerHTML={{ __html: sanitizedAddress }} />
          </Col>

          {/* Phone */}
          <Col className="border-end">
            <FaPhoneAlt size={30} className="icon-style" />
            <h4 className="mt-3 footer-title">Phone</h4>
            <a href="tel:6156667831" className="footer-text text-decoration-none">
              615 - 666 - 7831
            </a>
          </Col>

          {/* Connect */}
          <Col>
            <FaThumbsUp size={30} className="icon-style" />
            <h4 className="mt-3 footer-title">Connect</h4>
            <a
              href="https://www.facebook.com/p/Gross-Appliance-TV-Inc-100063585067859/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit our Facebook page"
            >
              <FaFacebook size={40} className="icon-style" />
            </a>
          </Col>
        </Row>

        {/* Footer Logo */}
        <div className="text-center mt-4 border-top pt-4">
          <img src="/pictures/logo2.png" alt="Brand Logo" className="img-fluid logo-img" />
        </div>
      </Container>
    </div>
  );
};

export default About;
