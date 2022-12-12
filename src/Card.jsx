import React from 'react'
import {BsEye} from 'react-icons/bs'
import { Link } from 'react-router-dom'

const Card = ({meal}) => {
  return (
    <div className=' w-64 border-2 flex  justify-center  items-center flex-col p-5 gap-5  rounded-xl relative h-[400px] shadow-lg hover:scale-105  transition duration-200 hover:shadow-xl'>
        <img src={meal.strMealThumb} width='200pxa' className=' rounded-xl' alt="" />
        <h3>{meal.strMeal}</h3>
        <Link to={`/detail/${meal.idMeal}`}>
            <button className='text-white bg-blue-500 py-2 px-10  rounded-xl  absolute bottom-3 right-3'>
                <BsEye/>
            </button> 
        </Link>
    </div>
  )
}

export default Card