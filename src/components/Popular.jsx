import React, { useEffect } from 'react'

const Popular = () => {
    useEffect(() => {
        getPopular();
    }, []);
    
    const getPopular = async () => {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&NUMBER=9`
  
      );
      const data = await api.json();
    };
  return (
    <div></div>
  )
}

export default Popular