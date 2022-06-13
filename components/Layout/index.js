import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Layout = () => {
  return (
    <Container>
      <Row>
        <Col>Header</Col>
      </Row>
      <Row>
        <Col>Body</Col>
      </Row>
      <Row>
        <Col>Footer</Col>
      </Row>
    </Container>
  );
};

export default Layout;
