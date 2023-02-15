import React from "react";
import { Container, Row, Col, Button, Card, Form } from "react-bootstrap";

import "../styles/CreateOrder.scss";

const UpdateOrder = () => {

  const inputFileRef = React.useRef(null);

  const image =
    "https://www.nissanusa.com/content/dam/Nissan/us/vehicles/gtr/2023/overview/cards/2023-nissan-gtr-solid-red-driving-on-track-overhead-view.jpg";

  const altImage =
    "https://archive.org/download/placeholder-image/placeholder-image.jpg";

  return (
    <>
      <Container>
        <br />
        <Row>
          <h3>Менің тапсырысым</h3>
        </Row>
        {/* <hr /> */}
        <br />
        <Row>
          <Col className="col-12">
            <Card className="profile-card">
              <Card.Body>
                <span className="card-title">Тапсырыс панелі</span>
                <Row>
                  <Col className="col-xs-12 ">
                    <hr />
                    <Form>
                      <Row>
                        <Col lg={6}>
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
                        <Col lg={6}>
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
                        <Col lg={6}>
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
                        <Col lg={6}>
                          <Form.Group
                            className="mb-3 d-flex row align-items-center justify-content-center"
                            controlId="formBasicEmail"
                          >
                            <Form.Label>Бейнесі</Form.Label>
                            <Row>
                              <img
                                className="order-img img-fluid full"
                                src={altImage}
                                alt=""
                              />
                            </Row>
                          </Form.Group>
                        </Col>
                      </Row>
                      <hr />
                      <Col className="col-12 d-flex column justify-content-end align-items-center">
                      <Button
                          variant="primary"
                          className="switch-to-client-outline-btn"
                        >
                          Бас тарту
                        </Button>
                        <Button variant="primary" className="" type="submit">
                          Жаңарту
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

export default UpdateOrder;
