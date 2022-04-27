import "./App.css";
import Counter from "../counter/Counter";
import SmartCounter from "../smartCounter/SmartCounter"
import IfoodCounter from "../iffodCounter/IfoodCounter"

function App() {
  return (
    <>
      <SmartCounter/>
      <Counter/>
      <IfoodCounter/>
    </>
  );
}

export default App;
