import React from 'react'
import { Container, Row, Col, Button, Card, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';

import "../styles/Profile.scss";

const Profile = () => {
    
  const inputFileRef = React.useRef(null);

  const isEmployee = true

  return (
    <>
      <Container>
        <br />
        <Row>
          <h3>{isEmployee ? 'Қызметкердің жеке профилі' :  'Клиенттің жеке профилі'}</h3>
        </Row>
        <hr />
        <br />
        <Row>
          <Col className="col-12">
            <Card className="profile-card">
              <Card.Body>
                <Card.Title>Жеке ақпарат</Card.Title>
                <Row>
                  <Col className="col-lg-2 col-xs-12 text-center d-flex column align-items-lg-end">
                    <img
                      className="profile-avatar"
                      onClick={() => {
                        inputFileRef.current.click();
                      }}
                      src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                      alt=""
                    />
                   <input
                    type="file"
                    ref={inputFileRef}
                    // onChange={handleChangeFile}
                    hidden
                  />
                  </Col>
                  <Col className="col-xs-12 ">
                    <h3>{"user.username"}</h3>
                    <hr />
                    <Form>
                      <Row>
                        <Col lg={4}>
                          <Form.Group
                            className="mb-3"
                            controlId="formBasicEmail"
                          >
                            <Form.Label>Аты-жөніңіз</Form.Label>
                            <Form.Control
                              className="form-control-input"
                              type="text"
                              placeholder=""/>
                          </Form.Group>
                        </Col>
                        <Col lg={4}>
                          <Form.Group
                            className="mb-3"
                            controlId="formBasicEmail"
                          >
                            <Form.Label>Телефон нөміріңіз</Form.Label>
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
                            <Form.Label>{isEmployee ? 'Компания' : 'Мекен-жайыңыз'}</Form.Label>
                            <Form.Control
                              className="form-control-input"
                              type="email"
                              placeholder=""
                            />
                          </Form.Group>
                        </Col>
                      </Row>

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
          <Col className="col-12">
            <br />
{   isEmployee ? <Card className="profile-card">
              <Card.Body>
                <Card.Title>Тапсырыс орындау</Card.Title>
                <Card.Text>
                 Жүйе ішінде тіркелген қызметкер клиенттердің тапсырысын орындай алады. Ол үшін төмендегі "Тапсырыстар" батырмасын басып, тізімдегі кез-келген тапсырысты орындай алады.
                </Card.Text>
                <Col className="col-12 d-flex column justify-content-end align-items-center">
                  <Button variant="primary" className="" type="submit">
                    Тапсырыстар
                  </Button>
                </Col>
              </Card.Body>
            </Card>  :         
            <Card className="profile-card">
              <Card.Body>
                <Card.Title>Тапсырыс жасау</Card.Title>
                <Card.Text>
                  Әрбір клиент өзінің тапсырысын осы панель ішінде бере алады.
                  Тапсырыс беру үшін "Тапсырыс қосу" батырмасын баса аласыз.
                  Барлық тапсырыстарыңызды көру үшін "Барлық тапсырыстар"
                  батырмысын басуыңызға болады
                </Card.Text>
                <Col className="col-12 d-flex column justify-content-end align-items-center">
                  <Button
                    variant="primary"
                    className="switch-to-client-outline-btn"
                  >
                    Барлық тапсырмалар
                  </Button>
                  <Button variant="primary" className="" type="submit">
                    Тапсырыс жасау
                  </Button>
                </Col>
              </Card.Body>
            </Card>}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Profile;
