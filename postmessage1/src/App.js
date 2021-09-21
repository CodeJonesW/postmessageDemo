import logo from "./logo.svg";
import "./App.css";

function App() {
  const myFunctions = {
    soundAlert: (message) => {
      alert(`This alert message was fired from inside the iframe:  ${message}`);
    },
  };
  window.addEventListener(
    "message",
    function (e) {
      if (e.origin !== "http://localhost:3001") {
        // console.log("wrong");
        return;
      }
      console.log(e);
      const functionToRun = JSON.parse(e.data).functionToRun;
      const alertMessage = JSON.parse(e.data).alertMessage;
      if (functionToRun === "soundAlert") {
        myFunctions[JSON.parse(e.data).functionToRun](alertMessage);
      }
    },
    false
  );
  return (
    <div className="App">
      <iframe title="iframeDemo" src="http://localhost:3001/"></iframe>
    </div>
  );
}

export default App;
