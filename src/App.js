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


import { useState } from 'react';
import './App.css';
import Counter from './components/Counter'
import TodoApp from './components/TodoApp';

function App() {
  const [toggle, setToggle] = useState(false);
  // if (toggle) {
  //   return (
  //     <div className="App">
  //       <button onClick={() => setToggle(!toggle)}> Toggle</button>
  //       <Counter />
  //     </div>
  //   );
  // }
  // else {
  //   return (
  //     <div className="App">
  //       <button onClick={() => setToggle(!toggle)}> Toggle</button>
  //       <TodoApp />
  //     </div>
  //   );
  // };
  return (
    <div className="App">
      <button onClick={() =>setToggle(!toggle)}> {toggle ? "Show TodoApp" : "Show Counter "}</button>
      {toggle ? <Counter intial={1}/> : <TodoApp/>}
    </div>
    
  );
}

export default App;

