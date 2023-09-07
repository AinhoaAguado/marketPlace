import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './home.css';
import "./modalStyle.css"

function Home() {
  const [courses, setCourses] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [coursesChoose, setCoursesChoosen] = useState(null);
  const [nuevoTitulo, setNuevoTitulo] = useState('');
  const [nuevaDescripcion, setNuevaDescripcion] = useState('');
  const [nuevoPrecio, setNuevoPrecio] = useState('');
  const [nuevaImagen, setNuevaImagen] = useState('');

  useEffect(() => {
    fetch("http://localhost:3000/courses")
      .then(res => res.json())
      .then(data => setCourses(data))
  }, []);

  
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


  const handleEditarClick = (curso) => {
    setCoursesChoosen(curso);
    setNuevoTitulo(curso.title);
    setNuevaDescripcion(curso.description);
    setNuevoPrecio(curso.price);
    setNuevaImagen(curso.imag);
    setModalVisible(true);
  };

  const handleGuardarClick = () => {
    if (coursesChoose) {
      const productoActualizado = {
        ...coursesChoose,
        title: nuevoTitulo,
        description: nuevaDescripcion,
        price: parseFloat(nuevoPrecio),
        img: imageData,
      };


      fetch(`http://localhost:3000/courses/${coursesChoose.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(productoActualizado),
      })
        .then(response => {
          return response.json();
        })
        .then(data => {
          const newCourses = courses.map(course => {
            if (course.id === coursesChoose.id) {
              return productoActualizado;
            }
            return course;
          });
          setCourses(newCourses);
          setModalVisible(false);
        })
        .catch(error => {
          console.error('Error:', error);
        });
    }
  };

  return (
    <main>
      <h1 className='user-name'>BIENVENIDO<span className='text-orange'> SERGIO</span></h1>
      <Link to="AddForm"><button className='button__add-course'>Add Course</button></Link>
      <ul className='card__container'>
        {courses.map(curso => (
          <li key={curso.id} className='card'>
            <div className='imgContainer'>
              <img src={`data:image/png;base64,${curso.img}`} className="card__image" alt="Course img" />
            </div>
            <div className='card__texts'>
              <div className='card__title'>
                {curso.title}
              </div>
              <div className='card__price'>
                {curso.price}€
              </div>
              <div className='card__subtitle'>
                {curso.subtitle}
              </div>
              <div className='card__description'>
                {curso.description}
              </div>
              <button className='button__edit' onClick={() => handleEditarClick(curso)}>Edit</button>
              <button className='button__post'>Post</button>
            </div>
          </li>
        ))}
      </ul>


  {modalVisible && (
  <div className="modal__container">
    <div className='modal__background'>
      <h2 className='modal__text'>Edit Product</h2>
      <label htmlFor="file__image" className='file__image'>
      { !imagePreview && <img src="src/assets/icon-image-file.svg" alt="icon__file-upload" /> }
        {imagePreview && <img src={imagePreview} alt="Preview" className= "file__imagePreview" />}
      </label>
      <input id='file__image' type="file" placeholder='img' onChange={handleImageChange} />
      <div className='container__input'>
        <label htmlFor="course__title">Course Title</label>
          <div className=''>
            <input id='input__title' type="text" placeholder={nuevoTitulo}  onChange={(e) => setNuevoTitulo(e.target.value)} />
          </div>
      </div>
    <div className='container__input'>
      <label htmlFor="course__price">Price</label>
      <input 
      className='input__price'
        type="number"
        placeholder={nuevoPrecio}
        onChange={(e) => setNuevoPrecio(e.target.value)}
      />
    </div>
    <div className='container__input'>
      <label htmlFor="course__description">Description</label>
      <input className='input__description'
        type="text"
        placeholder={nuevaDescripcion}
        onChange={(e) => setNuevaDescripcion(e.target.value)}
      />
    </div>
    <div className='container__buttons'>
      <button id='button__submit' onClick={handleGuardarClick}>Guardar</button>
      <button id='button__back' onClick={() => setModalVisible(false)}>Cancelar</button>
    </div>
    </div>
  </div>
)}
  </main>

)}

export default Home;
