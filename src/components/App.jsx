import React,{useState} from 'react';

const App=()=>{
    let time =  new Date().toLocaleTimeString();
    const [Time,setTime]=useState(time);
    
    const getTime=()=>{
    let newtime =  new Date().toLocaleTimeString();
    setTime(newtime);
    setInterval(getTime,1000);
    }

    return(
        <div className="container">
        <h1 className='time'>{Time}</h1>
        <button onClick={getTime}>Get Time</button>
        </div>
    )
}

export default App;