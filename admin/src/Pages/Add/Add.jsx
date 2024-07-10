import React, {  useState } from 'react'
import './Add.css'
import upload_area from '../../assets/upload_area.svg'
import axios from 'axios';
import { toast } from 'react-toastify';

const Add = ({url}) => {

 

  const [image,setImage] = useState(false)
  const [data,setData] = useState({
    name: "",
    description: "",
    price: "",
    category: "Anime Products",
  })

  const onChangeHandler = (e) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data=> ({...data, [name]:value}))
  }

  const onSubmitHandler = async(event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", data.name)
    formData.append("description", data.description)
    formData.append("price", Number(data.price))
    formData.append("category", data.category)
    formData.append("image",image)

    const response = await axios.post(`${url}/api/anime/add`, formData)
    if(response.data.success){
      setData({
        name: "",
        description: "",
        price: "",
        category: "Anime Products",
      })

      setImage(false);
      toast.success(response.data.message)

    }
    else{
    toast.error(response.data.message)
    }
  }

  return (
    <div className='add'>
        <form className='flex-col ' onSubmit={onSubmitHandler}>
          <div className="add-img-upload flex-col">
            <p>Upload Image</p>
            <label htmlFor="image">
              <img  src={image ? URL.createObjectURL(image) : upload_area} alt="" />
            </label>
            <input onChange={(e) => setImage(e.target.files[0])} type="file" id='image' hidden required />
          </div>
          <div className="add-product-name flex-col">
            <p>Product name</p>
            <input onChange={onChangeHandler} value={data.name} type="text" required name='name' placeholder='Type here' />
          </div>
          <div className="add-product-description flex-col">
            <p>Product Ddescription</p>
            <textarea onChange={onChangeHandler} value={data.description} name="description" rows="8" placeholder='Write the description of the product' required >

            </textarea>
          </div>
          <div className="add-category-price">
            <div className='add-category flex-col'>
              <p>Product Category</p>
              <select onChange={onChangeHandler} name="category" >
                <option value="Anime Products">Anime Products</option>
       
              </select>
            </div>
            <div className='add-price flex-col'>
              <p>Product price</p>
              <input onChange={onChangeHandler} value={data.price} type="Number" name='price' placeholder='₹' />
            </div>
          </div>

          <button className='add-btn' type='submit'>ADD</button>
        </form>
    </div>
  )
}

export default Add