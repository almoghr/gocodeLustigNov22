import { useState } from 'react';
import './App.css';
import Counter from './components2/Counter';
import Login from './components2/Login';
import Register from './components2/Register';


function App() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  return (
    <div className="App" style={isDarkMode ? {backgroundColor: '#333'} : {}}>
      <Login/>
       {/* <Register /> */}
      {/* <button onClick={() => setIsDarkMode(!isDarkMode)}>
        set dark mode {isDarkMode ? "off" : "on"}
      </button>  */}
      {/* <Counter /> */}
    </div>
  );
}

export default App;
