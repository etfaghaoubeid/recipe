import React from 'react'

import { Card,Col,Button, CardImg, CardTitle, CardText,
  CardSubtitle, CardBody ,ListGroup, ListGroupItem } from 'reactstrap';

 

export default function Details({recipe:{recipe,label}}) {
    console.log(recipe)
  return (
    
      <Col lg="6" className="mb-2">
       <Card>
        <CardImg className="recipe-img" top width="100%" src={recipe.image} alt="Card image cap" />
        <CardBody>
          <CardTitle><strong>{recipe.label}</strong></CardTitle>
          <CardSubtitle><h5>Ingredients</h5></CardSubtitle>
          <ListGroup>
              {recipe.ingredients.map(ingredient=>(
                  <ListGroupItem>
                  {ingredient.text}

                  </ListGroupItem>
              ))}
            
          </ListGroup>
          <Button className="button mt-2">Read More</Button>
        </CardBody>
      </Card>
      </Col>
 
    
  )
}
