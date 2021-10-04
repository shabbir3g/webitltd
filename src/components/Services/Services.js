import React, { useEffect, useState } from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import BreadCrumbsImage from '../../images/1.jpg';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect( () => {
        fetch('./Services.JSON')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])
    return (
        <div> 
            <div className="sc-breadcrumbs breadcrumbs-overlay">
            <div className="breadcrumbs-img">
                <Image style={{minHeight: "200px", objectFit: 'cover'}} src={BreadCrumbsImage} alt="Breadcrumbs Image" />
            </div>
                <div className="breadcrumbs-text white-color">
                    <h1 className="page-title">Services</h1>
                    <ul>
                        <li>
                            <Link to="/">Home &gt;</Link>
                        </li>
                        <li className="active">Services</li>
                    </ul>
                </div>
            </div>
            <div className="mt-5"> 
            <Container>
                <Row> 
                    <Col xs lg="12">
                    <div className="sec-title">
                        <div className="sub-title position-relative">All Services <span className="heading-border-line"></span></div>
                        <h2 className="title mb-0">Our Educational Services </h2>
                    </div>
                    </Col>
                </Row>
            </Container>
            </div>
            <Container className="my-5"> 
                <Row xs={1} md={3} className="g-4">

                    {
                       services.map(service => <Service key={service.key} service={service}></Service> ) 
                    }
                    
                </Row>
            </Container>
        </div>
    );
};

export default Services;