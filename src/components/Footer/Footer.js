import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="footer bg-dark mt-0" > 
            <Container>
                <Row xs={1} md={4} className="g-1 py-5">
                    <Col>
                    <Card className="border-0">
                        <Card.Body className=" bg-dark text-light">
                        <Card.Title className="text-uppercase">About Us</Card.Title>
                        <Card.Text style={{color: '#7a7a7a'}}>
                            Web It Limited is a on of the best online programming learing platform all over the world. We provide best quality services to our students. We also provide software If you need. We have a good quality online platform, where you can learn from here free or primium.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col>
                    <Card className="border-0">
                        <Card.Body className=" bg-dark text-light">
                        <Card.Title className="text-uppercase">Gen In Touch</Card.Title>
                        <Card.Text style={{color: '#7a7a7a'}}>
                        Bangladesh, Chatmohor, Pabna, PO Office 6630 <br />
                        Phone: +88 01728 536054 <br />
                        Email: contact@webitltd.com <br />
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col>
                    <Card className="border-0">
                        <Card.Body className=" bg-dark text-light">
                        <Card.Title className="text-uppercase">Popular Services</Card.Title>
                            <ul className='footer-services'>
                                <li><Link to="/">Javascript Course</Link></li>
                                <li><Link to="/">React JS Course</Link></li>
                                <li><Link to="/">PHP Tutorial</Link></li>
                                <li><Link to="/">Bootstrap Tutorial</Link></li>
                            </ul>
                    
                        
                        
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col>
                    <Card className="border-0">
                        <Card.Body className=" bg-dark text-light">
                        <Card.Title className="text-uppercase">Follow Us</Card.Title>
                        
                            <ul className='footer-services'>
                                <li><a rel="noreferrer" target="_blank" href="http://facebook.com/webitlimited">Facebook</a></li>
                                <li><a rel="noreferrer" target="_blank" href="http://youtube.com/webitltd">Youtube</a></li>
                                <li><a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/shabbir4g/">Linkedin</a></li>
                                <li><a rel="noreferrer" target="_blank" href="https://www.instagram.com/shabbir4g/">Instragram</a></li>
                            </ul>
                        
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>
                
            </Container>
            <div className="text-light p-4 text-center" style={{backgroundColor: '#0c0c0c'}}> 
                <p className="p-0 m-0">Copyright &copy; 2021 | All Right Reserved By <a className="text-white" rel="noreferrer" target="_blank" href="http://youtube.com/webitltd">Web IT LTD</a> </p>
            </div>
        </div>
    );
};

export default Footer;