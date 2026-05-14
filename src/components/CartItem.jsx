import {toast} from 'react-hot-toast';
import { FcDeleteDatabase } from "react-icons/fc";
import { useDispatch } from 'react-redux';
import {remove} from "../redux/Slices/CartSlice";

function CartItem({item , itemIndex}) {
  const dispatch = useDispatch();

  const removeFromCart = () =>{
     dispatch(remove(item.id));
     toast.success("Item Removed")
  }

  return (
    <div >
      <div>
        <div className=''>
          <img  src={item.image} alt=""  className='h-[180px]'/>
        </div>
        <div>
          <h1>{item.title}</h1>
          <h1 className="w-100 text-black-400 font-normal text-[10px] text-left">
          {item.description.split(" ").slice(0, 15).join(" ") + "..."}</h1>
        </div>
        <div>
          <p>{item.price}</p>
          <div onClick={removeFromCart}>
            <FcDeleteDatabase />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItem
