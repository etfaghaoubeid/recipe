import React from 'react'

import { Card,Col,Button, CardImg, CardTitle, CardText,
  CardSubtitle, CardBody } from 'reactstrap';
 

export default function Recipe({recipe:{recipe,label}}) {
    console.log(recipe)
  return (
    
      <Col lg="3" className="mb-2">
       <Card>
        <CardImg className="recipe-img" top width="100%" src={recipe.image} alt="Card image cap" />
        <CardBody>
          <CardTitle><strong>{recipe.label}</strong></CardTitle>
          <CardText>in to additional content. This content i.</CardText>
          <Button className="button">Read More</Button>
        </CardBody>
      </Card>
      </Col>
 
    
  )
}
