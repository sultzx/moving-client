import React from "react";
import { Container, Row, Col, Button, Card, Form } from "react-bootstrap";

import Order from "../components/Order/OrderA";
import "../styles/Orders.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchGetAllOrders } from "../redux/slices/order";

const Orders = () => {

  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(fetchGetAllOrders())
  },[])

  const { orders } = useSelector((state) => state.orders);

  console.log(orders && orders)

  const isNewsLoading = orders && orders.status == "loading";

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
          { orders && orders.items && orders.items.map((item, i) => (
            <Col lg={4} md={6} sm={12} xs={12}>
              <Order
                key={i}
                i={i}
                title={item.title}
                datetime={item.datetime}
                description={item.description}
                category={item.category}
                car_body={item.carBody}
                status={item.status}
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
