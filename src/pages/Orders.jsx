import React from "react";
import { Container, Row, Col, Button, Card, Form } from "react-bootstrap";

import Order from "../components/Order/OrderA";
import "../styles/Orders.scss";
import one from '../images/1.png'
import two from '../images/2.png'
import three from '../images/3.png'

const Orders = () => {
  const inputFileRef = React.useRef(null);

  const image =
    "https://www.nissanusa.com/content/dam/Nissan/us/vehicles/gtr/2023/overview/cards/2023-nissan-gtr-solid-red-driving-on-track-overhead-view.jpg";

  const altImage =
    "https://archive.org/download/placeholder-image/placeholder-image.jpg";

  const car_bodies = [
    {
      id: 1,
      img: one,
      characteristics: {
        size: "2.1 / 1.7 / 2.1",
        weight: "750",
        price: "2000",
      },
    },
    {
      id: 2,
      img: two,
      characteristics: {
        size: "2.1 / 1.7 / 2.1",
        weight: "900",
        price: "3500",
      },
    },
  ];

  const orders = [
    {
      title: "Зат тасу",
      datetime: 'Бүгін',
      description:
        "Ертең таңертең Ержанов көшесінен Ерубаев көшесіне шкаф тасу",
      category: 'Қала ішінде тасымалдау',
      car_body: car_bodies[0],
    },
    {
      title: "Зат тасу",
      datetime: 'Ертең',
      description:
        "Ертең таңертең Ержанов көшесінен Ерубаев көшесіне шкаф тасу",
      category: 'Қала ішінде тасымалдау',
      car_body: car_bodies[1],
    },
    {
      title: "Зат тасу",
      datetime: 'Осы апта',
      description:
        "Ертең таңертең Ержанов көшесінен Ерубаев көшесіне шкаф тасу",
      category: 'Қала ішінде тасымалдау',
      car_body: car_bodies[0],
    },
    {
      title: "Зат тасу",
      datetime: "Мүмкіндігінше тез",
      description:
        "Ертең таңертең Ержанов көшесінен Ерубаев көшесіне шкаф тасу",
      category: 'Қала ішінде тасымалдау',
      car_body: car_bodies[1],
    },
    {
      title: "Зат тасу",
      datetime: new Date(Date.now())
        .toISOString()
        .substring(0, 10),
      description:
        "Ертең таңертең Ержанов көшесінен Ерубаев көшесіне шкаф тасу",
      category: 'Қалааралық тасымалдау',
      car_body: car_bodies[1],
    },
  ];

  return (
    <>
      <Container>
        <br />
        <Row> 
        <h3>Менің тапсырыстарым</h3>
          {orders.map((item, i) => (
            <Col lg={4} md={6} sm={12} xs={12}>
              <Order
                key={i}
                i={i}
                title={item.title}
                datetime={item.datetime}
                description={item.description}
                category={item.category}
                car_body={item.car_body}
                status={'Тапсырыс орындалуда'}
                isOwner={true}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Orders;
