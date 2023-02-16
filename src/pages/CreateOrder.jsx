import React from "react";
import { Container, Row, Col, Button, Card, Form } from "react-bootstrap";

import "../styles/CreateOrder.scss";
import { Box2Fill } from "react-bootstrap-icons";

const CreateOrder = () => {
  const inputFileRef = React.useRef(null);

  const [selectedDate, SetSelectedDate] = React.useState("");

  const altImage =
    "https://archive.org/download/placeholder-image/placeholder-image.jpg";

  return (
    <>
      <Container>
        <br />
        <Row>
          <h3>Тапсырыс жасау</h3>
          <Col className="col-12" style={{ paddingTop: "18px" }}>
            <Card className="profile-card">
              <Card.Body>
                <span className="card-title">Тапсырыс панелі</span>
                <Row>
                  <Col className="col-xs-12 ">
                    <hr />
                    <Form>
                      <Row>
                        <Col lg={6}>
                          <Row>
                            <Col lg={12}>
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
                            <Col lg={12}>
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
                            <Col lg={12}>
                              <Form.Group
                                className="mb-3"
                                controlId="formBasicEmail"
                              >
                                <Form.Label>Күні мен уақыты</Form.Label>
                                <Row>
                                  <Col lg={7} xs={12} sm={12} md={7}>
                                    <Form.Select
                                      onMouseDown={() => SetSelectedDate("")}
                                      className="form-control-input"
                                      aria-label="Default select example"
                                    >
                                      <option value="0">
                                        {selectedDate && selectedDate
                                          ? selectedDate
                                          : "Уақытты таңдаңыз"}
                                      </option>
                                      <option value="1">
                                        {selectedDate && selectedDate
                                          ? selectedDate
                                          : "Бүгін"}
                                      </option>
                                      <option value="2">
                                        {selectedDate && selectedDate
                                          ? selectedDate
                                          : "Ертең"}
                                      </option>
                                      <option value="3">
                                        {selectedDate && selectedDate
                                          ? selectedDate
                                          : "Осы апта"}
                                      </option>
                                      <option value="4">
                                        {selectedDate && selectedDate
                                          ? selectedDate
                                          : "Мүмкіндігінше тез"}
                                      </option>
                                    </Form.Select>
                                  </Col>
                                  <Col
                                    lg={1}
                                    xs={12}
                                    sm={12}
                                    md={1}
                                    className="d-flex align-items-center"
                                  >
                                    <hr style={{ color: "black" }} />
                                  </Col>
                                  <Col
                                    lg={4}
                                    xs={12}
                                    sm={12}
                                    md={4}
                                    className="d-flex"
                                  >
                                    <input
                                      ref={inputFileRef}
                                      defaultValue="asd"
                                      className="order-select-date flex-fill"
                                      type="date"
                                      onChange={(event) => {
                                        SetSelectedDate(
                                          new Date(
                                            event.target.value
                                          ).toLocaleDateString("kk-KZ", {
                                            year: "numeric",
                                            month: "long",
                                            day: "numeric",
                                          })
                                        );
                                      }}
                                    />
                                  </Col>
                                </Row>
                              </Form.Group>
                            </Col>
                            <Col lg={12}>
                              <Form.Group
                                className="mb-3 d-flex row justify-content-center align-items-center"
                                controlId="formBasicEmail"
                              >
                                <Form.Label>Көлік түрі</Form.Label>
                                <Button className="choose-car-body-btn flex-fill" style={{margin: '0 12px 0 12px'}}>
                                  Таңдаңыз &nbsp;<Box2Fill/>
                                </Button>
                              </Form.Group>
                            </Col>
                          </Row>
                        </Col>
                        <Col lg={6}>
                        <Col lg={12}>
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
                                    onClick={() => {
                                      inputFileRef.current.click();
                                    }}
                                  />
                                  <input
                                    type="file"
                                    ref={inputFileRef}
                                    // onChange={handleChangeFile}
                                    hidden
                                  />
                                </Row>
                              </Form.Group>
                            </Col>
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
