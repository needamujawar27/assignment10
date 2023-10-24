import React,{useState} from "react";
import { RadiusCounter } from "./components/RadiusCounter";
import "./components/common.css"

function App() {
  const[ radius,setRadius]=useState(0);
  const [bgColor, setBgColor]=useState("")
  return (
    <div className="main">
     <button onClick={()=>setRadius(radius+120) }>Radius +</button>
     <button onClick={()=>setRadius(radius-120)}>Radius -</button>
     <input type="text" onChange={(e)=>setBgColor(e.target.value)} />
       <RadiusCounter radius={radius} bgColor={bgColor}/>
    </div>
  );
}

export default App;
