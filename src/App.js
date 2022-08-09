
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menubar from './components/Menubar/Menubar';
import Products from './components/Products/Products';
import { useEffect, useState } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";


function App() {
  const [count, setCount] = useState(0);
  const handleAddToCart =()=>{
    setCount(count +1)
  }
  useEffect(()=>{
    Aos.init()
  },[])
  return (
    <div className="App">
    <Menubar count={count}></Menubar>
   <Products handleAddToCart={handleAddToCart}></Products>
    </div>
  );
}

export default App;
