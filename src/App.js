import React from "react";
import axios from 'axios';
import { useEffect,useState } from "react";

import './App.css';
function App(){
   const[advice,setAdvice] = useState('');

   function fetchQuote(){
    const url = "https://api.adviceslip.com/advice";
    axios.get(url)
         .then((response)=>{
            const {advice} = response.data.slip;
            setAdvice(advice);
         })
         .catch((error)=>{
            console.log(error);
         })

   }

   useEffect(fetchQuote,[]);

   
    return(
        <div className="app">
            <div className="card">
                <h1 className="heading">{advice}</h1>
                <button className="button" onClick={fetchQuote}>
                    <span>GET YOUR DAILY DOSE OF WIT!</span>
                </button>
            </div>
        </div>
       
    );
}

export default App;
