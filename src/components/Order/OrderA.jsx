import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { TrashFill } from "react-bootstrap-icons";

import "../../styles/Orders.scss";

const OrderA = ({
  i,
  title,
  datetime,
  description,
  category,
  car_body,
  status,
  isOwner,
}) => {
  const [hover, setHover] = React.useState(false);

  const handleMouseOver = () => {
    setHover(true);
  };

  const handleMouseOut = () => {
    setHover(false);
  };

  const datetimeColorHandler = () => {
    switch (datetime) {
      case "Бүгін":
        return "today";
      case "Ертең":
        return "tomorrow";
      case "Осы апта":
        return "week";
      case "Мүмкіндігінше тез":
        return "fastly";
      default:
        return "datepick";
    }
  };

  return (
    <>
      <Card
        className="order-card"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <Card.Body className="d-flex row align-items-start">
          <Container>
            <Row>
              <Col className="col-10 card-title">
                №{i + 1} • {title}
              </Col>
              <Col className="col-2 text-end">
                <button
                  className="btn delete-order-btn"
                  hidden={isOwner ? false : true}
                >
                  <TrashFill
                    hidden={hover ? false : true}
                    color="#fb8500"
                    size={24}
                  />
                </button>
              </Col>
              <Col className="col-12">
                <span className={`order-card-date ${datetimeColorHandler()}`}>
                  {datetime}
                </span>
                <Row>
                  <Col>
                    <hr style={{ marginTop: "24px" }} />
                  </Col>
                  <Col className="col-auto">
                    <p
                      style={{
                        margin: "10px 12px 6px 0px",
                        fontWeight: "500",
                        fontStyle: "oblique",
                        fontSize: '18px',
                        color: '#FB8500'
                      }}
                    >
                      {category}
                    </p>
                  </Col>
                </Row>
              </Col>
              <Col>
                <p className="order-card-discription for-owner">{description}</p>
                <Row>
                  <Col className="col-auto ">
                    <span className="order-card-status">{status}</span>
                  </Col>
                  <Col>
                    <hr style={{ marginTop: "12px" }} />
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
          <Container>
            <Row>
              <Col className="col-6 d-flex column align-items-center">
                <img width={"200px"} src={`http://localhost:5000${car_body.img}`} alt="" />
              </Col>
              <Col className="col-6 d-flex row align-items-end text-end">
                <p style={{ paddingRight: "0" }}>
                  {car_body.weight} кг дейін
                </p>
                <p style={{ paddingRight: "0" }}>
                  {car_body.size} м
                </p>
                <p
                  style={{
                    fontWeight: "700",
                    fontSize: "20px",
                    paddingRight: "0",
                  }}
                >
                  {car_body.price} тнг
                </p>
              </Col>
            </Row>
          </Container>
        </Card.Body>
      </Card>
    </>
  );
};

export default OrderA;
