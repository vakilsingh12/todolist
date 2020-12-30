import React,{useState} from 'react'
function App() {
  const [item, setitem] = useState();
  const [names, setname] = useState([]);
  const changeMe=(e)=>{
    setitem(e.target.value);
  }
  const Handle=()=>{
   setname((old)=>{
     return [...old,item];
   });
   setitem('');
  }
  const delteItem=(id)=>{
    setname((old)=>{
     return old.filter((a,index)=>{
       return index!==id;
     })
    })
  }
  return (
    <div className="app">
      <div className="main">
        <h1>Todo List app</h1>
        <input type="text"
        onChange={changeMe}
        value={item}
         placeholder="Enter item"/> 
        <button onClick={Handle}>+</button>
        <ol>
          {names.map((res,index)=>{
            return <li><span onClick={()=>delteItem(index)}
            style={{fontSize:'32px'}}>*</span> {res}</li>
  
          })}
        </ol>
      </div>
    </div>
  )
}

export default App
