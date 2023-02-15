import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { TrashFill } from "react-bootstrap-icons";

import "../../styles/Orders.scss";

const Order = ({ i }) => {
  const [hover, setHover] = React.useState(false);

  const handleMouseOver = () => {
    setHover(true);
    console.log(hover);
  };

  const handleMouseOut = () => {
    setHover(false);
    console.log(hover);
  };

  return (
    <>
      <Card
        className="order-card"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <Card.Body className="d-flex row align-items-start">
          <Container style={{ height: "150px" }}>
            <Row>
              <Col className="col-6 card-title">Тапсырыс №{i + 1}</Col>
              <Col className="col-6 text-end">
                <button className="btn delete-order-btn" hidden={false}>
                  <TrashFill
                    hidden={hover ? false : true}
                    color="#fb8500"
                    size={24}
                  />
                </button>
              </Col>
              <Col className="col-12">
                <p className="order-card-date">2023-02-2{i + 1}</p>
              </Col>
              <Col>
                <p className="order-card-discription">
                  Quangaliyev Zhumagaiyev
                </p>
              </Col>
            </Row>
          </Container>
          <Container>
          <hr />

            <Row>
                <Col className="col-6">
                    <img width={"200px"} 
                    src="https://ohso.ok.gov/sites/g/files/gmc751/f/misc-transportation-icon.png" alt="" />
                </Col>
                <Col className="col-6 d-flex row align-items-end text-end">
                    <p>Бағасы: 2000 тнг</p>
                </Col>
            </Row>
          </Container>
        </Card.Body>
      </Card>
    </>
  );
};

export default Order;
