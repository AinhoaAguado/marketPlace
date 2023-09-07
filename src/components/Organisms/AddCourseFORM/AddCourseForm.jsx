import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Nav from "../navBar/Nav";
import Footer from "../Footer/Footer";
import Button from "../../Atoms/Button";
import React, { useState } from 'react';


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

  

  const onSubmit = (data) => {

    data = {
      img: imageData,
      title: data.firstName,
      description: data.description,
      price: data.price
    }

    fetch('http://localhost:3000/courses', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify( data ),
    })
      .then((response) => response.json())
      .catch((error) => {
        console.error('Error al subir la imagen:', error);
      });
    }

  return (
    <>
    <Nav />
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <input {...register("firstName")} placeholder="name" />
      <input {...register("description")} placeholder="description" />
      <input {...register("price")} type = "number" placeholder="price" />
      <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}/>
    
    <Link to="/"> <input type="submit" /></Link>
    </form>   

    <Link to="/"><Button text="Back" style="btn btnBlue" /></Link>
    <Footer />
    </>
  )
}

export default AddCourseForm;



