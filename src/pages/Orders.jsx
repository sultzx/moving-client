import React from "react";
import { Container, Row, Col, Button, Card, Form } from "react-bootstrap";

import Order from "../components/Order/Order";
import "../styles/Orders.scss";

const Orders = () => {
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
          <h3>Менің тапсырыстарым</h3>
        </Row>
        {/* <hr /> */}
        <br />
        <Row>
          {[...Array(8)].map((item, i) => (
            <Col lg={4} md={6} sm={12} xs={12}>
              <Order key={i} i={i}/>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Orders;
