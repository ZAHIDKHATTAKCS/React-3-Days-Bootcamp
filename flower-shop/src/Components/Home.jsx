import React from 'react'
import './Home.css'

const Home = () => {
  return (
    <>
    <div className="home_container">
      <div className="home_main">
        <h1>Welcome to <i>Flower <span style={{color:'hotpink'}}>Shop</span></i></h1>
      <p><i>where very plant blooms into flower and fill your life with joy</i></p>
      <a href='/gallery'>
      <button>Shop Here</button>
      </a>
      </div>
    </div>
    </>
  )
}

export default Home