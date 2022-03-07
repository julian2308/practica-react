import UserContext from './context/UserContext';
import MoreInfo from './components/MoreInfo';
import { useRef } from 'react';
import './App.css';

function App() {

  //Podría ser una petición a una API y nos devuelve valores concretos para userData
  const userData = {
    name: "Agustín",
    years: 27,
  }

  const makeThings = () => {
    alert(inputRef.current.value)
    resultRef.current.innerHTML = inputRef.current.value

  }

  const inputRef = useRef(null);
  const resultRef = useRef(null);

  return (
    <UserContext.Provider value={userData}>
      <div className="App">
        <h1>Use context</h1>
        <MoreInfo/>
      </div>

      <div className="ref">
        <input type="text" ref={inputRef} />
        <button onClick={makeThings}>Hacer cosas</button>

        <div ref={resultRef}></div>
      </div>
    </UserContext.Provider>
  );
}

export default App;
