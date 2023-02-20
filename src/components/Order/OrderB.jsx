import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { PersonFill, PinMapFill } from "react-bootstrap-icons";

import "../../styles/Orders.scss";

const OrderB = ({
  i,
  title,
  datetime,
  description,
  category,
  car_body,
  status,
  owner
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
          <Container style={{ height: "auto" }}>
            <Row>
              <Col className="col-10 card-title">
                Тапсырыс №{i + 1} • {title}
              </Col>
              <Col className="col-12">
                Орындалу уақыты: &nbsp;
                <span className={`order-card-date ${datetimeColorHandler()}`}>
                  {datetime}
                </span>
              </Col>
              <Col className="col-12" style={{marginTop: '12px'}}>
              Категория:&nbsp; <span style={{fontWeight: '500', fontStyle: 'italic'}}>{category}</span>
              </Col>
              <Col className="col-12">
                <p className="order-card-discription-label">Толығырақ</p>
                <div className="order-card-discription">
                  <p>{description}</p>
                </div>
              </Col>

              <Col className="col-12 d-flex align-items-center">
                Дәрежесі (статус):
                <span className="order-card-status">{status}</span>
              </Col>
            </Row>
            <p className="order-card-discription-label" style={{margin: '12px 0 0 0'}}>Кузов түрі</p>
            <div className="order-card-discription" style={{ height: "auto" }}>
              <Row>
                <Col className="col-6 d-flex column align-items-center">
                  <img width={"200px"} src={car_body.img} alt="" />
                </Col>
                <Col className="col-6 d-flex row align-items-end text-end">
                  <p style={{ paddingRight: "0" }}>
                    {car_body.characteristics.weight} кг дейін
                  </p>
                  <p style={{ paddingRight: "0" }}>
                    {car_body.characteristics.size} м
                  </p>
                  <p
                    style={{
                      fontWeight: "700",
                      fontSize: "20px",
                      paddingRight: "0",
                    }}
                  >
                    {car_body.characteristics.price} тнг
                  </p>
                </Col>
              </Row>
            </div>
            <hr />
            <Row>

              <Col xs={12} className="col-lg-9 col-xs-12 d-flex row align-items-center justify-content-end text-end">
                <h5>{owner.name}&nbsp;<PersonFill color="#fb8500" size='28px'/>&nbsp;</h5>
                <p>{owner.address}&nbsp;<PinMapFill color="#fb8500" size='22px'/> &nbsp;</p>
                    
              </Col>
              <Col className="col-lg-3 col-xs-12 d-flex column align-items-center justify-content-end">
                <img src={owner.avatar} className='order-card-owner-img' height={'150px'} width={'150px'} alt="" />
              </Col>
            </Row>
            <hr />
          </Container>
        </Card.Body>
      </Card>
    </>
  );
};

export default OrderB;
