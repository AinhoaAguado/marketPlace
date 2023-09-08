import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import AddCourseForm from './components/Organisms/AddCourseFORM/AddCourseForm.jsx'
import './index.css'
import { BrowserRouter , Routes, Route } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}></Route>
      <Route path='AddForm' element={<AddCourseForm />}></Route>
      <Route path='*' element={
        <main>
          <p>404 the Route don't exist!!</p>
        </main>
      }></Route>
    </Routes>
  </BrowserRouter>
)
