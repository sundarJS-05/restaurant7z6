
import React, { useState } from 'react'
import '../App.css'
import Menu from './MenuApi'
import MenuCard from './MenuCard'

const Restaurant = () => {

  let [ menuData, setMenuData] = useState(Menu)

  let filterItem = (category)=>{

    let foodList = Menu.filter( (j)=> {
      if (j.category==category)

        return (j.category)

    })

    setMenuData(foodList)

  }

  return (
    <div>

      <nav class='navbar'>
        <div className='btn-group'>
          <button className='btn-group__item'  onClick={ ()=> filterItem('breakfast')} >
            Breakfast
          </button>

          <button className='btn-group__item' onClick={ ()=> filterItem('lunch')} >
            Lunch
          </button>

          <button className='btn-group__item' onClick={ ()=> filterItem('evening')} >
            Snacks
          </button>

          <button className='btn-group__item'  onClick={ ()=> filterItem('dinner')} >
            Dinner
          </button>

          <button className='btn-group__item' onClick={ ()=> setMenuData(Menu)}>
            All
          </button>
        </div>

      </nav>

      <MenuCard props={menuData}/>
    </div>
  )
}

export default Restaurant