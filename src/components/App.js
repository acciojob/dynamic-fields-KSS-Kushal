
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [data, setData] = useState([{name: '', age: ''}]);
  const changeName =(e, i) => {
    const arr = [...data];
    arr[i].name = e.target.value;
    setData(arr);
  }
  const changeAge =(e, i) => {
    const arr = [...data];
    arr[i].age = e.target.value;
    setData(arr);
  }
  const remove = (i) => {
    const arr = [...data];
    arr.splice(i, 1);
    setData(arr);
  }

  const addMore = () => {
    setData(prev => [...prev, {name: '', age: ''}]);
  }

  const handleSubmit = () => {
    console.log(data);
  }
  return (
    <div>
        {/* Do not remove the main div */}
        {data.map((v, i)=>(
          <div key={i} className="">
            <input type="text" name="name" placeholder="Name" value={v.name} onChange={e=>changeName(e, i)} />
            <input type="text" name="age" placeholder="Age" value={v.age} onChange={(e)=>changeAge(e, i)} />
            <button onClick={() =>remove(i)}>Remove</button>
          </div>
        ))}
        <button onClick={addMore}>Add More...</button>
        <button onClick={handleSubmit}>Submit</button>
        <p>After clickig submit check console for data</p>
    </div>
  )
}

export default App
