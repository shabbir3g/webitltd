import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Button, Image } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import bannerImage from '../../images/banner-image.png';
import Service from '../Service/Service';

const Home = () => {
    const [services, setServices] = useState([]);
    useEffect( () => {
        fetch('./homeServices.JSON')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])
    return (
       <div> 
            <div className="home-banner">
                <Container> 
                    <Row> 
                        <Col xs="12" lg="6">
                        <div className="sec-title">
                            <div className="sub-title position-relative"> Online Education <span className="heading-border-line"></span></div>
                            <h2 className="title mb-0">Improve your any <br />
                            Professional skills</h2>
                        </div>
                            <p>We Provide 100% Qualified and professional Online skill services. If you want to enroll our services and get professional skills then Please contact with us to below button</p> 
                            <NavLink to="/contact"><Button size="lg" variant="danger" >Contact Us</Button></NavLink>
                        </Col>
                        <Col xs="12" lg="6">
                            <Image  src={bannerImage} alt="" fluid  />
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="mt-5"> 
            <Container>
                <Row> 
                    <Col xs="12" lg="12">
                    <div className="sec-title">
                        <div className="sub-title position-relative">Popular Services <span className="heading-border-line"></span></div>
                        <h2 className="title mb-0">Our Educational Services </h2>
                    </div>
                    </Col>
                </Row>
            </Container>
            </div>
            <Container className="my-5"> 
                <Row xs={1} md={4} className="g-4">

                    {
                       services.map(service => <Service key={service.key} service={service}></Service> ) 
                    }
                    
                </Row>
                <div className="text-center my-5"> 
                    <Link to="/services"><Button  size="lg" variant="danger" >All Services</Button></Link>
                </div>
            </Container>

       </div>
    );
};

export default Home;