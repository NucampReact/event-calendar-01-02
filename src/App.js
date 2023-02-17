import logo from './logo.svg';
import './App.css';
import EventListing from './components/EventListing';

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

function App() {
  return (
    <div className="App">
      {messages.map((message, index) => {
        // Each child in a list should have a unique "key" prop.
        return <Subtitle key={index} msg={message} /> // create a subtitle component and pass to it our message
      })}
      <EventListing />
    </div>
  );
}

export default App;
