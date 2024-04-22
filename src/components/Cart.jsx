import React from 'react'
import { useState } from 'react'
import Shop from './Shop'
import '../styles/card.css'


const Cart = ({cart,setcart, handleClick}) => {
    console.log(cart)
    const [price,setPrice]=useState(0);
    
    const handleBook=(id)=>{
       const updatedCart=cart.filter((item)=>item.id!==id);
       setcart(updatedCart);
    }
    const isCartEmpty = cart.length === 0;
    
  return (
    <section>
        {isCartEmpty && <p>Cart is Empty</p>
        }
        {
        cart?.map((item)=>(
            <div className='cards' key={item.id}>
                <div className='image_box'>
                    <img src={item.img} alt='image'/>
                    <p>{item.title}</p>
                </div>
                <div>
                    <span>Price-{item.price} rupees</span>
                    <br/>
                    <button onClick={()=>handleBook(item.id)}>Remove</button>
                </div>
            </div>
        ))
        }
    </section>
  )
}

export default Cart