import React from "react";
import { Container, Row, Col, Button, Card, Form } from "react-bootstrap";

import Order from "../components/Order/OrderB";
import "../styles/Orders.scss";
import one from '../images/1.png'
import two from '../images/2.png'
import three from '../images/3.png'

const OrdersForEmp = () => {
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
      owner: {
        name: 'John Doe',
        phone: '87025588547',
        address: 'Karagandy, Erzhanov, 43 / 60',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80'
      }
    },
    {
      title: "Зат тасу",
      datetime: 'Ертең',
      description:
        "Ертең таңертең Ержанов көшесінен Ерубаев көшесіне шкаф тасу",
      category: 'Қала ішінде тасымалдау',
      car_body: car_bodies[1],
      owner: {
        name: 'John Doe',
        phone: '87025588547',
        address: 'Karagandy, Erzhanov, 43 / 60',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80'
      }
    },
    {
      title: "Зат тасу",
      datetime: 'Осы апта',
      description:
        "Ертең таңертең Ержанов көшесінен Ерубаев көшесіне шкаф тасу",
      category: 'Қала ішінде тасымалдау',
      car_body: car_bodies[0],
      owner: {
        name: 'John Doe',
        phone: '87025588547',
        address: 'Karagandy, Erzhanov, 43 / 60',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80'
      }
    },
    {
      title: "Зат тасу",
      datetime: "Мүмкіндігінше тез",
      description:
        "Ертең таңертең Ержанов көшесінен Ерубаев көшесіне шкаф тасу",
      category: 'Қала ішінде тасымалдау',
      car_body: car_bodies[1],
      owner: {
        name: 'John Doe',
        phone: '87025588547',
        address: 'Karagandy, Erzhanov, 43 / 60',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80'
      }
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
      owner: {
        name: 'John Doe',
        phone: '87025588547',
        address: 'Karagandy, Erzhanov, 43 / 60',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80'
      }
    },
  ];

  return (
    <>
      <Container>
        <br />
        <Row> 
        <h3>Тапсырыстар</h3>
          {orders.map((item, i) => (
            <Col lg={6} md={12} sm={12} xs={12}>
              <Order
                key={i}
                i={i}
                title={item.title}
                datetime={item.datetime}
                description={item.description}
                category={item.category}
                car_body={item.car_body}
                status={'Тапсырыс орындалуда'}
                owner={item.owner}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default OrdersForEmp;
