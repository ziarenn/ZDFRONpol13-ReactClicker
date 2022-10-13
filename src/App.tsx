import { useState } from "react";
import Display from "./components/Display/Display";
import Manipulator from "./components/Manipulator/Manipulator";
function App() {
  const [count, setCount] = useState<number>(0);

  // const useState = (initialValue) => {
  //   let state = initialValue
  //   const setState = function(value){
  //     state = value;
  //   }
  //   return [state, setState]
  // }

  // setState(5)

  // let x = {
  //   // SPRZEDWCA 1 SPRZEDAJE ARBUZY
  //   y: 1,
  //   z: 2,
  // };

  // //  let y = x // SPRZEDAWCA 2 TYLKO MOWI ZE SPRZEDAJE ARBUZY

  // x.y = 3; // MUTACJA DANYCH

  // x = { // NADPISANIE (ZASTAPIENIE) STARYCH DANYCH
  //   y: 3,
  //   z: 2,
  // };

  // zasady hookow
  // 1. nazwa zaczyna od use
  // 2. wywolujemy je tylko wewnatrz komponentow funkcyjnych
  // 3. wywolujemy je tylko na top scopie w komponencie

  // props === properties
  // propsy działają tylko w dół
  const propToPassDown = 5;

  return (
    <div className="App">
      <Display propToPassDown={propToPassDown} />
      <Manipulator />
    </div>
  );
}

export default App;
