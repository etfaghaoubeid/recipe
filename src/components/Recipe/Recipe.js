import React from 'react'

import { Card,Col,Button, CardImg, CardTitle, CardText,
  CardSubtitle, CardBody ,ListGroup, ListGroupItem } from 'reactstrap';

 

export default function Recipe({recipe:{recipe,label}}) {
    console.log(recipe)
  return (
    
      <Col lg="4" className="mb-2">
       <Card>
        <CardImg className="recipe-img" top width="100%" src={recipe.image} alt="Card image cap" />
        <CardBody>
          <CardTitle><h4><strong>{recipe.label}</strong></h4></CardTitle>
          <CardSubtitle><h5>Ingredients</h5></CardSubtitle>
          <ListGroup>
            
            {recipe.ingredientLines.map(ingredient=>(
                  <ListGroupItem>
                  {ingredient}

                  </ListGroupItem>
              ))}
          
          </ListGroup>
      
        </CardBody>
      </Card>
      </Col>
 
    
  )
}
