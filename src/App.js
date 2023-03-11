import { useEffect } from 'react';
import './App.css';
import { useDispatch } from 'react-redux';
import { SaveEvents } from './redux/Actions';

/*
  JSX (JavaScript XML): Markup language that translates XML into JavaScript then into HTML

  How does this JSX render onto our screen?
    1. Create XML markup (like HTML syntax) 
    2. Create JS commands needed
    3. Create HTML tags to render onto HTML document

    App(); // Invoke the App function
*/

/*
  Props (properties) = data that you can pass into your function, from one
    component to another
  
  Props is read-only object of data

  {
    msg: 'Welcome',
    foo: 'bar',
    num: 1
  }
*/



const messages = ['Welcome to my application!', 'Get started by clicking booking your first event', 'Talk to an agent today'];

/*
  [
    <Subtitle />,
    <Subtitle />,
    <Subtitle />
  ]
*/

function Subtitle(props) {
  return (
    <h2>{props.msg}</h2>
  )
}


/*
  Synchronous vs. Asynchronous Code Execution

  Sync:
    - Runs code line by line, waits for previous statement to finish before moving on
    - Example:
        let x = 'Hello';
        if (x.length > 5) ..
        runMyFunc();
  
  Async:
    - Does not wait for previous statement to complete in order to move on to the next line
    - Methods to make code async:
      - async/await keywords
      - Promises
*/

/*
  Promise Class:

  We have a list of chores we need to complete in our house:
    1. Take out the trash
    2. Clean your room
    3. Do your homework
*/

// let takeOutTrash = new Promise(function(resolve, reject) {
//   let trashIsOut = true;
//   if (trashIsOut) {
//     resolve();
//   } else {
//     reject();
//   }
// });

// let cleanRoom = new Promise(function(resolve, reject) {
//   resolve();
// })
// let doHomework = new Promise(function(resolve, reject) {
//   resolve();
// })

// takeOutTrash
//   .then(function() {
//     // if the promise is successfull/fulfilled
//     return cleanRoom; // return another promise
//   })
//   .then(function() {
//     // handle success of cleanRoom promise
//     return doHomework;
//   })
//   .then(function() {
//     // handle success of doHomework
//     console.log('Go play outside');
//   })
//   .catch(function() {
//     // if the promise fails/rejected
//     console.log('You failed to do all your chores, start over');
//   })

// cursor moves on at this spot until promises resolve/reject









function App() {

  const dispatch = useDispatch();

  return (
    <div className="App">
      {messages.map((message, index) => {
        // Each child in a list should have a unique "key" prop.
        return <Subtitle key={index} msg={message} /> // create a subtitle component and pass to it our message
      })}
    </div>
  );
}

export default App;
