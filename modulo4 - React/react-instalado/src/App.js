import Button from "./componentes/Button";
import Eco from "./componentes/Eco";
import "./App.css";

const hasCustomer = false;

const listCustomer = [
  {
    id: 1,
    nome: "aaaaaa",
  },
  {
    id: 2,
    nome: "Bbbbbb",
  },
  {
    id: 3,
    nome: "cccccc",
  },
  {
    id: 4,
    nome: "ddddddd",
  },
];

function App() {

  const name = 'Digital'

  const buttonA = (
    <div>
      Clique no botao
      <br></br>
      <button>Botao AAAAAAAAAAAA</button>
    </div>
  );

  const buttonB = (
    <div>
      Clique no botao
      <br></br>
      <button>Botao AAAAAAAAAAAA</button>
    </div>
  );

    const showEvent = () => {
      console.log('teste')
    }

  const buttonC = <button onClick={showEvent}>Mostrar evento</button>

  const renderCustomer = (customer, index) => {
    return (
      <div key={index}>
        <li>{customer.id} : {customer.nome}</li>
      </div>
    );
  };

  return (
    <div>
      <Button name="Fabio"></Button>
      <Eco></Eco>
      {hasCustomer ? buttonA : buttonB}
      {listCustomer.map(renderCustomer)}
      {buttonC}
    </div>
  );
}

export default App;