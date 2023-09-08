import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Nav from "../navBar/Nav";
import Footer from "../Footer/Footer";
import React, { useState } from 'react';
import postFunction from "../../Atoms/services/postFunction";
import './addCourseForm.css'


const AddCourseForm = () => {
   
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [imageData, setImageData] = useState('');
    const [imagePreview, setImagePreview] = useState(null);

    const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      const base64Data = reader.result.split(',')[1];
      setImageData(base64Data);
      setImagePreview(reader.result);
     
    };
    if (file) {
      reader.readAsDataURL(file);
      
    }
  };

  

  const onSubmit = async (data) => {
    if(data){
    data = {
      img: imageData,
      title: data.firstName,
      description: data.description,
      price: data.price
    }}
    try{
      await postFunction(data)
      window.location.href = "/";
    } catch (error) {
      console.error('Error al actualizar el curso:', error);
    }}


  return (
    <>
    <Nav />
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <div className="all">

      <h1>FORM</h1>

      <label htmlFor="file__image" className="file__image" >
      { !imagePreview && <img src="src/assets/icon-image-file.svg" alt="icon__file-upload" /> }
        {imagePreview && <img src={imagePreview} alt="Preview" className= "file__imagePreview" />}
      </label>
      <input type="file" placeholder="img" id="file__image" onChange={handleImageChange} />

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
      <input type="submit" value="ADD" id="button__submit" onClick={<Link to="/"></Link>}/>
      <Link to="/" className="button__back" ><button className="button__back" >BACK</button></Link>
    </div>

      </div>
      
    </form>   
    <Footer />
    </>
  )
}

export default AddCourseForm;



