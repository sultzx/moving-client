import React from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  Form,
  Modal,
  Alert,
} from "react-bootstrap";

import "../styles/CreateOrder.scss";
import { Box2Fill } from "react-bootstrap-icons";
import { fetchAuthMe } from "../redux/slices/auth";
import { useDispatch, useSelector } from "react-redux";
import axios from "../axios.js";
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom'

import one from "../images/1.png";
import two from "../images/2.png";
import three from "../images/3.png";
import four from "../images/4.png";
import five from "../images/5.png";
import six from "../images/6.png";
import seven from "../images/7.png";
import CarBody from "../components/CarBody/CarBody";
import { fetchCreateOrder } from "../redux/slices/order";

const CreateOrder = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate()

  const inputFileRef = React.useRef(null);

  const [errorMessage, setErrorMessage] = React.useState("");

  const [selectedCarBody, setSelectedCarBody] = React.useState("");

  const [orderImgUrl, setOrderImgUrl] = React.useState("");

  const [category, setCategory] = React.useState("");

  const [selectedDate, setSelectedDate] = React.useState("");

  const [show, setShow] = React.useState(false);

  const userData = useSelector((state) => state.auth.data);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const categoryOptions = [
    { value: "0", text: "Категорияны таңдаңыз" },
    { value: "1", text: "Қала ішінде тасымалдау" },
    { value: "2", text: "Қалааралық тасымалдау" },
  ];

  const datetimeOptions = [
    { value: "0", text: "Уақытты таңдаңыз" },
    { value: "1", text: "Бүгін" },
    { value: "2", text: "Ертең" },
    { value: "3", text: "Осы апта" },
    { value: "4", text: "Мүмкіндігінше тез" },
  ];

  const handleCategoryChange = (event) => {
    setCategory(categoryOptions[event.target.value].text);
  };

  const handleSelectCarBody = (data) => {
    setSelectedCarBody(data);
    handleClose();
  };

  const handleChangeFile = async (event) => {
    try {
      const formData = new FormData();
      const file = event.target.files[0];
      formData.append("image", file);
      const { data } = await axios.post("/api/upload/order", formData);
      setOrderImgUrl(
      data && data.url
      );
    } catch (error) {
      console.warn(error);
      alert("Бейнені көшіру кезінде қате шықты");
    }
    dispatch(fetchAuthMe());
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      title: "",
      description: "",
    },
    mode: "onChange",
  });

  console.log(selectedCarBody && selectedCarBody)

  const [allNotValid, setAllNotValid] = React.useState
  ( category == "Категорияны таңдаңыз") || 
  ( selectedDate == "Уақытты таңдаңыз") ||
  ( selectedCarBody == "Таңдаңыз") ||
  ( orderImgUrl == "")

  console.log(Boolean(allNotValid))

  const onSubmit = async (values) => {

    if (allNotValid) {
          setErrorMessage("Форманы дұрыс толтырыңыз")
    } else {

      const data = await dispatch (fetchCreateOrder({
        title: values.title,
        description: values.description,
        category: category && category,
        datetime: selectedDate && selectedDate,
        carBody: selectedCarBody && selectedCarBody,
        img: orderImgUrl && orderImgUrl,
      }));

      setErrorMessage(data.payload.message);

      if ("token" in data.payload) {
        window.localStorage.setItem("token", data.payload.token);
      }
      dispatch(fetchAuthMe());

      navigate('/orders')
      
    }
  };

  console.log(selectedDate, category);

  const altImage =
    "https://archive.org/download/placeholder-image/placeholder-image.jpg";

  return (
    <>
      <Container>
        {errorMessage && errorMessage && (
          <Alert
            className="alert"
            variant={errorMessage && errorMessage ? "danger" : "primary"}
            style={
              errorMessage && errorMessage
                ? { borderColor: "red" }
                : { borderRadius: "6px" }
            }
          >
            {
              <div className="text-center" style={{ margin: "-12px" }}>
                {errorMessage && <span>{errorMessage}</span>}
              </div>
            }
          </Alert>
        )}

        {errors &&
        errors.title ||
          errors.description  ? (
          <Alert
            className="alert"
            variant={errors && errors && "danger"}
            style={{ borderColor: "red", borderRadius: "6px" }}
          >
            {errors && errors.title && (
              <>
                {errors.title?.message}
                <br />
              </>
            )}
            {errors && errors.description && (
              <>
                {errors.description?.message}
                <br />
              </>
            )}
          </Alert>
        ) : (
          ""
        )}

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
                    <Form onSubmit={handleSubmit(onSubmit)} method="post">
                      <Row>
                        <Col lg={6}>
                          <Row>
                            <Col lg={12}>
                              <Form.Group className="mb-3">
                                <Form.Label>Тапсырыс атауы</Form.Label>
                                <Form.Control
                                  style={
                                    Boolean(errors.title?.message)
                                      ? {
                                          borderColor: "red",
                                          background: "rgba(255, 0, 0, 0.122)",
                                        }
                                      : { borderColor: "#FB8500" }
                                  }
                                  {...register("title", {
                                    required: "Тапсырыс атауын енгізіңіз",
                                    minLength: {
                                      value: 3,
                                      message:
                                        "Тапсырыс атауы 3 символдан кем болмауы керек",
                                    },
                                  })}
                                  className="form-control-input"
                                  type="text"
                                  placeholder=""
                                />
                              </Form.Group>
                            </Col>
                            <Col lg={12}>
                              <Form.Group className="mb-3">
                                <Form.Label>Тапсырыс сипаттамасы</Form.Label>
                                <Form.Control
                                  style={
                                    Boolean(errors.description?.message)
                                      ? {
                                          borderColor: "red",
                                          background: "rgba(255, 0, 0, 0.122)",
                                        }
                                      : { borderColor: "#FB8500" }
                                  }
                                  {...register("description", {
                                    required: "Тапсырыс сипаттамасын енгізіңіз",
                                    minLength: {
                                      value: 3,
                                      message:
                                        "Тапсырыс сипаттамасы 3 символдан кем болмауы керек",
                                    },
                                  })}
                                  className="form-control-input"
                                  type="text"
                                  placeholder=""
                                />
                              </Form.Group>
                            </Col>

                            <Col lg={12}>
                              <Form.Group className="mb-3">
                                <Form.Label>Категория</Form.Label>
                                <Form.Select
                                  selected={category}
                                  onChange={handleCategoryChange}
                                  className="form-control-input"
                                >
                                  {categoryOptions.map((option) => (
                                    <option
                                      key={option.value}
                                      value={option.value}
                                    >
                                      {option.text}
                                    </option>
                                  ))}
                                </Form.Select>
                              </Form.Group>
                            </Col>

                            <Col lg={12}>
                              <Form.Group className="mb-3">
                                <Form.Label>Күні мен уақыты</Form.Label>
                                <Row>
                                  <Col lg={7} xs={12} sm={12} md={7}>
                                    <Form.Select
                                      onMouseDown={() => setSelectedDate("")}
                                      onChange={(event) =>
                                        setSelectedDate(
                                          datetimeOptions[event.target.value]
                                            .text
                                        )
                                      }
                                      className="form-control-input"
                                    >
                                      {datetimeOptions.map((option) => (
                                        <option
                                          key={option.value}
                                          value={option.value}
                                        >
                                          {selectedDate && selectedDate
                                            ? selectedDate
                                            : option.text}
                                        </option>
                                      ))}
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
                                        setSelectedDate(
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
                              <Form.Group className="mb-3 d-flex row justify-content-center align-items-center">
                                <Form.Label>Көлік түрі</Form.Label>
                                <Button
                                  onClick={handleShow}
                                  className="choose-car-body-btn flex-fill"
                                  style={{ margin: "0 12px 0 12px" }}
                                >
                                  {selectedCarBody && selectedCarBody
                                    ? selectedCarBody
                                    : "Таңдаңыз"}{" "}
                                  &nbsp;
                                  <Box2Fill />
                                </Button>
                              </Form.Group>
                            </Col>
                          </Row>
                        </Col>
                        <Col lg={6}>
                          <Col lg={12}>
                            <Form.Group className="mb-3 d-flex row align-items-center justify-content-center">
                              <Form.Label>Бейнесі</Form.Label>
                              <Row>
                                <img
                                  className="order-img img-fluid full"
                                  src={
                                    orderImgUrl && orderImgUrl
                                      ? `http://localhost:5000${orderImgUrl}`
                                      : altImage
                                  }
                                  alt=""
                                  onClick={() => {
                                    inputFileRef.current.click();
                                  }}
                                />
                                <input
                                  type="file"
                                  ref={inputFileRef}
                                  onChange={handleChangeFile}
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
                        <Button
                          disabled={!isValid}
                          variant="primary"
                          className=""
                          type="submit"
                        >
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

      <Modal show={show} onHide={handleClose} fullscreen>
        <Modal.Header closeButton>
          <Modal.Title>Көлік түрін таңдау</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <CarBody
              title={"Кіші кузов"}
              img={one}
              text={"шағын құрылғылар, креслолар немесе шкаф сыйады"}
              weight={"400"}
              size={"1.7 / 1 / 0.9"}
              price={"2000"}
              select={() => handleSelectCarBody("Кіші кузов")}
            />
            <CarBody
              title={"Микроавтобус"}
              img={two}
              text={"шағын жиһаздар мен қораптарды тасымалдауға арналған"}
              weight={"750"}
              size={"2.1 / 1.7 / 2.1"}
              price={"2800"}
              select={() => handleSelectCarBody("Микроавтобус")}
            />
            <CarBody
              title={"Орта кузов"}
              img={three}
              text={"ішінде заттары бар қорабтар мен диван сыйады"}
              weight={"1500"}
              size={"3.0 / 2.0 / 2.0"}
              price={"3200"}
              select={() => handleSelectCarBody("Орта кузов")}
            />
            <CarBody
              title={"Үлкен кузов"}
              img={seven}
              text={
                "үлкен құрылғылар, барлық жиһаздар мен қораптар сәйкес сыйады"
              }
              weight={"5000"}
              size={"5.8 / 2.45 / 2.2"}
              price={"6500"}
              select={() => handleSelectCarBody("Үлкен кузов")}
            />
            <CarBody
              title={"Борттық жүк көлігі"}
              img={four}
              text={
                "жиналмалы жақтары бар, үлкен жиһаздар мен құрылыс материалдары сыйады"
              }
              weight={"7000"}
              size={"2.0 / 5.0 / 2.2"}
              price={"7600"}
              select={() => handleSelectCarBody("Борттық жүк көлігі")}
            />
            <CarBody
              title={"Фура"}
              img={six}
              text={
                "қалааралық, барлық жиһаздар мен құрылыс материалдары сыйады"
              }
              weight={"20000"}
              size={"13.6 / 2.46 / 2.7"}
              price={"16400"}
              select={() => handleSelectCarBody("Фура")}
            />
            <CarBody
              title={"Рефрижератор"}
              img={five}
              text={"тағамдар мен дәрі-дәрмектер температурасы сақталады"}
              weight={"1500"}
              size={"3.0 / 2.0 / 2.0"}
              price={"4100"}
              select={() => handleSelectCarBody("Рефрижератор")}
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
