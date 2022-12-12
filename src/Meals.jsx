import axios from 'axios'
import React, { useEffect,useState } from 'react'
import Card from './Card';

const Meals = () => {
    const [meals,setMeals] = useState([]);
    const getMeals = async() =>{
        const {data} = await axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood');
        setMeals(data.meals);
    }
    useEffect(() =>{
        getMeals();
    },[])
  return (
    <div className=' flex justify-center flex-wrap gap-5'>
        {meals?.map(meal => <Card key={meal.idMeal} meal={meal}  />)}
    </div>
  )
}

export default Meals