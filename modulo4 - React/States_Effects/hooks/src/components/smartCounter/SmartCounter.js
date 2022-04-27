import { useState } from 'react';


function SmartCounter() {

  let [quantity2, setQuantity2 ] = useState(1);

  setQuantity2 = () =>  {
    quantity2 = quantity2 + 1
    const counter2 = document.getElementById("counter-box2")
    counter2.innerHTML = quantity2
  }

  return (
    <>
      <h1 id="counter-box2">{quantity2}</h1>
      <button onClick = {setQuantity2}>Aumentar com state</button>
      <p>-----------------------------------------------------------------------</p>
    </>
  );
}

export default SmartCounter;
