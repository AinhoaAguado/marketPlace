import React from "react";
import { useState } from "react";

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
            </li>
          ))}
      </ul>
    </main>
  )
}

export default Home;