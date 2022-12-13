import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {RiYoutubeFill} from 'react-icons/ri'
import Loader from './loader/Loader'
const Details = () => {
  const {id} = useParams();
  const [meals,setMeals] = useState([]);
  const [isLoading,setIsLoading] = useState(true);
  const getSingleMeal = async() =>{
    const {data} = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    setMeals(data?.meals[0]);
    setTimeout(() =>{
      setIsLoading(false)
    },500)
  }
  useEffect(() =>{
    getSingleMeal();
  },[])

  return (
    <>
    {isLoading? (<Loader/>) : (<div className=' '>
        <img src={meals.strMealThumb} width='400px' className=' rounded-xl' alt="" />
        <p className=' bg-pink-500 w-20 text-white rounded-lg  text-center my-3 p-1'>{meals.strCategory}</p>
        <p className=' text-2xl'>{meals.strMeal}</p>

        <div className="">
          <h5 className=' text-lg'>Instruction</h5>
          <p className=' text-gray-500 leading-5  tracking-wider'>{meals.strInstructions}</p>
        </div>

        <div className=" flex items-center my-2">
          <a href={meals.strYoutube} target={'_blank'}>
              <RiYoutubeFill className=' text-5xl text-red-500 cursor-pointer '/>
          </a>
          <p className=' text-sm text-gray-500 ml-3'>Watch on YouTube</p>

        </div>
      </div>) }
    </>
  )
}

export default Details