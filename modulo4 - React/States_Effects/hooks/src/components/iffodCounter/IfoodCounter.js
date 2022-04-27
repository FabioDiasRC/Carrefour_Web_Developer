//fiz apenas a funcionalidade, nao copiei o css definido
import React, { useEffect, useState} from 'react';

function IfoodCounter () {

  let [value, setValue] = useState(0)

  function add() {
    setValue(value + 1)
  }

  function minus(){
    if (value > 0) {
      setValue(value-1)
    }
  }


  useEffect(() => {
    let teste = document.getElementById('teste')
    teste.innerHTML = value*value
  }, [value])

  return (
    <>
      <h1>IFOOD COUNTER</h1>
      <div>
        <button onClick={add}>mais</button>
        <p>{value}</p>
        <button onClick={minus}>menos</button>
        <p id='teste'></p>
      </div>
    </>
  )
}

export default IfoodCounter;