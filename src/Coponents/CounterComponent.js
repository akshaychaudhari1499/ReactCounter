import React from 'react'
import { Button } from 'react-bootstrap'

const CounterComponent = ({count , setCount}) => {

    const increment=()=>{
        
        setCount(count+1);
    }
    
    const decrement=()=>{
        if (count===0) {
            alert ("You can not go below zero!")
            return}
        setCount(count-1);
    }
  return (
    <div style={{border:'3px solid black',marginLeft:'400px',width:"50%"}}>
        <div>  < div style={{fontSize:'79px' ,fontWeight:'700'}}> {count}   </div><br/>
<Button className="btn btn-dark mb-2 mt-2"size='lg' onClick={increment}>Increment </Button><br/>
<Button className="btn btn-dark mt-2 mb-2" size='lg' onClick={decrement}>Decrement </Button><br/>
{count>10 && <Button className="btn btn-dark mt-2 " size='lg'  onClick={()=>setCount(0)}>Go to Zero </Button>}


    </div></div>
      
  )
}

export default CounterComponent