import './App.css';
import { useState } from "react";

const sports = ["basketball", "football", "cricket"];

function App() {
  // Initialize the state with the initial value
  const [arrCopy, setArrCopy] = useState(sports);
  const [check, setCheck] = useState(false)

  const handleCheckbox = (value, i) => {
     console.log("it is check", value, i)
  }

  const handleDelete = (index) => {
    const filterCopy = arrCopy.filter((item, i) => i !== index);
    setArrCopy(filterCopy);
  }

  return (
    <div>
      <ul>
        {arrCopy.map((item, i) => (
          <li key={i}>
            <input type ="checkbox" onChange={(e,i)=> handleCheckbox(e.target.value, i)}></input>
            {item}
            <button onClick={() => handleDelete(i)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
