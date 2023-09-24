// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React, { Component } from 'react';
import './App.css';
// import Postdata from './Postdata';
 import Calculator2 from './PrComponent/Calculator2';
// import Formpost from './Formpost';
// import Practice from './components/Practice';



// import NameGender from './components/NameGender';
// import logo from './logo.svg';
//  import Counter from './components/Counter';
// import Apifetch from './components/Apifetch';
// import Todolist from './components/Todolist';
import Todonew from './PrComponent/Todonew';
// import Drug from './Drug';
// import InputProblem from './components/InputProblem';
// import NameGender from './components/NameGender';
// import Demo2 from './components/Demo2';
//  import Form from './components/Form';
// import Usestate from './components/Usestate';
// import Calculator from './components/Calculator';
// import Toggle from './Toggle';
// import Focous from './components/Focous';
// import Fetch from './components/Fetch';

import Validate_form from './components/Validate_form';
import ReducerEx from './PrComponent/ReducerEx';
import Interview from './components/Interview';





export default class App extends Component {
  
  

  
  render() {
    return (
      <div >
       <header >
        <p> I am from app.js</p>
        {/* <Counter/> */}
        {/* <Apifetch/> */}
        {/* <Todolist/> */}
        {/* <InputProblem/> */}
        {/* <NameGender/> */}
        {/* <Demo2/> */}
       {/* <Form/>  */}
       {/* <Usestate/> */}
       {/* <Calculator/> */}
       {/* <Toggle/> */}
       {/* <Focous/> */}
       {/* <Fetch/> */}
       {/* <Practice/> */}
     


     {/* <Drug/> */}
     {/* <Formpost/> */}
     {/* <Postdata/> */}
     <Calculator2/>
     {/* <Todonew/> */}
    {/* <Validate_form/> */}
    {/* <ReducerEx/> */}
        {/* <Interview/> */}
      </header>
      
    </div>
    )
  }

  
}

