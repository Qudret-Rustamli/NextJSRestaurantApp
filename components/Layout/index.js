import React from "react";
import { Container, Row, Col } from "reactstrap";
import Header from "../Header";

const Layout = ({ children }) => {
  return (
    <Container>
      <Row>
        <Col>
          <Header />
        </Col>
      </Row>
      <Row>
        <Col>{children}</Col>
      </Row>
      <Row>
        <Col>Footer</Col>
      </Row>
    </Container>
  );
};

export default Layout;
