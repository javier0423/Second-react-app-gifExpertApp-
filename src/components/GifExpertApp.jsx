import React, { useState } from 'react'
import { AddCategory } from './AddCategory'
import { GifGrid } from './GifGrid'

export const GifExpertApp = () => {

    // const categories = ['Naruto', 'Bleach', 'Slam Dunk']
    const [categories, setCategories] = useState(['one piece'])

    // const handleAdd = () => {
    //     // setCategories([...categories, 'HunterXHunter'])
    //     setCategories(cats => [...cats, 'HunterXHunter'])
    // }

  return (
    <div>GifExpertApp
        <AddCategory setCategories={setCategories}/>
        <hr />
        {/* <button onClick={handleAdd}>Agregar</button> */}

        {
            categories.map( category =>(
              <GifGrid
                key={category} 
                category={category}/>
            ))
        }
        <ol>
        </ol>
    </div>
  )
}
