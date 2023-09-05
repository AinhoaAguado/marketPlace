import './App.css'
import Nav from './components/Organisms/navBar/nav'
import Footer from './components/Organisms/Footer/Footer'
import CardProducts from './components/Organisms/cardProducts/CardProducts'
import AddCourse from './components/Organisms/AddCourseFORM/AddCourse'


function App() {

  return (
    <>
      <Nav/>
      <CardProducts />
      <AddCourse />
      <Footer/>
    </>
  )
}

export default App
