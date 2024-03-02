import './App.css';
import Header from './Header';
import { useState } from 'react';
function App() {
  const [text,setText] = useState("");
  const handleOnChange = (event)=>{
    setText(event.target.value);
  }
  const addIt = ()=>{
    const notepad = document.querySelector('#notes');
    const newNote = document.createElement('div');
    
    const info = text;
    newNote.className = "n"
    setText("");
    newNote.textContent = info;
    
    notepad.append(newNote);
  }
  const del = ()=>{
    const ele = document.querySelector('#notes').firstElementChild;
    
    if(!ele){
      alert('Nothing to Delete');
    }
    else{
      ele.remove();
    }
  }
  return (
    <>
      <Header /><hr style={{color:'rgba(0, 153, 255, 0.76)',backgroundColor:'rgba(0, 153, 255, 0.76)',height:'2px',borderWidth:'0'}} />
      <img onClick={del} style={{marginLeft:'45%',width:'8vw',cursor:'pointer',height:'12vh'}} src="https://i.pinimg.com/originals/55/7c/80/557c804cc776e5438bfc565f1caf7dc3.png"  alt="" />
      <span id="create"><input onChange={handleOnChange} value={text} style={{width:'90vw',height:'7.6vh',borderStyle:'none',fontSize:'32px',color:'rgba(0, 153, 255, 0.76)'}} type="text" placeholder='Enter a Note' /><button onClick={addIt} style={{width:'10vw',cursor:'pointer'}}><img src="https://cdn-icons-png.flaticon.com/512/5562/5562595.png" style={{width:'10vw',height:'7vh'}} /></button></span>
      <div id="notes" style={{overflow:'scroll',height:'77vh'}}></div>
    </>
  );
}

export default App;
