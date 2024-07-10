import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../../Context/ShopContext";
import "./PlaceOrder.css";
import {useNavigate} from 'react-router-dom'
// import { toast } from "react-toastify";

const PlaceOrder = () => {

    const{getTotalCartAmount, token, all_product, cartItems, url} = useContext(ShopContext)

    const [data, setData] = useState({
      firstName:"",
      lastName:"",
      email:"",
      street:"",
      city:"",
      state:"",
      zipcode:"",
      country:"",
      phone:""
    })

    const onChangeHandler = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setData(data=>({...data,[name]:value}))
    }

    const placeOrder = async(event) => {
      event.preventDefault();
      let orderItems = []
      all_product.map((item)=>{
          if(cartItems[item._id] >0){
            let itemInfo = item;
            itemInfo["quantity"] = cartItems[item._id]
            orderItems.push(itemInfo)
          }
      })
      let orderData = {
        address: data,
        items:orderItems,
        amount:getTotalCartAmount()+2,
      }
      let response = await axios.post(url+"/api/order/place", orderData,{headers:{token}})
      if(response.data.success){
        const {session_url} = response.data;
        window.location.replace(session_url)
      }
      else{
        alert("Error")
      }
    }
   
    const navigate = useNavigate()

    useEffect(() => {
      if(!token){
          navigate("/cart")
          alert("Please login to checkout")
      }
      else{
        if(getTotalCartAmount() === 0){
          navigate('/cart')
          alert("Add Products to the cart before checkout")
        }
      }
    }, [token])

  return (
    <form className="place-order" onSubmit={placeOrder} >
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input required name="firstName" onChange={onChangeHandler} value={data.firstName} type="text" placeholder="First Name" />
          <input required name="lastName" onChange={onChangeHandler} value={data.lastName} type="text" placeholder="Last Name" />
        </div>

        <input required name="email" onChange={onChangeHandler} value={data.email} type="email" placeholder="Email address" />
        <input required name="street" onChange={onChangeHandler} value={data.street} type="text" placeholder="Street" />
        <div className="multi-fields">
          <input required name="city" onChange={onChangeHandler} value={data.city} type="text" placeholder="City" />
          <input required name="state" onChange={onChangeHandler} value={data.state} type="text" placeholder="State" />
        </div>
        <div className="multi-fields">
          <input required name="zipcode" onChange={onChangeHandler} value={data.zipcode} type="text" placeholder="Zip code" />
          <input required name="country" onChange={onChangeHandler} value={data.country} type="text" placeholder="Country" />
        </div>
        
        <input required name="phone" onChange={onChangeHandler} value={data.phone} type="text" placeholder="Phone number" />
      </div>
      <div className="place-order-right">
      <div className="cartitems-total">
            <h1>Cart Totals</h1>
            <div>
                <div className="cartitems-total-item">
                    <p>Subtotal</p>
                    <p>₹{getTotalCartAmount()}</p>
                </div>
                <hr />
                <div className="cartitems-total-item">
                    <p>Shipping Fee</p>
                    <p>Free</p>
                </div>
                <hr />
                <div className="cartitems-total-item">
                    <h3>Total</h3>
                    <h3>₹{getTotalCartAmount()}</h3>
                </div>
            </div>
            <button type="submit" >PROCEED TO PAYMENT</button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
