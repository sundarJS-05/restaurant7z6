
import React, { useState } from 'react'
import '../App.css'
import Menu from './MenuApi'
import MenuCard from './MenuCard'

const Restaurant = () => {

  let [ menu, setMenu] = useState(Menu)

  return (
    <div>

      <MenuCard/>
    </div>
  )
}

export default Restaurant