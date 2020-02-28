import React from "react";
import { Card, CardBody, Button, CardTitle, CardText,
  CardImg, Col } from 'reactstrap';

export default function CharacterCard(props) {
  return(
    <div>
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
    </div>
  )
}
