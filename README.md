# Basic use of postMessage API in React :tropical_drink: :palm_tree:

## Setup
  - cd into postmessage1 and run npm start
  - repeat for postmessage2 in a new terminal while leaving postMessage1 running. 
  - open http://localhost:3000/ in your browser
  
## Usage
  - type text into input inside of iframe
  - click submit and send a message from iframe to top level react application
  - message is interpreted and used to call a function displayiing an alert with the text from the user input.

## Things to Note

- when setting up a local project to test postMessage api functionality you must have each site served to a url. Running a react application locally and using the localhost address will work in this case.

- postMessage1 is the parent.

  - listens for the message event that emits on the window from the iframe at specific url. Check the origin to make sure you have the right message event. In a production environment validating the url was sent from the correct source is required for security. Otherwise any source could send a message.

  - window.addEventListener(
    "message",
    function(){
    console.log(e.data)
    })

- postMessage2 is the child

  - In this example we can communicate with the top level website and call functions by passing stringified values into the postMesssage function and parsing in the top level application.

  - Binding the following code to an event will allow you to send a message upon user interation. In this example, this code is run when a button is clicked.

  - window.parent.postMessage(
    JSON.stringify({ functionToRun: "soundAlert", alertMessage: userInput }),
    "http://localhost:3000/"
    );
    
    
### Next time I may update to where both parent and child have a listener and a sender.

### I plan to continue to update this demo as I obtain more knowledge 📚👨🏻‍🏫

##### https://developer.mozilla.org/en-US/docs/Web/API/MessageEvent

##### https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage
