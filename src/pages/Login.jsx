import React from "react";
import {
  Tab,
  Nav,
  Container,
  Row,
  Col,
  Button,
  Card,
  Form,
} from "react-bootstrap";
import { Link } from "react-router-dom";

import "../styles/Login.scss";

const Login = () => {
  return (
    <>
      <Container>
        <Row>
          <Col className="col-12 d-flex align-items-center justify-content-center">
            <Card className="login-card text-center">
              <Card.Body>
                <Tab.Container defaultActiveKey={"first"}>
                  <Card.Title>{"Кіру"}</Card.Title>
                  <Nav variant="pills" className="flex-column">
                    <Row>
                      <Col className="d-flex column justify-content-center align-items-center">
                        <Nav.Item className="flex-fill">
                          <Nav.Link
                            className="switch-nav-link"
                            eventKey="first"
                          >
                            Клиент
                          </Nav.Link>
                        </Nav.Item>
                      </Col>
                      <Col className="d-flex column justify-content-center align-items-center">
                        <Nav.Item className="flex-fill">
                          <Nav.Link
                            className="switch-nav-link"
                            eventKey="second"
                          >
                            Қызметкер
                          </Nav.Link>
                        </Nav.Item>
                      </Col>
                    </Row>
                  </Nav>
                  <hr />
                  <Row className="text-start">
                    <Tab.Content>
                      <Tab.Pane eventKey="first">
                        <Form>
                          <Form.Group
                            className="mb-3"
                            controlId="formBasicEmail"
                          >
                            <Form.Label>Қолданушы аты немесе пошта</Form.Label>
                            <Form.Control
                              className="form-control-input"
                              type="email"
                              placeholder=""
                            />

                          </Form.Group>

                          <Form.Group
                            className="mb-3"
                            controlId="formBasicPassword"
                          >
                            <Form.Label>Құпия сөз</Form.Label>
                            <Form.Control
                              className="form-control-input"
                              type="password"
                              placeholder=""
                            />
                          </Form.Group>

                          <Col className="col-12 d-flex column justify-content-end align-items-center">
                            <Link to="/registration">
                              <Button
                                variant="primary"
                                className="switch-to-client-outline-btn"
                              >
                                Тіркелу бөліміне өту
                              </Button>
                            </Link>
                            <Button
                              variant="primary"
                              className=""
                              type="submit"
                            >
                              Кіру
                            </Button>
                          </Col>
                        </Form>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Form>
                          <Form.Group
                            className="mb-3"
                            controlId="formBasicEmail"
                          >
                            <Form.Label>Қолданушы аты немесе пошта</Form.Label>
                            <Form.Control
                              className="form-control-input"
                              type="email"
                              placeholder=""
                            />
                          </Form.Group>

                          <Form.Group
                            className="mb-3"
                            controlId="formBasicPassword"
                          >
                            <Form.Label>Құпия сөз</Form.Label>
                            <Form.Control
                              className="form-control-input"
                              type="password"
                              placeholder=""
                            />
                          </Form.Group>

                          <Col className="col-12 d-flex column justify-content-end align-items-center">
                            <Link to="/registration">
                              <Button
                                variant="primary"
                                className="switch-to-client-outline-btn"
                              >
                                Тіркелу бөліміне өту
                              </Button>
                            </Link>
                            <Button
                              variant="primary"
                              className=""
                              type="submit"
                            >
                              Кіру
                            </Button>
                          </Col>
                        </Form>
                      </Tab.Pane>
                    </Tab.Content>
                  </Row>
                </Tab.Container>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Login;
