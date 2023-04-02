import React from 'react';
import Button from 'react-bootstrap/Button';

export default function Trees(props) {
  let fruit = props.fruit
  let setFruit = props.setFruit
  return (
    <div>
      <Button variant="outline-primary" onClick={() => setFruit(fruit +1 )}>Add 1</Button>
      <Button variant="outline-danger" onClick={() => setFruit(fruit -1 )}>Minus 1</Button>
      <div> {fruit} </div>
    </div>
  )
}