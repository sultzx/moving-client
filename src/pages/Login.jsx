import { Container, Row, Col, Button, Card } from "react-bootstrap";

import "../styles/Login.scss";

const Login = () => {
  return (
    <>
      <Container>
        <Row>
          <Col className="col-12 d-flex align-items-center justify-content-center">
            <Card className="login-card text-center">
              <Card.Body>
                <Card.Title>{"Кіру"}</Card.Title>
                <Row>
                  <Col className="d-flex column justify-content-center align-items-center">
                    <Button className="switch-to-client-outline-btn flex-fill">Клиент үшін</Button>
                  </Col>
                  <Col className="d-flex column justify-content-center align-items-center">
                    <Button className="flex-fill">Қызметкер үшін</Button>
                  </Col>
                </Row>
                
                <Row>
                <Col className="d-flex column justify-content-center align-items-center">
                    <input className=" flex-fill" type="text" />
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

export default Login;
