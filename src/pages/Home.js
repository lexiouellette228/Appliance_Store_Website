import React from "react";
import { Button } from "react-bootstrap";
import { Container, Row, Col} from "react-bootstrap";
import { useNavigate} from "react-router-dom";
import { FaMapMarkerAlt, FaPhoneAlt, FaFacebook, FaThumbsUp } from "react-icons/fa";
import DOMPurify from "dompurify"; // Sanitize dynamic content
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      {/* Main Content */}
      <Container className="text-center mt-4">
        {/* Main Grid */}
        <Row className="row-cols-1 row-cols-md-2 g-4">
          {/* Left Column */}
          <Col>
            <h2 className="fw-bold header-txt">GROSS Appliance and TV, Inc.</h2>
            <p className="fst-italic text-danger">"We Service What We Sell"</p>
            <p className="lead">
              Discover the best appliances for your home at Gross Appliance and TV, Inc., a family-owned business since 2001.
            </p>
            <Button 
              className="btn-lg"
              onClick={() => navigate("/inventory")}
              style={{ backgroundColor: "#07198a", color: "white", border: "none" }}
            >
              Click Here To View Our Current Inventory
            </Button>

            {/* Brand Logos Grid */}
            <Row className="row-cols-3 g-3 mt-4">
              {[
                { link: "https://www.whirlpool.com/", img: "/pictures/whirlpool.png", alt: "Whirlpool" },
                { link: "https://www.maytag.com/", img: "/pictures/maytag.png", alt: "Maytag" },
                { link: "https://www.besthf.com/besthf/Furniture/Home", img: "/pictures/best.png", alt: "Best Home Furnishings" },
                { link: "https://smokinbrothers.com/", img: "/pictures/sb.png", alt: "Smokin Brothers" },
                { link: "https://www.foagroup.com/", img: "/pictures/foa.png", alt: "Furniture of America" },
                { link: "https://www.kitchenaid.com/", img: "/pictures/kitchenaid.png", alt: "KitchenAid" },
                { link: "https://www.southerlandsleep.com/", img: "/pictures/southerland.png", alt: "Southerland" },
                { link: "https://www.amana.com/", img: "/pictures/amana.png", alt: "Amana" },
                { link: "https://americanheartlandmfg.com/AHMC/Home.html", img: "/pictures/heartland.png", alt: "American Heartland" }
              ].map((brand, index) => (
                <Col key={index}>
                  <a href={brand.link} target="_blank" rel="noopener noreferrer">
                    <img src={brand.img} className="img-fluid brand-logo" alt={DOMPurify.sanitize(brand.alt)} />
                  </a>
                </Col>
              ))}
            </Row>
          </Col>

          {/* Right Column: Storefront Image */}
          <Col className="d-flex justify-content-center align-items-center">
            <img src="/pictures/storefront.png" className="img-fluid rounded shadow-lg" alt="Gross Appliance Storefront" />
          </Col>
        </Row>
      </Container>

      {/* Our Story Section */}
      <Container className="mt-6">
        <Row className="row-cols-1 row-cols-md-2 g-4 align-items-center">
          {/* Left Column: Our Story Card */}
          <Col>
            <div className="card text-bg-dark border-0 position-relative">
              <img src="/pictures/sky.png" className="img-fluid" alt="Sky" />
              <div className="card-img-overlay d-flex flex-column justify-content-center align-items-start text-white p-5">
                <h1 className="display-3 fw-bold">Our Story</h1>
                <hr className="border-white opacity-100 w-25" />
                <p>
                <button type="button" class="btn fs-5" style={{color: "white"}} onClick={() => navigate("/about")}>Read More</button>
                </p>
              </div>
            </div>
          </Col>

          {/* Right Column: Why Choose Us */}
          <Col>
            <h2 className="fw header-txt">Why Choose Us?</h2>
            <p className="lead">
              Gross Appliance is your one-stop-shop for all your appliance needs. We offer a wide range of 
              appliances, mattresses, TVs, TV stands, and living room groups at competitive prices. 
              Our team of experts is dedicated to providing you with the best customer service and ensuring 
              that you find the perfect product to fit your needs. Shop with us today and experience the Gross Appliance difference.
            </p>
          </Col>
        </Row>
      </Container>

      {/* Footer */}
      <Container className="mt-5 border-top pt-4">
        <Row className="row-cols-1 row-cols-md-3 text-center g-4">
          {/* Address Column */}
          <Col className="border-end">
            <FaMapMarkerAlt size={30} className="footer-icon" />
            <h4 className="mt-3 footer-title">Address</h4>
            <p className="footer-text">
              1210 Scottsville Rd<br />
              Lafayette, TN 37083<br />
              United States
            </p>
          </Col>

          {/* Phone Column */}
          <Col className="border-end">
            <FaPhoneAlt size={30} className="footer-icon" />
            <h4 className="mt-3 footer-title">Phone</h4>
            <a href="tel:6156667831" className="footer-text text-decoration-none">
              (615) - 666 - 7831
            </a>
          </Col>

          {/* Connect Column */}
          <Col>
            <FaThumbsUp size={30} className="footer-icon" />
            <h4 className="mt-3 footer-title">Connect</h4>
            <a href="https://www.facebook.com/p/Gross-Appliance-TV-Inc-100063585067859/" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={40} className="footer-icon" />
            </a>
          </Col>
        </Row>

        {/* Footer Logo */}
        <div className="text-center mt-4 border-top pt-4">
          <img src="/pictures/logo2.png" alt="Brand Logo" className="img-fluid" style={{ maxWidth: "250px" }} />
        </div>
      </Container>
    </div>
  );
};

export default Home;
