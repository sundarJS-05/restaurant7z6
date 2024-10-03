
import React from 'react'

const MenuCard = ( {props}) => {
  // console.log(props)

  return (

    props.map( (j)=> {
      return (
        <div>

        <div className='card-container' key={j.id}>
                <div className='card'>
                  <div className='card-body'>
        
                    <span className='card-number card-circle subtle'>
                      {j.id}
                    </span>
        
                    <span className='card-author subtle'>
                      {j.category}
                    </span>
        
                    <br></br>
        
                    <h3 >
                      {j.name}
                    </h3>
        
                    <span className='card-description '>
                      {j.description}
                    </span>             
                  
                  </div>
            
                <img src={j.image} height='100' alt='poha' className='card-media'/>
        
                </div>
        
              </div>
        
        
            </div>

      )
    })


   
  )
}

export default MenuCard