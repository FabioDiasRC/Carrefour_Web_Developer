import React, { useState } from 'react';


function Counter() {

  let quantity = 1

  let quantity2 = 1

  function upQuantity() {
    quantity = quantity + 1
    const count = document.getElementById("counter-box")
    count.innerHTML = quantity
  }





  return (
    <>
      <h1 id="counter-box">{quantity}</h1>
      <button onClick = {upQuantity}>Aumentar sem state</button>
      <p>-----------------------------------------------------------------------</p>
    </>
  );
}

export default Counter;
