import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import Home from './components/Home';


let seconds = 0;

setInterval(()=>{
let digito1 = Math.floor(seconds%10)
let digito2 = Math.floor((seconds%100)/10)
let digito3 = Math.floor((seconds%1000)/100)
let digito4 = Math.floor((seconds%10000)/1000)
let digito5 = Math.floor((seconds%100000)/10000)
let digito6 = Math.floor((seconds%1000000)/100000)
console.log(seconds);
seconds++
  
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <Home dig1={digito1} dig2={digito2} dig3={digito3} dig4={digito4} dig5={digito5} dig6={digito6}/>
    </React.StrictMode>
)
},1000)


