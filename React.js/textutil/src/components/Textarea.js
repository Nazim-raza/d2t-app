import React, { useState } from 'react'


export default function Textarea(props) {
  const handleupclick=()=>{
    let newText = Text.toUpperCase();
    setText(newText);
  }  
  const handleloclick=()=>{
    let newText = Text.toLowerCase();
    setText(newText);
  }      
  const handleclear=()=>{
    let newText = " ";
    setText(newText);
  }
                                
  const handleonchange=(event)=>{
    console.log("on change");
    setText(event.target.value)
  }
   const [Text, setText] = useState(' ');
   //setText('new Text');
     return (
    <div className="main" style={{color: props.mode==="dark"?"white":"black"}}>
    <h1>{props.heading}</h1>
    <div className="container mb-3" >
    <textarea className="form-control" value={Text} style={{backgroundColor:props.mode==="dark"?"#2a5b8d":"white",color: props.mode==="dark"?"white":"black"}} onChange={handleonchange} id="mybox" rows="9"></textarea>
    </div>
    <button className="btn btn-primary my-2 mx-3" onClick={handleupclick} >Convert to Upper-Case</button>
    <button className="btn btn-primary my-2" onClick={handleloclick} >Convert to lower-Case</button>
    <button className="btn btn-primary my-2 mx-2" onClick={handleclear} >Clear All</button>
     
  <div className="container my-3">
  <h2>Text Summary</h2>
  <p>{Text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {Text.length} Characters</p>
  <p>{0.008* Text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to read</p>
  <p>Preview</p>
  <p>{Text.length>0?Text:"Enter Your Text to Preview"}</p>
  </div>
</div>

  ) 
}
