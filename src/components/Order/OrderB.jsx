import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { TrashFill } from "react-bootstrap-icons";

import "../../styles/Orders.scss";

const OrderB = ({ i, title, datetime, description, car_body, isOwner}) => {
  
  const [hover, setHover] = React.useState(false);

  const handleMouseOver = () => {
    setHover(true);
  };

  const handleMouseOut = () => {
    setHover(false);
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
              <Col className="col-10 card-title">Тапсырыс №{i + 1} • {title}</Col>
              <Col className="col-2 text-end">
                <button className="btn delete-order-btn" hidden={ isOwner ? false : true}>
                  <TrashFill
                    hidden={hover ? false : true}
                    color="#fb8500"
                    size={24}
                  />
                </button>
              </Col>
              <Col className="col-12">
                <p className="order-card-date">{datetime}</p>
              </Col>
              <Col>
                <p className="order-card-discription">
                  {description}
                </p>
              </Col>
            </Row>
          </Container>
          <Container>
            <hr />
            <Row>
              <Col className="col-6 d-flex column align-items-center">
                <img
                  width={"200px"}
                  src={car_body.img}
                  alt=""
                />
              </Col>
              <Col className="col-6 d-flex row align-items-end text-end">
                <p style={{ paddingRight: "0"}}>{car_body.characteristics.weight} кг дейін</p>
                <p style={{ paddingRight: "0" }}>{car_body.characteristics.size} м</p>
                <p
                  style={{
                    fontWeight: "700",
                    fontSize: "20px",
                    paddingRight: "0",
                  }}>
                  {car_body.characteristics.price} тнг
                </p>
              </Col>
            </Row>
          </Container>
        </Card.Body>
      </Card>
    </>
  );
};

export default OrderB;
