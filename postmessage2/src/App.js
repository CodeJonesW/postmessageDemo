import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const clickMe = () => {
    window.parent.postMessage(
      JSON.stringify({ functionToRun: "soundAlert", alertMessage: userInput }),
      "http://localhost:3000/"
    );
  };

  const [userInput, setUserInput] = useState("");
  const handleChange = (e) => {
    console.log(e.target.value);
    setUserInput(e.target.value);
  };

  return (
    <div
      style={{
        display: "flex",
        alignContent: "center",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <input onChange={handleChange} value={userInput} />
      <button onClick={clickMe}>Submit</button>
    </div>
  );
}

export default App;
