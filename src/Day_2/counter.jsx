import React,{useState} from 'react'

const Counter = () => {
    const [counter, setCounter] = useState(0);
    const [name, setName] = useState("")

    const handleIncrement = () =>{
        setCounter(counter+1);
    }
    const handleDecrement = () =>{
        setCounter(counter-1);
    }
    const handleInputChange = (event) => {
        const {value} = event.target;
        // console.log("Kamran",value);
        setName(value)
        
    }
  return (
    <React.Fragment>
        <h2>Counter Value:{counter}</h2>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        <hr />
        <p>My Name Is:  <b>{name}</b></p>
        {/* By Conditioning */}
        <p>My Name Is:  <b>{name ? name:"please Enter your name"}</b></p>

        <br />
        <input type="text" onChange={handleInputChange} />
    </React.Fragment>
  )
}

export default Counter;