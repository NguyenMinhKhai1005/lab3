import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const ProductCard = ({ name, image, addToCart }) => {
  return (
    <Card>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary" onClick={addToCart}>
          Buy
        </Button>
      </Card.Body>
    </Card>
  );
};

function App() {
  // Số lượng sản phẩm trong giỏ hàng, mỗi sản phẩm có một count
  const [cart, setCart] = useState({
    "Pizza Margherita": 0,
    "Pepperoni Pizza": 0,
    "Hawaiian Pizza": 0,
  });

  // Hàm để thêm sản phẩm vào giỏ hàng
  const addToCart = (productName) => {
    setCart({
      ...cart,
      [productName]: cart[productName] + 1,
    });
  };
  // Hàm tăng
  const increaseQuantity = (productName) => {
    setCart({
      ...cart,
      [productName]: cart[productName] + 1,
    });
  };
  //Hàm giảm
  const decreaseQuantity = (productName) => {
    if (cart[productName] > 0) {
      setCart({
        ...cart,
        [productName]: cart[productName] - 1,
      });
    }
  };

  // Trạng thái để hiển thị modal giỏ hàng
  const [showCartModal, setShowCartModal] = useState(false);

  // Hàm để mở/đóng modal giỏ hàng
  const handleShowCartModal = () => setShowCartModal(true);
  const handleCloseCartModal = () => setShowCartModal(false);

  // Tính tổng số sản phẩm trong giỏ hàng
  const totalItems = Object.values(cart).reduce((acc, count) => acc + count, 0);

  return (
    <Container fluid>
      <Row>
        <Col>
          <Navbar expand="lg" className="bg-light">
            <Container fluid>
              <Navbar.Brand href="#">Pizza House</Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <Nav
                  className="me-auto my-2 my-lg-0"
                  style={{ maxHeight: "100px" }}
                  navbarScroll
                >
                  <Nav.Link href="#action1">Home</Nav.Link>
                  <Nav.Link href="#action2">Link</Nav.Link>
                  <NavDropdown title="Dropdown" id="navbarScrollingDropdown">
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="#" disabled>
                    Disabled Link
                  </Nav.Link>
                </Nav>
                <Form className="d-flex align-items-center">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  {/* Icon kính lúp */}
                  <Button variant="outline-success" className="icon-button">
                    <FontAwesomeIcon icon={faSearch} />
                  </Button>
                  {/* Icon giỏ hàng hiển thị số lượng */}
                  <Button
                    variant="outline-success"
                    className="icon-button ms-2"
                    onClick={handleShowCartModal}
                  >
                    <FontAwesomeIcon icon={faShoppingCart} />
                    <span className="ms-2">{totalItems}</span>
                  </Button>
                </Form>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </Col>
      </Row>

      {/* Modal giỏ hàng */}
      {/* Modal giỏ hàng */}
      <Modal show={showCartModal} onHide={handleCloseCartModal}>
        <Modal.Header closeButton>
          <Modal.Title>Shopping Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {Object.keys(cart).map((item) => (
            <div key={item} className="d-flex justify-content-between align-items-center">
              <p>
                {item}: {cart[item]} items
              </p>
              <div>
                <Button variant="outline-secondary" size="sm" onClick={() => decreaseQuantity(item)}>-</Button>
                <Button variant="outline-secondary" size="sm" className="ms-2" onClick={() => increaseQuantity(item)}>+</Button>
              </div>
            </div>
          ))}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseCartModal}>Close</Button>
          <Button variant="primary">Proceed to Checkout</Button>
        </Modal.Footer>
      </Modal>

      <Row>
        <Carousel>
          <Carousel.Item>
            <img src="pizza1.jpg" alt="First slide" className="d-block w-130" />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src="pizza2.jpg" alt="First slide" className="d-block w-130" />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src="pizza3.jpg" alt="First slide" className="d-block w-130" />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src="pizza4.jpg" alt="First slide" className="d-block w-130" />
            <Carousel.Caption>
              <h3>Fourth slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src="pizza5.jpg" alt="First slide" className="d-block w-130" />
            <Carousel.Caption>
              <h3>Fifth slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Row>
      <Row className="mt-5"></Row>
      <Row md={3}>
        <Col>
          <ProductCard
            name="Pizza Margherita"
            image="menu1.jpg"
            addToCart={() => addToCart("Pizza Margherita")}
          />
        </Col>
        <Col>
          <ProductCard
            name="Pepperoni Pizza"
            image="menu2.jpg"
            addToCart={() => addToCart("Pepperoni Pizza")}
          />
        </Col>
        <Col>
          <ProductCard
            name="Hawaiian Pizza"
            image="menu3.jpg"
            addToCart={() => addToCart("Hawaiian Pizza")}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
