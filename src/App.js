import {React , useState ,useEffect} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CounterComponent from './Coponents/CounterComponent';


function App() {
  const [count,setCount]=useState(0);
  useEffect(()=>{
    console.log(count)
  },[count])
  return (
    <div className="App">
      
    <CounterComponent count={count} setCount={setCount}/>  
    </div>
  );
}

export default App;
