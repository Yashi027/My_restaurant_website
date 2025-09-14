import React from 'react';
import './Add.css'
import { assets } from '../../assets/admin_assets/assets.js'
import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';


function Add({url}) {

  const [image, setImage] = useState(false);
  const [data, setdata] = useState({
    name: "",
    description: "",
    price: "",
    category: "Salad"
  })

  const onchangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setdata(data => ({ ...data, [name]: value }))
  }

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const formdata = new FormData();
    formdata.append("name", data.name);
    formdata.append("description", data.description);
    formdata.append("price", Number(data.price));
    formdata.append("image", image);
    formdata.append("category", data.category)
    const response = await axios.post(`${url}/api/food/add`, formdata);
    if (response.data.success) {
      setdata({
        name: "",
        description: "",
        price: "",
        category: "Salad"
      })
      setImage(false);
      toast.success(response.data.message)
    }else{
        toast.error(response.data.message)
    }
  }


  return (
    <div className='add'>
      <form className='flex-col' onSubmit={onSubmitHandler}>
        <div className="add-image-upload flex-col">
          <p>Upload Image</p>
          <label htmlFor="image">
            <img src={image ? URL.createObjectURL(image) : assets.upload_area} alt="" />
          </label>
          <input onChange={(e) => setImage(e.target.files[0])} type="file" id="image" hidden required />
        </div>
        <div className="add-product-name flex-col">
          <p>Product Name</p>
          <input onChange={onchangeHandler} value={data.name} type="text" name='name' placeholder='Type here' />
        </div>
        <div className="add-product-description flex-col">
          <p>Product Description</p>
          <textarea name="description" rows="6" onChange={onchangeHandler} value={data.description} placeholder='Write content here' required></textarea>
        </div>
        <div className="add-category-price">
          <div className="add-category flex-col">
            <p>Product Category</p>
            <select name="category" onChange={onchangeHandler} >
              <option value="Salad">Salad</option>
              <option value="Rolls">Rolls</option>
              <option value="Dessert">Dessert</option>
              <option value="Sandwich">Sandwich</option>
              <option value="Cake">Cake</option>
              <option value="Pure Veg">Pure Veg</option>
              <option value="Pasta">Pasta</option>
              <option value="Noodles">Noodles</option>
            </select>
          </div>
          <div className="add-price flex-col">
            <p>Product Price</p>
            <input type="number" name="price" onChange={onchangeHandler} value={data.price} placeholder='$10' />
          </div>
        </div>
        <button type="submit" className='add-btn'>Add</button>
      </form>
    </div>
  );
}

export default Add;
