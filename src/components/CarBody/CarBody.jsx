import { Col, Card,Row } from "react-bootstrap";

const CarBody = ({title, img, text, weight, size, price, select}) => {
  return (
    <>
      <Col xs={12} lg={3} md={3} sm={12}>
        <Card
          className="car-body-card flex-fill"
          onClick={select}
          >
          <Card.Body>
            <div className="d-flex column justify-content-center">
              <img className="car-body-img img-fluid cover text-center" src={img} alt="asd" />
            </div>
            <hr />
            <Card.Title>{title}</Card.Title>
            <Card.Subtitle>{weight} кг дейін</Card.Subtitle>
            <Card.Text>{text}</Card.Text>
            <Row>
              <Col className="col-8">
                <span className="car-body-size-span ">{size}&nbsp;м</span>
              </Col>
              <Col className="col-4 d-flex column justify-content-end">
                <span className="car-body-price-span ">{price}&nbsp;₸</span>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default CarBody;
