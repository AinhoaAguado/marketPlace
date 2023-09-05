import React, { useEffect } from 'react'
import { useState } from 'react'
import CardEditForm from './functions/CardEdit';

function Home() {  
  const [Info, setInfo] = useState([])
  useEffect( () =>{    
    fetch("http://localhost:3000/courses").then(res => res.json())
    .then(data => setInfo(data))
  }, []);  
  
  return (
    <main>
      <h1>Bienvenido Sergio</h1>
      <button>Add Course</button>
      <ul>
      {Info.map(infoi => (
          <li key = {infoi.id}>
            <div>
            {infoi.title}
            </div>
            <div>
            {infoi.subtitle}
            </div>
            <div>
            {infoi.description}
            </div>
            <div>
            {infoi.price}
            </div>
            <button onClick={() => CardEditForm(infoi.id)}>Click me</button>
            </li>
          ))}
      </ul>
    </main>
  )
}

export default Home;