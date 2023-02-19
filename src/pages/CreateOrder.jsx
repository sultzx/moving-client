import React from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  Form,
  Modal,
} from "react-bootstrap";

import "../styles/CreateOrder.scss";
import { Box2Fill } from "react-bootstrap-icons";

import one from "../images/1.png";
import two from "../images/2.png";
import three from '../images/3.png';
import four from '../images/4.png';
import five from '../images/5.png';
import six from '../images/6.png';
import seven from '../images/7.png';
import CarBody from "../components/CarBody/CarBody";

const CreateOrder = () => {
  
  const inputFileRef = React.useRef(null);

  const [selectedDate, SetSelectedDate] = React.useState("");

  const [selectedCarBody, setSelectedCarBody] = React.useState("");

  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSelectCarBody = (data) => {
    setSelectedCarBody(data);
    handleClose();
  }

  console.log(selectedCarBody);

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
                                <Form.Label>Категория</Form.Label>
                                <Form.Select className="form-control-input">
                                <option></option>
                                <option value="1">Қала ішінде тасымалдау</option>
                                <option value="2">Қалааралық тасымалдау</option>
                              </Form.Select>
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
                                <Button
                                  onClick={handleShow}
                                  className="choose-car-body-btn flex-fill"
                                  style={{ margin: "0 12px 0 12px" }}
                                >
                                  {selectedCarBody && selectedCarBody? selectedCarBody : 'Таңдаңыз'} &nbsp;
                                  <Box2Fill />
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

      <Modal show={show} onHide={handleClose} fullscreen >
        <Modal.Header closeButton>
          <Modal.Title>Көлік түрін таңдау</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
          <CarBody
              title={'Кіші кузов'}
              img={one}
              text={'шағын құрылғылар, креслолар немесе шкаф сыйады'}
              weight={'400'}
              size={'1.7 / 1 / 0.9'}
              price={'2000'}
              select={() => handleSelectCarBody('Кіші кузов')}
            />
            <CarBody
              title={'Микроавтобус'}
              img={two}
              text={'шағын жиһаздар мен қораптарды тасымалдауға арналған'}
              weight={'750'}
              size={'2.1 / 1.7 / 2.1'}
              price={'2800'}
              select={() => handleSelectCarBody('Микроавтобус')}
            />
            <CarBody
              title={'Орта кузов'}
              img={three}
              text={'ішінде заттары бар қорабтар мен диван сыйады'}
              weight={'1500'}
              size={'3.0 / 2.0 / 2.0'}
              price={'3200'}
              select={() => handleSelectCarBody('Орта кузов')}
            />
            <CarBody
              title={'Үлкен кузов'}
              img={seven}
              text={'үлкен құрылғылар, барлық жиһаздар мен қораптар сәйкес сыйады'}
              weight={'5000'}
              size={'5.8 / 2.45 / 2.2'}
              price={'6500'}
              select={() => handleSelectCarBody('Үлкен кузов')}
            />
            <CarBody
              title={'Борттық жүк көлігі'}
              img={four}
              text={'жиналмалы жақтары бар, үлкен жиһаздар мен құрылыс материалдары сыйады'}
              weight={'7000'}
              size={'2.0 / 5.0 / 2.2'}
              price={'7600'}
              select={() => handleSelectCarBody('Борттық жүк көлігі')}
            />
            <CarBody
              title={'Фура'}
              img={six}
              text={'қалааралық, барлық жиһаздар мен құрылыс материалдары сыйады'}
              weight={'20000'}
              size={'13.6 / 2.46 / 2.7'}
              price={'16400'}
              select={() => handleSelectCarBody('Фура')}
            />
            <CarBody
              title={'Рефрижератор'}
              img={five}
              text={'тағамдар мен дәрі-дәрмектер температурасы сақталады'}
              weight={'1500'}
              size={'3.0 / 2.0 / 2.0'}
              price={'4100'}
              select={() => handleSelectCarBody('Рефрижератор')}
            />
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Жабу
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CreateOrder;
