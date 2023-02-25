import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { TrashFill, PencilFill } from "react-bootstrap-icons";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { fetchDeleteOrder } from "../../redux/slices/order";

import "../../styles/Orders.scss";

const OrderA = ({
  i,
  id,
  title,
  datetime,
  description,
  category,
  car_body,
  status,
  img,
  isOwner,
  response
}) => {
  const [hover, setHover] = React.useState(false);

  const dispatch = useDispatch()

  const navigate = useNavigate()

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

  const onClickRemove = async () => {
    
    if(window.confirm('Точно оширгин кеп тур ма?')) {
      let data = await dispatch(fetchDeleteOrder(id))
      response(data && data.payload && data.payload.message)
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
              <Col className="col-lg-8 col-md-6 col-sm-6 col-xs-6 card-title">
                №{i + 1} • {title}
              </Col>

              <Col className="col-lg-4 col-md-6 col-sm-6 col-xs-6  text-end">
              <button
                  className="btn delete-order-btn"
                  hidden={isOwner ? false : true}
                  onClick={()=> navigate(`/update-order/${id}`)}
                >
                  <PencilFill
                    hidden={hover ? false : true}
                    color="#fb8500"
                    size={24}
                  />
                </button>
                <button
                  className="btn delete-order-btn"
                  hidden={isOwner ? false : true}
                  onClick={onClickRemove}
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
          
          <Container>
            <Row>
              <Col className="d-flex">
              <hr />
                  <img 
                  className="order-img img-fluid flex-fill cover" 
                  onClick={ () => window.location.assign(`http://localhost:5000${img && img}`)}
                  style={{
                    maxHeight: '260px'
                  }}
                  src={`http://localhost:5000${img}`} alt="" />
              </Col>
            </Row>
          </Container>
        </Card.Body>
      </Card>
    </>
  );
};

export default OrderA;
