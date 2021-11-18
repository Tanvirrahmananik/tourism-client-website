import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';


const Bannar = () => {
    const image = ['https://image.shutterstock.com/image-photo/young-couple-tour-agency-travelling-600w-1011716458.jpg']
    return (
        <div>
            <Container>
  <Row>
    <Col><div className=' m-2 p-5'>
                     <div>
                     <h1>
                        <strong>
                       Go and Try Something New

                        </strong>
                      </h1>
                      <p>Air seed winged lights saw kind whales in sixth dont seas dron image so fish all tree meat dont there is seed winged lights saw kind whales in sixth dont seas dron image so fish all tree meat dont there

                      </p>
                      {/* <Link to='/Appoinment'><Button variant="outline-dark" className='btn btn-secondary text-white button'>Make An Appoinment <i class="fas fa-arrow-right"></i></Button></Link> */}
                     </div>
                  </div></Col>
    <Col><Image src={image} fluid/></Col>
  </Row>
  
</Container>
        </div>
    );
};

export default Bannar;