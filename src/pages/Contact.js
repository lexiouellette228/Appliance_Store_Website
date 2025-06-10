import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaMapMarkerAlt, FaPhoneAlt, FaFacebook, FaThumbsUp } from "react-icons/fa";

const Contact = () => {
  return (
    <div>
      {/* Contact Header */}
      <Container className="mt-4 text-center">
        <h2 className="fw-light pt-2">Contact Us</h2>
        <h3 className="fw-light pt-2">Gross Appliance & TV, Inc.</h3>
      </Container>

      {/* Contact Information Section */}
      <Container className="mt-5 border-top pt-4">
        <Row className="row-cols-1 row-cols-md-3 text-center g-4">
          {/* Address Column */}
          <Col className="border-end">
            <FaMapMarkerAlt size={30} style={{ color: "#07198a" }} />
            <h4 className="mt-3" style={{ color: "#07198a" }}>Address</h4>
            <p style={{ color: "#07198a" }}>
              1210 Scottsville Rd<br />
              Lafayette, TN 37083<br />
              United States
            </p>
          </Col>

          {/* Phone Column */}
          <Col className="border-end">
            <FaPhoneAlt size={30} style={{ color: "#07198a" }} />
            <h4 className="mt-3" style={{ color: "#07198a" }}>Phone</h4>
            <a 
              href={`tel:${encodeURIComponent("6156667831")}`} 
              className="text-decoration-none" 
              style={{ color: "#07198a" }}
            >
              615 - 666 - 7831
            </a>
          </Col>

          {/* Connect Column */}
          <Col>
            <FaThumbsUp size={30} style={{ color: "#07198a" }} />
            <h4 className="mt-3" style={{ color: "#07198a" }}>Connect</h4>
            <a 
              href="https://www.facebook.com/p/Gross-Appliance-TV-Inc-100063585067859/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <FaFacebook size={40} style={{ color: "#07198a" }} />
            </a>
          </Col>
        </Row>
      </Container>

      {/* Google Map Section */}
      <Container className="mt-4 border-top pt-4">
        <div className="mt-3 text-center">
          <iframe
            title="Google Map"
            className="map-frame"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3337.382931597537!2d-86.01185708480602!3d36.51770398000232!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886434e5e6b7d74b%3A0x66d8fa3547d8f8d9!2s1210%20Scottsville%20Rd%2C%20Lafayette%2C%20TN%2037083!5e0!3m2!1sen!2sus!4v1707688675000!5m2!1sen!2sus"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            sandbox="allow-scripts allow-same-origin allow-popups"
          ></iframe>
        </div>
      </Container>

      {/* Footer Logo */}
      <div className="text-center mt-4 pt-4">
        <img src="/pictures/logo2.png" alt="Brand Logo" className="img-fluid" style={{ maxWidth: "250px" }} />
      </div>
    </div>
  );
};

export default Contact;
