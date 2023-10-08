import React  from 'react'
import { GifGridItem } from './GifGridItem'
// import { getGifs } from '../helpers/getGifs'
import { useFetchGifs } from '../hooks/useFetchGifs'

export const GifGrid = ({category}) => {

  // const texto = 'wwe'
  // console.log(texto);

  const {data: images,loading} = useFetchGifs(category)
  // console.log(loading);

  // const [images, setImages] = useState([])




    // getGifs()

  return (
    <>
      <h3 className='animate__animated animate__fadeIn'>{category}</h3>

      {
        loading && <h3 className=' animate__animated animate__flash'>Cargando...</h3>
      }

        <div className='card-grid'>          
            {
                images.map( img => (
                    <GifGridItem 
                      key={img.id}
                      {...img} 
                    />
                ))
            }        
        </div>
    </>
  )
  
}
