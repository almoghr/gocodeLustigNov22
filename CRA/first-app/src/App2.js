import { useState } from 'react';
import './App.css';
import Counter from './components/Counter';
import Register from './components/Register';


function App() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  return (
    <div className="App" style={isDarkMode ? {backgroundColor: '#333'} : {}}>
       <Register />
      {/* <button onClick={() => setIsDarkMode(!isDarkMode)}>
        set dark mode {isDarkMode ? "off" : "on"}
      </button>  */}
      <Counter />
    </div>
  );
}

export default App;
