import React from 'react';
import {useSelector} from "react-redux";
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import toast from "react-hot-toast";
import axios from "axios";
import Footer from './Footer';
const ProceedToBuy = () => {
    const cartItems = useSelector((store)=>store.cart.items);
    const bookIds = [];
    cartItems.map((data)=>{
        bookIds.push(data.id);
    })
    let bookpurchased = {
        bookId : bookIds
    }
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
    const onSubmit = async (data) =>{
        bookpurchased = {
            name : data.name,
            email : data.email,
            mobile: data.mobile,
            address1 : data.addressLane1,
            address2 : data.addressLane2,
            landmark : data.landmark,
            state : data.state,
            city : data.city,
            pincode : data.pincode,
            message : data.message,
            bookId : bookIds,
        };
        await axios
      .post("http://localhost:4004/bookbuy", bookpurchased)
      .then((res) => {
        if (res.data) {
          toast.success("Puchased Successfully");
        }
      })
      .catch((err) => {
        if (err.response) {
          toast.error("Error: " + err.response.data.message);
        }
      });
    } 
    const navigate = useNavigate();
    let totalPrice = 0;
    cartItems.map((item)=>{
        totalPrice = totalPrice + item.price;
    })
    const handlecancel =()=>{
        navigate("/cart");
    }
  return (
   <>
    <div>
        <div className='bg-slate-900'>
                <h1 onClick={()=>navigate("/")} className='text-3xl font-bold cursor-pointer md:p-[9px] md:ml-[100px] text-white p-[7px] ml-[40px]'>Book<span className='text-pink-400'>Store</span></h1>
        </div>
        <div className='mt-9'>
        <label className="input input-bordered flex items-center gap-2 md:w-[600px] md:ml-[450px] w-[300px] ml-[57px]">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70 dark:text-black">
            <path
            d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
        </svg>
        <input type="text" className="grow" placeholder="Name"  {...register("name", { required: true })}/>
        </label>
        {errors.name && <span className='text-red-500 md:ml-[450px] ml-[57px]'>This field is required</span>}
        <label className="input input-bordered flex items-center gap-2 md:w-[600px] md:ml-[450px] mt-5 w-[300px] ml-[57px]">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70 dark:text-black">
            <path
            d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
            <path
            d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
        </svg>
        <input type="email" className="grow" placeholder="Email"  {...register("email", { required: true })} />
        </label>
        {errors.email && <span className='text-red-500 md:ml-[450px] ml-[57px]'>This field is required</span>}
        <label className="input input-bordered flex items-center gap-2 md:w-[600px] md:ml-[450px] w-[300px] ml-[57px] mt-5">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70 dark:text-black">
            <path
            d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
        </svg>
        <input type="tel" className="grow" placeholder="Mobile"  {...register("mobile", { required: true })} />
        </label>
        {errors.mobile && <span className='text-red-500 md:ml-[450px] ml-[57px]'>This field is required</span>}
        <label className="form-control  md:w-[600px] md:ml-[450px] mt-3 w-[300px] ml-[57px]">
        <div className="label">
            <span className="label-text dark:text-white">Address Lane 1</span>
        </div>
        <textarea className="textarea textarea-bordered"  {...register("addressLane1", { required: true })}></textarea>
        {errors.addressLane1 && <span className='text-red-500'>This field is required</span>}
        </label>
        <label className="form-control  md:w-[600px] md:ml-[450px] mt-3 w-[300px] ml-[57px]">
        <div className="label">
            <span className="label-text dark:text-white">Address Lane 2</span>
        </div>
        <textarea className="textarea textarea-bordered"  {...register("addressLane2", { required: true })}></textarea>
        {errors.addressLane2 && <span className='text-red-500'>This field is required</span>}
        </label>
        <label className="form-control  md:w-[600px] md:ml-[450px] mt-3 w-[300px] ml-[57px]">
        <div className="label">
        <span className="label-text dark:text-white">Landmark</span>
        </div>
        <input type="tel" placeholder="Type here" className="input input-bordered w-full"  {...register("landmark", { required: true })} />
        </label>
        <select className="select select-bordered md:w-[600px] md:ml-[450px] mt-5 ml-[57px] w-[300px] dark:text-black" name='states' defaultValue={'DEFAULT'} id="states" {...register("state", { required: true })}>
        <option disabled value="DEFAULT" className='dark:text-black'>State</option>
        <option className='dark:text-black' value="AP">Andhra Pradesh</option>
        <option className='dark:text-black' value="AR">Arunachal Pradesh</option>
        <option className='dark:text-black' value="AS">Assam</option>
        <option className='dark:text-black' value="BR">Bihar</option>
        <option className='dark:text-black' value="CT">Chhattisgarh</option>
        <option className='dark:text-black' value="GA">Goa</option>
        <option className='dark:text-black' value="GJ">Gujarat</option>
        <option className='dark:text-black' value="HR">Haryana</option>
        <option className='dark:text-black' value="HP">Himachal Pradesh</option>
        <option className='dark:text-black' value="JK">Jammu and Kashmir</option>
        <option className='dark:text-black' value="JH">Jharkhand</option>
        <option className='dark:text-black' value="KA">Karnataka</option>
        <option className='dark:text-black' value="KL">Kerala</option>
        <option className='dark:text-black' value="MP">Madhya Pradesh</option>
        <option className='dark:text-black' value="MH">Maharashtra</option>
        <option className='dark:text-black' value="MN">Manipur</option>
        <option className='dark:text-black' value="ML">Meghalaya</option>
        <option className='dark:text-black' value="MZ">Mizoram</option>
        <option className='dark:text-black' value="NL">Nagaland</option>
        <option className='dark:text-black' value="OR">Odisha</option>
        <option className='dark:text-black' value="PB">Punjab</option>
        <option className='dark:text-black' value="RJ">Rajasthan</option>
        <option className='dark:text-black' value="SK">Sikkim</option>
        <option className='dark:text-black' value="TN">Tamil Nadu</option>
        <option className='dark:text-black' value="TG">Telangana</option>
        <option className='dark:text-black' value="TR">Tripura</option>
        <option className='dark:text-black' value="UP">Uttar Pradesh</option>
        <option className='dark:text-black' value="UT">Uttarakhand</option>
        <option className='dark:text-black' value="WB">West Bengal</option>
        <option className='dark:text-black' value="AN">Andaman and Nicobar Islands</option>
        <option className='dark:text-black' value="CH">Chandigarh</option>
        <option className='dark:text-black' value="DH">Dadra and Nagar Haveli and Daman and Diu</option>
        <option className='dark:text-black' value="DL">Delhi</option>
        <option className='dark:text-black' value="LD">Lakshadweep</option>
        <option className='dark:text-black' value="PY">Puducherry</option>
        </select>
        <div className=''>
            <div>
                <label className="form-control  md:w-[600px] md:ml-[450px] mt-3 w-[300px] ml-[57px]">
                <div className="label">
                <span className="label-text dark:text-white">Your current city</span>
                </div>
                <input type="text" placeholder="Type here" className="input input-bordered w-full"  {...register("city", { required: true })} />
                {errors.city && <span className='text-red-500'>This field is required</span>}
                </label>
            </div>
            <div>
                <label className="form-control  md:w-[600px] md:ml-[450px] mt-3 w-[300px] ml-[57px]">
                <div className="label">
                <span className="label-text dark:text-white">City Pincode</span>
                </div>
                <input type="tel" placeholder="Type here" className="input input-bordered w-full"  {...register("pincode", { required: true })} />
                {errors.pincode && <span className='text-red-500'>This field is required</span>}
                </label>
            </div>
        </div>
        </div>
    </div>
    <label className="form-control  md:w-[600px] md:ml-[450px] mt-5 w-[300px] ml-[57px]">
        <textarea className="textarea textarea-bordered tracking-wider placeholder-gray-600" placeholder='Any Message to your Product Delivery Boy'></textarea>
        </label>
    <div className='flex mt-5'>
        <div className='md:ml-[450px]'>
            <button className='bg-red-500 text-white md:p-3 rounded-md tracking-wider p-2 md:ml-[195px] ml-[100px]' onClick={handlecancel}>Cancel</button>
        </div>
        <div>
            <button type='submit' onClick={handleSubmit(onSubmit)} className='bg-orange-500 text-white md:p-3 rounded-md tracking-wider p-2 md:ml-[20px] ml-[20px]'>{totalPrice}$ Pay</button>
        </div>
    </div>
    <Footer />
   </>
  )
}

export default ProceedToBuy;
