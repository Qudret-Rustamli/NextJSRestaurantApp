import React from "react";
import styles from "./Header.module.scss";
import { Container, Row, Col } from "reactstrap";
import Flags from "./Buttons/Flags";
import Logo from "./Logo";

const SecondHeader = () => {
  return (
    <Container>
      <Row className={styles.containerS}>
        <Col md={1} />
        <Col md={10}>
          <Logo color={"white"} />
        </Col>
        <Col md={1}>
          <Flags />
        </Col>
      </Row>
    </Container>
  );
};

export default SecondHeader;
