import React from "react";
import { Card, CardBody, Button, CardTitle, CardText,
  CardImg, Col } from 'reactstrap';
  import { Link } from 'react-router-dom'; 

export default function CharacterCard(props) {
  return(
    <div>
              <Col xs = '10' md ='10' xl = '10'>
                <Link to = {`/CharacterCard/${props.name}`}>
          <Card>
          <CardImg top width="100%" src={props.image} alt="Card image cap" />
        <CardBody>
    <CardTitle>Name: {props.name}</CardTitle>
    <CardText>gender: {props.gender}</CardText>
          <CardText>
        <small className="text-muted">status: {props.status}</small>
          </CardText>
        </CardBody>
          </Card>
          </Link>
          </Col>
    </div>
  )
}
