
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menubar from './components/Menubar/Menubar';
import Products from './components/Products/Products';
import { useState } from 'react';


function App() {
  const [count, setCount] = useState(0);
  const handleAddToCart =()=>{
    setCount(count +1)
  }
  return (
    <div className="App">
    <Menubar count={count}></Menubar>
   <Products handleAddToCart={handleAddToCart}></Products>
    </div>
  );
}

export default App;
