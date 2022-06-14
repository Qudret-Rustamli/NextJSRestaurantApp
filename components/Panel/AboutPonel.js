import React from 'react';
import styles from './styles.module.scss';
import { Row, Col, Container } from 'reactstrap';
import Card from '../Cards/CardTwin.js/Card';

const AboutPonel = () => {
  return (
    <Row className={styles.parentRow}>
      <Col md={2}></Col>
      <Col md={8}>
        <div className={styles.panel}>
          <Container>
            <Row className={styles.top}>
              <Col md={12}>
                <Card
                  title="Gamburger1"
                  price={10.9}
                  img={'https://th.bing.com/th/id/OIP.QtguD9nim-o_2JmO2L6BlQHaE7?pid=ImgDet&rs=1'}
                />
              </Col>
            </Row>
            <Row className={styles.center}>
              <Col md={5}>
                <Card
                  title="Pizza"
                  price={17.9}
                  img={
                    'https://preview.redd.it/hoheoed0fb811.jpg?auto=webp&s=e34c3db75583fd9a3d300e5871a02a4d226f5b9b'
                  }
                />
              </Col>
              <Col md={2}></Col>
              <Col md={5}>
                <Card
                  title="Sushi"
                  price={19.35}
                  img={
                    'https://th.bing.com/th/id/R.03a22cbe301e9e3f397f90efd6abfb35?rik=T4YAVqv%2bUpajPg&pid=ImgRaw&r=0'
                  }
                />
              </Col>
            </Row>
            <Row>
              <Col className={styles.bottom} md={12}>
                <Card
                  title="Bughlama"
                  price={30}
                  img={'https://th.bing.com/th/id/OIP.Tz-F6gdAMa1puXM9SdDwcAHaE8?pid=ImgDet&rs=1'}
                />
              </Col>
            </Row>
          </Container>
        </div>
      </Col>
      <Col md={2}></Col>
    </Row>
  );
};

export default AboutPonel;
