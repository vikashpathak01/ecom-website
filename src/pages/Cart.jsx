import { useEffect, useState } from 'react'
import {useSelector} from "react-redux";
import {NavLink} from "react-router-dom";
import CartItem from '../components/CartItem';

const Cart = () => {

  const {cart} = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect( () => {
       setTotalAmount( cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart])

  return (
    <div >
      {
        cart.length > 0 ?
        (<div className='flex flex-row justify-center items-center width-[70vw]'>
              <div>
                {
                  cart.map((item,index) => {
                    return <CartItem key={item.id} item={item} itemIndex={index}/>
                  })
                }
              </div>

              <div className='flex flex-col justify' >
                <div>
                  <div className='text-green-500 h-3 text-[10px]'>Your Cart</div>
                  <div className='text-green-400  text-1xl font-semibold'>Summary</div>
                  <p>
                    <span className='text-[10px]'>Total Items: {cart.length}</span>
                  </p>
                </div>
                <div>
                  <p className='text-[10px]'>Total Amount: ${totalAmount}</p>
                  <button className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5">
                    CheckOut Now
                  </button>
                </div>
              </div>
          </div>
        ) : 
        (
          <div>
              <h1>Cart Empty</h1>
              <NavLink to="/">
                <button>
                  Shop Now
                </button>
              </NavLink>
          </div>
        )
      }
    </div>
  )
}

export default Cart
