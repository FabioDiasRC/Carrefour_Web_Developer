import React from "react";

export function App () {
  const hora = new Date().toDateString()
  return (
    <div>
      <h1>{hora}</h1>
    </div>
  )
}