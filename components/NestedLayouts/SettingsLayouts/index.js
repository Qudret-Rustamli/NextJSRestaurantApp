import React from 'react';
import { Container, Col, Row } from 'reactstrap';
import SettingsSidebar from '../../Sidebars/SettingSidebar.js';

const NestedLayout = ({ children }) => {
  return (
    <Container fluid>
      <Row>
        <Col md={3}>
          <SettingsSidebar />
        </Col>
        <Col md={9}>{children}</Col>
      </Row>
    </Container>
  );
};

export default NestedLayout;
