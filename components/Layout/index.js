import React from "react";
import { Container, Row, Col } from "reactstrap";
import Footer from "../Footer/Footer";
import Header from "../Header";
import style from "./style.module.scss";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const Layout = ({ children }) => {
  useEffect(() => {
    let storage = localStorage.getItem("basket");
  }, []);

  return (
    <div className={style.layoutContainer}>
      <div className={style.headerContainer}>
        <Header />
      </div>
      <div className={style.contentContainer}>{children}</div>
      <div className={style.footerContainer}>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;

/**
 *   <Container fluid>
      <Row className={style.header}>
        <Col>
          <Header />
        </Col>
      </Row>
      <Row className={style.body}>
        <Col>{children}</Col>
      </Row>
      <Row className={style.footer}>
        <Col >
          <Footer />
        </Col>
      </Row>
    </Container>
 */
