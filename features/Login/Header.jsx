import React from "react";
import styles from "./style.module.scss";
import Flags from "../../components/Header/Buttons/Flags";
import Logo from "../../components/Header/Logo";
import { Container, Row, Col } from "reactstrap";

const Header = () => {
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

export default Header;
