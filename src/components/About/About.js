import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Container, Row, Button, Image, InputGroup, FormControl } from 'react-bootstrap';
import AboutImage from '../../images/about1.png';
import BreadCrumbsImage from '../../images/1.jpg';
import Manandwomen from '../../images/men-women.png';
import { Link, NavLink } from 'react-router-dom';

const check = <FontAwesomeIcon icon={faCheckCircle} />;
const About = () => {
    return (
        <div> 
        <div className="sc-breadcrumbs breadcrumbs-overlay">
            <div className="breadcrumbs-img">
                <Image style={{minHeight: "200px", objectFit: 'cover'}} src={BreadCrumbsImage} alt="Breadcrumbs Image" />
            </div>
            <div className="breadcrumbs-text white-color">
                <h1 className="page-title">About Us</h1>
                <ul>
                    <li>
                        <Link to="/">Home &gt;</Link>
                    </li>
                    <li className="active">About Us</li>
                </ul>
            </div>
        </div>
        <div className="about-page">
            <Container> 
                <Row> 
                    <Col xs="12" lg="5">
                    <Image src={AboutImage} alt="" fluid  />
                    </Col>
                    <Col xs="12" lg="7">
                    <div className="sec-title">
                        <div className="sub-title position-relative"> About Us <span className="heading-border-line"></span></div>
                        <h2 className="title mb-0">Good Professional Services and Better Skills</h2>
                    </div>
                    <p>We Stablished from 2017 in Bangladesh to provided Online Professional skills trainging all over the world. So If you want to intersted then, Don't waste your time just contact with us and enroll our Services.</p> 
                    <ul className="check-square two-line mb-20">
                        <li>{check} Quality Teachers</li>
                        <li>{check} Get Certified</li>
                        <li>{check} Online class</li>
                        <li>{check} Skills Lectures</li>
                        <li>{check} Library Store</li>
                        <li>{check} Develop Skills</li>
                    </ul>
                        <br />
                        <NavLink to="/contact"><Button size="lg" variant="danger" >Contact Us</Button></NavLink>
                    </Col>
                </Row>
            </Container>
        </div>
        <div className="about-join my-5 pt-5">
            <Container> 
                <Row> 
                    <Col xs="12" lg="6">
                    <div className="sec-title">
                        <div className="sub-title position-relative"> Join Our Course <span className="heading-border-line"></span></div>
                        <h2>If you interested join <br/> our course</h2>

                        <InputGroup className="mb-3 w-75">
                            <FormControl
                            placeholder="Your E-mail Address"
                            />
                            <Button variant="danger" id="button-addon2">
                            Join Now
                            </Button>
                        </InputGroup>
                    </div>
                    </Col>
                    <Col xs="12" lg="6">
                        <Image src={Manandwomen} alt="" fluid  />
                    </Col>
                </Row>
            </Container>
        </div>
   </div>
    );
};

export default About;