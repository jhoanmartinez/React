import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

// import nombre_function export default  from path/filename.js

//components
import Header_2 from "./components/comp_header_2"
import Welcome from './components/Welcome'
import Abc from "./components/Greet"
import Hello from './components/Hello'
import Message from './components/Message'
import Counter from './components/Counter'

function App() {
  return (
    <div className="App">
        <Counter/>
        {/* <Message/> */}
        {/* <Welcome name="Trincho" heroName="heroName"/>
        <Welcome name="Trincho" heroName="heroName">
          <p>texto class component</p>  
        </Welcome> 
        <Hello name="Jhoan" heroName="Batman" lastName="Martinez">
          <p>This is chlidren</p>
        </Hello>
        <Hello name="Kira" heroName="superman">
          <button>submit</button>
        </Hello>
        <Hello name="Milo" heroName="Wonderful woman"/> */}
        
    </div>
  );
}

export default App;
