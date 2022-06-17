import React from "react";
import { Container, Row, Col } from "reactstrap";
import LoginFeature from "../../../features/Login";
import style from "./style.module.scss";

const LoginLayout = () => {
  return (
    <Container style={{ marginTop: "2rem" }}>
      <Row className={style.container}>
        <Col md={6} className={style.container__img}>
          <img src="/images/logout.svg" alt="signup" />
        </Col>
        <Col md={6}>
          <LoginFeature />
        </Col>
      </Row>
    </Container>
  );
};

export default LoginLayout;
