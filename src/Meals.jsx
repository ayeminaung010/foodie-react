import axios from 'axios'
import React, { useEffect,useState,Fragment } from 'react'
import Loader from './loader/Loader';
import Card from './Card';

const Meals = () => {
    const [meals,setMeals] = useState([]);
    const [isLoading,setIsLoading] = useState(true);
    const getMeals = async() =>{
        const {data} = await axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood');
        setMeals(data.meals);
        
        setTimeout(()=>{
          setIsLoading(false)
        },500)
    }
    useEffect(() =>{
        getMeals();
    },[])
    
  return (
    <>
    {isLoading ? (<Loader/>) : (<div className=' flex justify-center flex-wrap gap-5'>
          {meals?.map(meal => <Card key={meal.idMeal} meal={meal}  />)}
      </div>)}
    </>
  )
}

export default Meals