//criado em introdução do react
import React, { Component } from 'react';

function Button( props) {

  //desestruturação de 'const name = props.name' resulta na linha de baixo, mais legivel
  const {name, onClick} = props 

  return(
    <button onClick={onclick}>{name}</button>
  )
}

export default Button