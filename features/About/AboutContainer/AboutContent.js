import React from "react";
import { Container, Row, Col } from "reactstrap";
import AboutPonel from "../Panel/AboutPonel";
import style from "../../../styles/pages/about.module.scss";
import { useTranslation } from "react-i18next";

export const AboutContent = () => {
  const { t } = useTranslation("common");

  return (
    <Container>
      <Row className={style.cont}>
        <Col md={6}>
          <h1>{t("about_us")}</h1>
          <p>{t("about_us_desc")}</p>
        </Col>
        <Col md={6} className={style.panel}>
          <AboutPonel />
        </Col>
      </Row>
    </Container>
  );
};
