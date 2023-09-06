import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import './home.css'

function Home() {
  const [Info, setInfo] = useState([])
    useEffect( () =>{
      fetch("http://localhost:3000/courses").then(res => res.json())
      .then(data => setInfo(data))
  }, []);  
  
  return (
    <main>
      <h1 className='user-name'>BIENVENIDO<span className='text-orange'> SERGIO</span></h1>
      <Link to="AddForm"><button className='button__add-course'>Add Course</button></Link>
      <ul className='card__container'>
      {Info.map(infoi => (
        <li key = {infoi.id} className='card'>
          <div>
            <img src={`data:image/png;base64,${infoi.img}`} className="card__image" alt="aqui van imagenes"  />
          </div>
          <div className='card__texts'>
            <div className='card__title'>
              {infoi.title}
            </div>
            <div className='card__price'>
            `{infoi.price}€`
            </div>
            <div className='card__subtitle'>
              {infoi.subtitle}
            </div>
            <div className='card__description'>
              {infoi.description}
            </div>
            <button className='button__edit'>Edit</button>
            <button className='button__post'>Post</button>
          </div>
        </li>
          ))}
      </ul>
    </main>
  )
}export default Home;