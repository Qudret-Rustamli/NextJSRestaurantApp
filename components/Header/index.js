import React from "react";
import Links from "./Links";
import Logo from "./Logo";
import styles from "./Header.module.scss";
import Buttons from "./Buttons";
import { Container, Row, Col } from "reactstrap";

const Header = () => {
  return (
    <Container fluid style={{ padding: 0 }}>
      <Row className={styles.container}>
        <Col md={2}>
          <Logo />
        </Col>
        <Col md={7}>
          <Links />
        </Col>
        <Col md={3}>
          <Buttons />
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
