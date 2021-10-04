import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import StarRatings from 'react-star-ratings';

const Service = (props) => {
    const {title, desc, price, star, starCount, img} = props.service;


    return (
            <Col>
                <Card>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                    <Card.Title> <span>{title}</span> <span>${price}</span> </Card.Title>
                    <h5 className="rating"><span>{star} <StarRatings
                    starRatedColor="goldenrod"
                    rating={star}
                    numberOfStars={5}
                    name='rating'
                    starDimension= "22px"
                    starSpacing="0px"
                    /></span> ({starCount}) </h5>
                    <Card.Text>
                        {desc.slice(0, 140)}
                    </Card.Text>
                    <Button variant="outline-danger">Read More</Button>
                    </Card.Body>
                </Card>
            </Col>
    );
};

export default Service;