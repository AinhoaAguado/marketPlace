import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Nav from "../navBar/Nav";
import Footer from "../Footer/Footer";
import './addCourseForm.css'



const AddCourseForm = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
  return (
    <>
    <Nav />
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <div className="all">

      <h1>FORM</h1>

      <label htmlFor="file__image" className="file__image" >
        <img src="src/assets/icon-image-file.svg" alt="icon__file-upload" />
      </label>
      <input type="file" placeholder="img" id="file__image"/>

      <div className="container__input">
      <label htmlFor="course__title">COURSE TITLE</label>
      <div className="container__title">
      <input {...register("firstName")} id='course__title' placeholder="name" />
      </div>
      </div>



      <div className="container__input">
      <label htmlFor="course__price">PRICE</label>
      <div className="container__price">
      <input {...register("price")} placeholder="price" id="course__price"/>
      </div>
      </div>



      <div className="container__input">
      <label htmlFor="course__description">DESCRIPTION</label>
      <div className="container__description">
      <input {...register("description")} placeholder="description" id="course__description" />
      </div>
      </div>

      <div className="container__buttons">
      <input type="submit" value="ADD" id="button__submit"/>
      <Link to="/" className="button__back" ><button className="button__back" >BACK</button></Link>
    </div>

      </div>
      
    </form>   
    <Footer />
    </>
  )
}

export default AddCourseForm;



