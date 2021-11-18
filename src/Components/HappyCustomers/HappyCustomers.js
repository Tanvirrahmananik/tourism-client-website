import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import '../HappyCustomers/HappyCustomer.css'

const HappyCustomers = () => {
    const image=['https://th.bing.com/th/id/OIP.daZ6BtlJkt-to2F-Ux0HnAHaEC?pid=ImgDet&rs=1']
     const img =['https://www.callcentrehelper.com/images/stories/2011/04/expert-agent-760.jpg']
     const photo=['https://thumbs.dreamstime.com/z/customer-service-listening-5414089.jpg']

    return (
        <div>
            <div>
                <h1 className='text'>Happy Customers</h1>
                <Container>
  <Row>
    <Col className='card' xs={12} lg={3}>
    <div>
        <div>
            <Image src ={photo} fluid roundedCircle/>
            <h1 className='num'>James Woodland</h1>
        </div>
        <div>
            <p>
            “When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way.”
            </p>
        </div>
    </div>
    </Col>
    <Col className='card' xs={12} lg={3}>
    <div>
        <div>
            <Image src={image} fluid roundedCircle/>
            <h1 className='num'>Rob Smith</h1>
        </div>
        <div>
            <p>
            “A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.”
            </p>
        </div>
    </div>
    </Col>
    <Col className='card' xs={12} lg={3}>
    <div>
        <div>
            <Image src={img} fluid roundedCircle/>
            <h1 className='num'>John Doe</h1>
        </div>
        <div>
            <p>
            “Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.”
            </p>
        </div>
    </div>
    </Col>
  </Row>
</Container>
            </div>
        </div>
    );
};

export default HappyCustomers;