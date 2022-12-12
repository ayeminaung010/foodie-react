import React from 'react'
import {RiRestaurant2Fill} from 'react-icons/ri'

const Navbar = () => {
  return (
    <div className=" flex items-center gap-2 my-8  justify-center ">
        <RiRestaurant2Fill className=' text-pink-500 text-3xl'/>
        <p className=' text-xl font-semibold  text-gray-500'>Foodie</p>
    </div>
  )
}

export default Navbar