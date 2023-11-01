import { useState } from "react";

import "./App.css";

function App() {
  const [switch1, setSwitch1] = useState(false);
  const [switch2, setSwitch2] = useState(false);
  const [switch3, setSwitch3] = useState(false);
  const [switch4, setSwitch4] = useState(false);
  return (
    <>
      <header>
        <i class="fa-solid fa-shuttle-space"></i>
        <h1>Ready To GO</h1>
      </header>
      <section>
        <div className="ON">
          <button onClick={() => setSwitch1(true)}>ON</button>
          <button onClick={() => setSwitch3(true)}>ON</button>
          <button onClick={() => setSwitch2(true)}>ON</button>
        </div>

        <div className="OFF">
          <button onClick={() => setSwitch1(false)}>OFF</button>
          <button onClick={() => setSwitch2(false)}>OFF</button>
          <button onClick={() => setSwitch3(false)}>OFF</button>
        </div>
        <div className="no-way">
          <button onClick={() => setSwitch4(false)}>No way !</button>
        </div>
      </section>
    </>
  );
}

export default App;
