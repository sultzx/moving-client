import React from "react";
import { Container, Row, Col, Button, Card, Form } from "react-bootstrap";

import '../styles/CreateOrder.scss'

const CreateOrder = () => {
  const inputFileRef = React.useRef(null);

  const image = 'https://www.nissanusa.com/content/dam/Nissan/us/vehicles/gtr/2023/overview/cards/2023-nissan-gtr-solid-red-driving-on-track-overhead-view.jpg'

  const altImage = 'https://br-ag.eu/wp-content/uploads/2019/09/placeholder.png'

  return (
    <>
      <Container>
        <br />
        <Row>
          <h3>Тапсырыс жасау</h3>
        </Row>
        <hr />
        <br />
        <Row>
          <Col className="col-12">
            <Card className="profile-card">
              <Card.Body>
                <Card.Title>Тапсырыс панелі</Card.Title>
                <Row>
                  <Col className="col-xs-12 ">
                    <hr />
                    <Form>
                      <Row>
                        <Col lg={4}>
                          <Form.Group
                            className="mb-3"
                            controlId="formBasicEmail"
                          >
                            <Form.Label>Тапсырыс атауы</Form.Label>
                            <Form.Control
                              className="form-control-input"
                              type="text"
                              placeholder=""
                            />
                          </Form.Group>
                        </Col>
                        <Col lg={4}>
                          <Form.Group
                            className="mb-3"
                            controlId="formBasicEmail"
                          >
                            <Form.Label>Тапсырыс сипаттамасы</Form.Label>
                            <Form.Control
                              className="form-control-input"
                              type="text"
                              placeholder=""
                            />
                          </Form.Group>
                        </Col>
                        <Col lg={4}>
                          <Form.Group
                            className="mb-3"
                            controlId="formBasicEmail"
                          >
                            <Form.Label>Категория</Form.Label>
                            <Form.Select
                              className="form-control-input"
                              aria-label="Default select example"
                            >
                              <option>Open this select menu</option>
                              <option value="1">One</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                            </Form.Select>
                          </Form.Group>
                        </Col>
                        <Col lg={4}>

                        </Col>
                        <Col lg={4}>

                        </Col>
                        <Col lg={4}>
                            <img className="order-img img-fluid" src={image} alt="" />
                        </Col>
                      </Row>
                        <hr />
                      <Col className="col-12 d-flex column justify-content-end align-items-center">
                        <Button variant="primary" className="" type="submit">
                          Сақтау
                        </Button>
                      </Col>
                    </Form>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CreateOrder;
