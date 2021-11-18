import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import '../About/About.css'

const About = () => {
    const image = ['https://image.shutterstock.com/image-photo/trip-america-passport-airplane-map-600w-211175245.jpg']
    return (
        <div>
            <Container>
  <Row>
    <Col xs={12} lg={6}><Image src={image} fluid/></Col>
    <Col xs={12} lg={6}>
    <div>
    <h1>Have a nice Trip</h1>
    <p>
    Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
    </p>
    </div>
    <Row>
    <Col>
    <div>
        <h1 className='num'>300</h1>
        <p>Successful Tours</p>
    </div>
    </Col>
    <Col>
    <div>
        <h1 className='num'>24,000</h1>
        <p>Happy Tourist</p>
    </div>
    </Col>
    <Col>
    <div>
        <h1 className='num'>200</h1>
        <p>Place Explored</p>
    </div>
    </Col>
  </Row>
    </Col>
  </Row>
  
</Container>
        </div>
    );
};

export default About;