import { useState } from "react";
import './Pointcalcform.css';
// eslint-disable-next-line react/prop-types
export default function Pointcalcform({onAddData}){
    const [inputValue, setInputValue] = useState(''); 
    const [label, setLabel] = useState(''); 
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (inputValue && label) {
        onAddData(Number(inputValue), label); 
        setInputValue(''); 
        setLabel(''); 
        console.log('data added :3');
      }
    };
    return (
        <form onSubmit={handleSubmit}>
        <label htmlFor="label">
          Label:
          </label>
          <input id='label' type="text" value={label} onChange={(e) => setLabel(e.target.value)} 
          />
          <br></br>
            <label htmlFor="Score">
                Score:
            </label>
            <input type='number' id='Score' value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
            <br></br>
            <button type="submit" id='submit'>Add score</button>
        </form>
    );
}