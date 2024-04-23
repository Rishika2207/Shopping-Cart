import React, { useEffect } from 'react'
import { useState } from 'react'
import Shop from './Shop'
import '../styles/cart.css'


const Cart = ({cart,setcart,handleChange}) => {
    console.log(cart)
    const [price,setPrice]=useState(0);
    
    const handleBook=(id)=>{
       const updatedCart=cart.filter((item)=>item.id!==id);
       setcart(updatedCart);
    }
    const handlePrice=()=>{
        let ans=0;
        cart.map((item)=>{
            console.log(item)
            ans+=item.amount*item.price
        })
        setPrice(ans)
    }
    useEffect(()=>{
        handlePrice();
    })
  return (
    <article>
        {
        cart?.map((item)=>(
            <div className='cart_box' key={item.id}>
                <div className='cart_img'>
                    <img src={item.img} alt='image'/>
                    <p>{item.title}</p>
                </div>
                <div>
                    <button onClick={()=>handleChange(item,+1)}>+</button>
                    <button>{item.amount}</button>
                    <button onClick={()=>handleChange(item,-1)}>-</button>
                </div>
                <div>
                    <span>Price-{item.price} rupees</span>
                    <br/>
                    <button onClick={()=>handleBook(item.id)}>Remove</button>
                </div>
            </div>
        ))
        }
        <div className='total'>
            <span>Total Price of your Cart</span>
            <span>Rs {price}</span>
        </div>
    </article>
  )
}

export default Cart