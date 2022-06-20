import React from "react";
import { Container, Row, Col } from "reactstrap";
import AboutPonel from "../Panel/AboutPonel";
import style from "./About.module.scss";

export const AboutContent = () => {
  return (
    <Container>
      <Row className={style.cont}>
        <Col md={6}>
          <h1>About Us</h1>
          <p>
            Delivery May Be Extended During Sale Periods. Please Refer To The
            Checkout Page For An Updated Estimate For Your Location. Kindly Note
            That Once You Have Placed An Order, It Is No Longer Possible To
            Modify Your Order. Taxes And Duties Are Included In All Product
            Prices.It Is Possible To Place An Order With Shipment To A Different
            Address Than Your Home Or Billing Address When Paying With A Credit
            Card. Please Note That Klarna Payments Require That Your Order Is
            Shipped To Your Registered Home Address.
          </p>
        </Col>
        <Col md={6} className={style.panel}>
          <AboutPonel />
        </Col>
      </Row>
    </Container>
  );
};
