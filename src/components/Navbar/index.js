import React from 'react'
import "./index.css"
import vkart from "../../asserts/vkart.png"

const Navbar = ({setSearch}) => {
  return (
    <div>
    <nav class="navbar navbar-expand-lg bg-body-tertiary p-4">
<div class="container-fluid">
  <a class="navbar-brand" href="#"><img src={vkart} className='app-logo' alt=""/></a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-between">
      <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="#">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Products</a>
      </li>
     
      <li class="nav-item">
        <a class="nav-link disabled" aria-disabled="true">Disabled</a>
      </li>
    </ul>
    <form class="d-flex" role="search">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={(e)=>setSearch(e.target.value)}/>
      
    </form>
  </div>
</div>
</nav>
  </div>
  )
}


export default Navbar
