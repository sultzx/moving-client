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
  Alert,
} from "react-bootstrap";
import { Link, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";

import { fetchRegister, selectIsAuth } from "../redux/slices/auth.js";
import "../styles/Registration.scss";

const Registration = () => {
  const dispatch = useDispatch();

  const isAuth = useSelector(selectIsAuth);

  const [errorMessage, setErrorMessage] = React.useState("");

  const [matchedPass, setMatchedPass] = React.useState(true);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPass: "",
    },
    mode: "onChange",
  });

  const onSubmit = async (values) => {
    console.log(values);
    if (values.password === values.confirmPass) {
      const data = await dispatch(
        fetchRegister({
          username: values.username,
          email: values.email,
          password: values.password,
        })
      );

      setErrorMessage(data.payload.message);

      if ("token" in data.payload) {
        window.localStorage.setItem("token", data.payload.token);
      }
    } else {
      setMatchedPass(false);
    }
  };

  if (isAuth) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <Container style={{ zIndex: "2" }}>
        {errorMessage && errorMessage && (
          <Alert
            className="alert"
            variant={errorMessage && errorMessage ? "danger" : "primary"}
            style={
              errorMessage && errorMessage
                ? { borderColor: "red" }
                : { borderRadius: "6px" }
            }>
            {
              <div className="text-center" style={{ margin: "-12px" }}>
                {errorMessage && <span>{errorMessage}</span>}
              </div>
            }
          </Alert>
        )}

        {(errors && errors.username) ||
        errors.email ||
        errors.password ||
        errors.confirmPass ? (
          <Alert
            className="alert"
            variant={errors && errors && "danger"}
            style={{ borderColor: "red", borderRadius: "6px", textAlign: 'center' }}
          >
            {errors && errors.username && (
              <>
                {errors.username?.message}
                <br />
              </>
            )}
            {errors && errors.email && (
              <>
                {errors.email?.message}
                <br />
              </>
            )}
            {errors && errors.password && (
              <>
                {errors.password?.message}
                <br />
              </>
            )}
            {errors && errors.confirmPass && (
              <>
                {errors.confirmPass?.message}
                <br />
              </>
            )}
            {!matchedPass && "?????????? ???????????? ???????????? ????????????????"}
          </Alert>
        ) : (
          ""
        )}
        
        <Row>
          <Col className="col-12 d-flex align-items-center justify-content-center">
            <Card className="registration-card text-center" sticky="top">
              <Card.Body>
                <Tab.Container defaultActiveKey={"first"}>
                  <Card.Title>{"??????????????????????"}</Card.Title>
                  <Nav variant="pills" className="flex-column">
                    <Row>
                      <Col className="d-flex column justify-content-center align-items-center">
                        <Nav.Item className="flex-fill">
                          <Nav.Link
                            className="switch-nav-link"
                            eventKey="first"
                          >
                            ????????????
                          </Nav.Link>
                        </Nav.Item>
                      </Col>
                      <Col className="d-flex column justify-content-center align-items-center">
                        <Nav.Item className="flex-fill">
                          <Link
                            style={{ textDecoration: "none", color: "#FB8500" }}
                            to={"../registration-for-employee"}
                          >
                            <Nav.Link href="/registration-for-employee" className="switch-nav-link">
                              ??????????????????
                            </Nav.Link>
                          </Link>
                        </Nav.Item>
                      </Col>
                    </Row>
                  </Nav>
                  <hr />
                  <Row className="text-start">
                        <Form onSubmit={handleSubmit(onSubmit)} method="post">
                          <Form.Group className="mb-3">
                            <Form.Label>?????????????????? ??????</Form.Label>
                            <Form.Control
                              style={
                                Boolean(errors.username?.message)
                                  ? {
                                      borderColor: "red",
                                      background: "rgba(255, 0, 0, 0.122)",
                                    }
                                  : { borderColor: "#FB8500" }
                              }
                              className="form-control-input"
                              {...register("username", {
                                required: "?????????????????? ???????? ??????????????????",
                                minLength: {
                                  value: 3,
                                  message:
                                    "???????????? 3 ???????? 16 ???????????? ???????????????? ?????????? ??????????",
                                },
                                maxLength: {
                                  value: 16,
                                  message:
                                    "???????????? 3 ???????? 16 ???????????? ???????????????? ?????????? ??????????",
                                },
                              })}
                              type="text"
                              placeholder=""
                            />
                          </Form.Group>

                          <Form.Group className="mb-3">
                            <Form.Label>??????????</Form.Label>
                            <Form.Control
                              style={
                                Boolean(errors.email?.message)
                                  ? {
                                      borderColor: "red",
                                      background: "rgba(255, 0, 0, 0.122)",
                                    }
                                  : { borderColor: "#FB8500" }
                              }
                              className="form-control-input"
                              {...register("email", {
                                required: "???????????????????? ??????????????????",
                                pattern: {
                                  value:
                                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                  message: "?????????? ???????????????? ??????????????????",
                                },
                              })}
                              type="email"
                              placeholder=""
                            />
                          </Form.Group>

                          <Form.Group className="mb-3">
                            <Form.Label>?????????? ??????</Form.Label>
                            <Form.Control
                              className="form-control-input"
                              style={
                                Boolean(errors.password?.message)
                                  ? {
                                      borderColor: "red",
                                      background: "rgba(255, 0, 0, 0.122)",
                                    }
                                  : { borderColor: "#FB8500" }
                              }
                              {...register("password", {
                                required: "?????????? ?????????? ??????????????????",
                                minLength: {
                                  value: 6,
                                  message:
                                    "?????????? ?????? 6 ???????? 16 ???????????? ???????????????? ?????????? ??????????",
                                },
                                maxLength: {
                                  value: 16,
                                  message:
                                    "???????????? 6 ???????? 16 ???????????? ???????????????? ?????????? ??????????",
                                },
                              })}
                              type="password"
                              placeholder=""
                            />
                          </Form.Group>

                          <Form.Group className="mb-3">
                            <Form.Label>?????????? ?????????? ????????????????????</Form.Label>
                            <Form.Control
                              className="form-control-input"
                              style={
                                Boolean(errors.confirmPass?.message)
                                  ? {
                                      borderColor: "red",
                                      background: "rgba(255, 0, 0, 0.122)",
                                    }
                                  : { borderColor: "#FB8500" }
                              }
                              {...register("confirmPass", {
                                required: "?????????? ?????????? ?????????? ??????????????????",
                                validate: (val) => {
                                  if (watch("password") !== val) {
                                    return "?????????? ???????????? ???????????? ????????????????";
                                  }
                                },
                              })}
                              type="password"
                              placeholder=""
                            />
                          </Form.Group>

                          <Col className="col-12 d-flex column justify-content-end align-items-center">
                            <Link to="/login">
                              <Button
                                variant="primary"
                                className="switch-to-client-outline-btn"
                              >
                                ???????? ???????????????? ??????
                              </Button>
                            </Link>

                            <Button
                              disabled={!isValid}
                              variant="primary"
                              className=""
                              type="submit"
                            >
                              ??????????????
                            </Button>
                          </Col>
                        </Form>
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

export default Registration;
