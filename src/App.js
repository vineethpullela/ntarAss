import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'

const  App= () => {
  const [search,setSearch]=useState("")
  return (<div>
    <Navbar setSearch={setSearch}/>
    <div className='body-container'>
      <Home search={search}/>
    </div>
  </div>
   
  )
}


export default App
