import React, { useState } from "react";
import { Container, Row, Col, Modal, Carousel } from "react-bootstrap";
import DOMPurify from "dompurify";
import "./Inventory.css";

const categories = {
  furniture: [
    { id: 1, name: "S501", image: "/furniture/S501.png" },
    { id: 2, name: "L501", image: "/furniture/L501.png" },
    { id: 3, name: "9MW27LV", image: "/furniture/9MW27LV.png" },
    { id: 4, name: "S675", image: "/furniture/S675.png" },
    { id: 5, name: "L675", image: "/furniture/L675.png" },
    { id: 6, name: "6N77", image: "/furniture/6N77.png" },
    { id: 10, name: "U700", image: "/furniture/U700.png" },
    { id: 11, name: "L700", image: "/furniture/L700.png" },
    { id: 12, name: "8MW87", image: "/furniture/8MW87.png" },
    { id: 13, name: "S515", image: "/furniture/S515.png" },
    { id: 14, name: "L515", image: "/furniture/L515.png" },
    { id: 9, name: "9MW87-1", image: "/furniture/9MW87-1.png" },
    { id: 101, name: "S715", image: "/furniture/S715-1.png" },
    { id: 102, name: "L715", image: "/furniture/L715-1.png" },
    { id: 103, name: "7M17", image: "/furniture/7M17.png" },
    { id: 104, name: "S910", image: "/furniture/S910.png" },
    { id: 105, name: "L910", image: "/furniture/L910.png" },
    { id: 106, name: "9N17", image: "/furniture/9N17.png" },
    { id: 15, name: "6M57", image: "/furniture/6M57.png" },
    { id: 18, name: "9B14", image: "/furniture/9B14.png" },
    { id: 19, name: "9MW87-1-CAMO", image: "/furniture/9MW87-1CAMO.png" },
    { id: 20, name: "6M572", image: "/furniture/6M572.png" },
    { id: 21, name: "8N072", image: "/furniture/8N072.png" },
    { id: 22, name: "9MW87-1LV", image: "/furniture/9MW87-1LV.png" },
    { id: 23, name: "9MW87-1LVT", image: "/furniture/(MW87-1LVT.png" },
    { id: 24, name: "9MW87-1", image: "/furniture/9MW87-12.png" },
    { id: 25, name: "9MW87-1", image: "/furniture/(MW87-13.png" },
    { id: 8, name: "8N07", image: "/furniture/8N07.png" },
    { id: 26, name: "8M47", image: "/furniture/8N47.png" },
    { id: 27, name: "6N57", image: "/furniture/6N57.png" },
    { id: 28, name: "9MW17-1", image: "/furniture/9MW17-1.png" },
    { id: 107, name: "7M27", image: "/furniture/7M27.png" },
    { id: 29, name: "7NW57", image: "/furniture/7NW57.png" },
    { id: 30, name: "7NW572", image: "/furniture/7NW572.png" },
    { id: 31, name: "9MW81-1", image: "/furniture/9MW81-1.png" },
    { id: 32, name: "M700 SECTIONAL", image: "/furniture/M700Sectional.png" },

  ],
  kitchen: [
    { id: 33, name: "MDB4949", image: "/kitchen/MDB4949.png", info: "50-dBA", description: "Available in stainless, black, and white."}, //stainless bl white
    { id: 34, name: "WDT750", image: "/kitchen/WDT750.png",  info: "47-dBA", description: "Available in stainless, black, and white."}, //stainless bl white
    { id: 37, name: "WDT730", image: "/kitchen/WDT730-1.png" }, //stainless
    { id: 35, name: "WDP560", image: "/kitchen/WDP560-2.png", description: "Available in black or white."}, //bl or white
    { id: 36, name: "WDP341", image: "/kitchen/WDP341.png" }, //bl or white
    { id: 38, name: "ADFS2524", image: "/kitchen/ADFS2524.png", description: "Available in black or white."}, //bl white
    { id: 39, name: "MMMS4230PZ", image: "/kitchen/MMMS4230PZ.png",  description: "Available in stainless."}, //stainless
    { id: 40, name: "WMH31017", image: "/kitchen/WMH31017.png", description: "Available in stainless, black, and white." }, //all 23=
    { id: 41, name: "MFES6030RZ", image: "/kitchen/MFES6030RZ.png",  description: "Available in stainless."}, //stainless
    { id: 42, name: "WFE525", image: "/kitchen/WFE525.png" }, 
    { id: 43, name: "WFE525 black", image: "/kitchen/WFE525black.png" },
    { id: 44, name: "WFES3330", image: "/kitchen/WFES3330.png" },
    { id: 99, name: "WFC315", image: "/kitchen/WFC315.png", description: "Available in black or white." },
    { id: 58, name: "ACR4203", image: "/kitchen/ACR4203.png" },
    { id: 45, name: "WCC31430", image: "/kitchen/WCC31430.png" },
    { id: 46, name: "WCC31430 black", image: "/kitchen/WCC31430black.png" },
    { id: 47, name: "WCE55", image: "/kitchen/WCE55.png" },
    { id: 48, name: "WCE55bl", image: "/kitchen/WCE55bl.png" },
    { id: 51, name: "MFI2570", image: "/kitchen/MFI2570.png" },
    { id: 52, name: "WRFF3436", image: "/kitchen/WRFF3436.png" },
    { id: 53, name: "WRS325", image: "/kitchen/WRS325.png" },
    { id: 54, name: "WRS325", image: "/kitchen/WRS325white.png" },
    { id: 54, name: "WRS325", image: "/kitchen/WRS325BLACK.png" },
    { id: 55, name: "WRT311", image: "/kitchen/WRT311.PNG" },
    { id: 56, name: "WRS318", image: "/kitchen/WRS318.png" },
    { id: 60, name: "ART104", image: "/kitchen/ART104.png" },
    { id: 49, name: "MZF34X16", image: "/kitchen/MZF34X16.png" },
    { id: 49, name: "MZF34X20", image: "/kitchen/MZF34X201.png" },
    { id: 57, name: "ACQ09", image: "/kitchen/ACQ09.png" },

    
  ],
  bedding: [
    { id: 61, name: "Keystone Firm", image: "/bedding/mattress1.png" },
    { id: 62, name: "Pikes", image: "/bedding/mattress2.png" },
    { id: 63, name: "3900", image: "/bedding/mattress3.png" },
    { id: 64, name: "Mismatch", image: "/bedding/mattress4.png" },
    { id: 65, name: "Keystone", image: "/bedding/mattress5.png" },
    { id: 66, name: "Pikes", image: "/bedding/mattress6.png" },
    { id: 67, name: "Snowbird", image: "/bedding/mattress7.png" },
    { id: 68, name: "Snowbird ET", image: "/bedding/mattress8.png" },
    { id: 107, name: "Adjustable Bed", image: "/bedding/B26.png" },
  ],
  tvs: [
    { id: 69, name: "36854", image: "/tvs/tv1.png" },
    { id: 70, name: "23942", image: "/tvs/tv2.png" },
    { id: 71, name: "33855", image: "/tvs/tv3.png" },
    { id: 72, name: "30744", image: "/tvs/tv4.png" },
    { id: 73, name: "23948", image: "/tvs/tv5.png" },
    { id: 108, name: "14360", image: "/tvs/14360.png", description: "Available in 60 inches (4 shelves) and 72 inches (5 shelves). " },

],
  washers: [
    { id: 77, name: "MVW6230", image: "/washers/MVW6230RHW-1.png", description: "5 year warranty."},
    { id: 75, name: "MED6230", image: "/washers/MED6230RWHDRYER.png", description: "5 year warranty." },
    { id: 93, name: "WTW8127", image: "/washers/WTW8127.png" },
    { id: 84, name: "WED8127", image: "/washers/WED8120.png" },
    { id: 92, name: "WTW6157", image: "/washers/WTW6157.png" },
    { id: 83, name: "WED6150", image: "/washers/WED6150.png" },
    { id: 91, name: "WTW5057", image: "/washers/WTW5057.png "},
    { id: 81, name: "WED5010", image: "/washers/WED5010.png" },
    { id: 76, name: "MVW4505", image: "/washers/MVW4505WASHER.png" },
    { id: 74, name: "MED4500", image: "/washers/MED4500DRYER.png" },
    { id: 90, name: "WTW4957", image: "/washers/WTW4957.png" },
    { id: 80, name: "WED4950", image: "/washers/WED4950.png" },
    { id: 79, name: "NTW4519", image: "/washers/NTW4519.png" },
    { id: 78, name: "NED4655", image: "/washers/NED4655.png" },
    { id: 89, name: "MHW5630", image: "/washers/MHW5630WASHER.png" },
    { id: 82, name: "MED5630", image: "/washers/MED5630DRYER.png" },
    { id: 85, name: "WFP2715", image: "/washers/WFP2715.png" },
  ],
  pellets: [
    { id: 94, name: " Pellet Grill", image: "/pellets/grill.png" },
    { id: 95, name: "11235", image: "/pellets/chest1.png" },
    { id: 96, name: "15234", image: "/pellets/chest2.png" },
    { id: 97, name: "13234", image: "/pellets/chest3.png" },
    { id: 98, name: "3343", image: "/pellets/chest4.png" },
    { id: 100, name: "3315", image: "/pellets/CHEST5.png" },
  ],
  other: [

  ],
};

const Inventory = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  const openModal = (category, index) => {
    setSelectedCategory(category);
    setSelectedIndex(index);
    setShowModal(true);
  };

  return (
    <Container className="mt-4">
      {/* Header Section */}
      <h1 className="text-center ">Current Inventory</h1>
      <p className="text-center">
        Appliance Excellence: Elevate your home with our premium selection – see it online, experience it in-store.
      </p>

      <div class="row">
  <div class="col-sm-4 mb-3 mb-sm-0 category-box" onClick={() => scrollToSection("furniture")}>
    <div class="card">
      <div class="card-body">
        <h5 class="card-title fw-light">Furniture</h5>
        <img src="/furniture/cover.png" className="img-fluid rounded shadow " alt="Furniture" />
      </div>
    </div>
  </div>
  <div class="col-sm-4 mb-3 mb-sm-0 category-box" onClick={() => scrollToSection("kitchen")}>
    <div class="card">
      <div class="card-body">
        <h5 class="card-title fw-light">Kitchen Appliances</h5>
        <img src="/kitchen/cover.png" className="img-fluid rounded shadow " alt="Furniture" />
      </div>
    </div>
  </div>
  <div class="col-sm-4 mb-3 mb-sm-0 category-box" onClick={() => scrollToSection("bedding")}>
    <div class="card">
      <div class="card-body">
        <h5 class="card-title fw-light">Bedding</h5>
        <img src="/bedding/cover.png" className="img-fluid rounded shadow " alt="Furniture" />
      </div>
    </div>
  </div>
</div>
<div class="row">
  <div class="col-sm-4 mb-3 mb-sm-0 category-box" onClick={() => scrollToSection("washers")}>
    <div class="card">
      <div class="card-body">
        <h5 class="card-title fw-light">Washers & Dryers</h5>
        <img src="/washers/cover.png" className="img-fluid rounded shadow " alt="washers" />
      </div>
    </div>
  </div>
  <div class="col-sm-4 mb-3 mb-sm-0 category-box" onClick={() => scrollToSection("pellets")}>
    <div class="card">
      <div class="card-body">
        <h5 class="card-title fw-light">Pellet Grills & Perdue Chest</h5>
        <img src="/pellets/cover.png" className="img-fluid rounded shadow " alt="pellets" />
      </div>
    </div>
  </div>
  <div class="col-sm-4 mb-3 mb-sm-0 category-box" onClick={() => scrollToSection("tvs")}>
    <div class="card">
      <div class="card-body">
        <h5 class="card-title fw-light">TV & TV Stands</h5>
        <img src="/tvs/cover.png" className="img-fluid rounded shadow " alt="tvs" />
      </div>
    </div>
  </div>
</div>
<div class="row">
  <div class="col-sm-4 mb-3 mb-sm-0 category-box" onClick={() => scrollToSection("other")}>
    <div class="card">
      <div class="card-body">
        <h5 class="card-title fw-light">Miscellaneous</h5>
        <img src="/other/cover.png" className="img-fluid rounded shadow " alt="other" />
      </div>
    </div>
  </div>
  </div>

    {/* Furniture Section */}
      <div id="furniture" className="mt-5 text-center"> 
        <div class="card align-self-center h-100">
             <div class="card-body" >
                 <h2 class="card-title fw-light">Furniture</h2>
                    <p class="card-text">For pricing please call us or visit in-store.</p>
            </div>
        </div>
            <br />
        <Row className="g-4">
          {categories.furniture.map((product, index) => (
            <Col md={4} key={product.id} className="clickable" onClick={() => openModal("furniture", index)}>
              <div className="fixed-box shadow">
                <img src={product.image} className="fixed-size-img" alt={DOMPurify.sanitize(product.name)}/>
              </div>
            </Col>
          ))}
        </Row>
      </div>

      {/* Kitchen Appliances Section */}
      <div id="kitchen" className="mt-5 text-center">
      <div class="card align-self-center h-100">
             <div class="card-body" >
                 <h2 class="card-title fw-light">Kitchen Appliances</h2>
                    <p class="card-text">For pricing please call us or visit in-store.</p>
            </div>
        </div>
        <br />
        <Row className="g-4">
          {categories.kitchen.map((product, index) => (
            <Col md={4} key={product.id} className="clickable" onClick={() => openModal("kitchen", index)}>
               <div className="fixed-box shadow">
                <img src={product.image} className="fixed-size-img" alt={DOMPurify.sanitize(product.name)} />
              </div>
            </Col>
          ))}
        </Row>
      </div>

      {/* Bedding Section */}
      <div id="bedding" className="mt-5 text-center">
      <div class="card align-self-center h-100">
             <div class="card-body" >
                 <h2 class="card-title fw-light">Bedding</h2>
                    <p class="card-text">For pricing please call us or visit in-store.</p>
            </div>
        </div>
        <br />
        <Row className="g-4">
          {categories.bedding.map((product, index) => (
            <Col md={4} key={product.id} className="clickable" onClick={() => openModal("bedding", index)}>
              <div className="fixed-box shadow">
                <img src={product.image} className="fixed-size-img" alt={DOMPurify.sanitize(product.name)}/>
              </div>
            </Col>
          ))}
        </Row>
      </div>

        {/* Washer and Dryer Section */}
        <div id="washers" className="mt-5 text-center">
        <div class="card align-self-center h-100">
             <div class="card-body" >
                 <h2 class="card-title fw-light">Washers & Dryers</h2>
                    <p class="card-text">For pricing please call us or visit in-store.</p>
            </div>
        </div>
        <br />
        <Row className="g-4">
          {categories.washers.map((product, index) => (
            <Col md={6} key={product.id} className="clickable" onClick={() => openModal("washers", index)}>
               <div className="fixed-box-washer shadow">
                <img src={product.image} className="fixed-size-img-washer" alt={DOMPurify.sanitize(product.name)} />
              </div>
            </Col>
          ))}
        </Row>
      </div>

        {/*Pellet Grills Section */}
        <div id="pellets" className="mt-5 text-center">
        <div class="card align-self-center h-100">
             <div class="card-body" >
                 <h2 class="card-title fw-light">Pellet Grills & Perdue Chest</h2>
                    <p class="card-text">For pricing please call us or visit in-store.</p>
            </div>
        </div>
        <br />
        <Row className="g-4">
          {categories.pellets.map((product, index) => (
            <Col md={4} key={product.id} className="clickable" onClick={() => openModal("pellets", index)}>
               <div className="fixed-box shadow">
                <img src={product.image} className="fixed-size-img" alt={DOMPurify.sanitize(product.name)} />
              </div>
            </Col>
          ))}
        </Row>
      </div>
              {/* TV Section */}
              <div id="tvs" className="mt-5 text-center">
        <div class="card align-self-center h-100">
             <div class="card-body" >
                 <h2 class="card-title fw-light">TVs & TV Stands</h2>
                    <p class="card-text">For pricing please call us or visit in-store.</p>
            </div>
        </div>
        <br />
        <Row className="g-4">
          {categories.tvs.map((product, index) => (
            <Col md={4} key={product.id} className="clickable" onClick={() => openModal("tvs", index)}>
               <div className="fixed-box shadow">
                <img src={product.image} className="fixed-size-img" alt={DOMPurify.sanitize(product.name)}/>
              </div>
            </Col>
          ))}
        </Row>
      </div>


            {/* Miscellaneous Section */}
            <div id="other" className="mt-5 text-center">
            <div class="card align-self-center h-100">
             <div class="card-body" >
                 <h2 class="card-title fw-light">Miscellaneous</h2>
                    <p class="card-text lh-1">There may be no better way to communicate what we do than through images.</p>
                    <p class="card-text lh-1"> As you browse our site, take a few moments to let your eyes linger here, and see if you can get a feel for our signature touch.</p>
            </div>
        </div>
        <br />
        <Row className="g-4">
          {categories.other.map((product, index) => (
            <Col md={4} key={product.id} className="clickable" onClick={() => openModal("other", index)}>
               <div className="fixed-box shadow">
                <img src={product.image} className="fixed-size-img" alt={DOMPurify.sanitize(product.name)}/>
              </div>
            </Col>
          ))}
        </Row>

              {/* Footer Logo */}
      <div className="text-center mt-4 pt-4">
        <img src="/pictures/logo2.png" alt="Brand Logo" className="img-fluid" style={{ maxWidth: "250px" }} />
      </div>
      </div>

      {/* Modal with Carousel */}
      <Modal show={showModal} onHide={() => setShowModal(false)} size="md" centered>
        <Modal.Header closeButton>
        <Modal.Title>
            {selectedCategory && selectedIndex !== null ? (
              <span dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(categories[selectedCategory][selectedIndex]?.name) }} />
            ) : (
              "Product Details"
            )}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedCategory && selectedIndex !== null && categories[selectedCategory] && categories[selectedCategory][selectedIndex] && (
            <Carousel activeIndex={selectedIndex} onSelect={(selected) => setSelectedIndex(selected)}>
              {categories[selectedCategory].map((product) => (
                <Carousel.Item key={product.id}>
                  <img className="d-block w-100" src={product.image} alt={DOMPurify.sanitize(product.name)} />
                </Carousel.Item>
              ))}
            </Carousel>
          )}
        </Modal.Body>
        <Modal.Footer>
    <Container>
      <Row>
        <Col>
        <p className="text-muted">
                  {selectedCategory && selectedIndex !== null && categories[selectedCategory][selectedIndex]?.description
                    ? categories[selectedCategory][selectedIndex].info
                    : " "}
                </p>
        </Col>
      </Row>
      <Row>
        <Col>
        <p className="text-muted">
                  {selectedCategory && selectedIndex !== null && categories[selectedCategory][selectedIndex]?.description
                    ? categories[selectedCategory][selectedIndex].description
                    : " "}
                </p>
        </Col>
      </Row>
    </Container>
  </Modal.Footer>
      </Modal>
    </Container>

    
  );
};

export default Inventory;
