import logo from './logo.svg';
import './App.css';
// import { useContext } from 'react';
import { useTheme } from './context/theme-context';

function App() {
  const {isThemeLight, setIsThemeLight} = useTheme();
  const handleThemeClick = () => {
    setIsThemeLight(!isThemeLight)
  }
  return (
<div style={{backgroundColor : `${isThemeLight ? "white" : "black"}`}} className="App">
     <button onClick={handleThemeClick}>Change Theme</button>
    </div>
  );
}

export default App;
