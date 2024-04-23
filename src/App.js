import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Shop from './components/Shop';
import Cart from './components/Cart';
function App() {
  const [cart,setcart]=useState([]);
  const [warning,setwarning]=useState(false);
  const [show,setShow]=useState(true);
  const handleClick=(item)=>{
      let isPresent=false;
      cart.forEach((product)=>{
       if(item.id===product.id){
        isPresent=true;
       }
      })
      if(isPresent){
        setwarning(true);
        setTimeout(()=>{
          setwarning(false);
        },2000)
        return
      }
      setcart([...cart,item])
  }
  const handleChange=(item,d)=>{
      let ind=-1;
      cart.forEach((data,index)=>{
          if(data.id===item.id){
            ind=index;
          }
      })
      const tempArr=cart;
      tempArr[ind].amount+=d;
      if(tempArr[ind].amount===0)
        tempArr[ind].amount=1;
      setcart([...tempArr])
  }
  return (
   <>
    <Navbar size={cart.length} setShow={setShow}/>
    {
      show?<Shop handleClick={handleClick}/>:<Cart cart={cart} setcart={setcart} handleChange={handleChange}/>
    }
    {warning && <div className='warning'>Item is already Present in your cart</div>}
   </>
  );
}

export default App;
