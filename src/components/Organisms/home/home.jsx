import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './home.css';

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
            <div>
              <img src={`data:image/png;base64,${curso.img}`} className="card__image" alt="aqui van imagenes" />
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
        <div className="modal">
          <h2>Editar Producto</h2>
          <input
            type="text"
            value={nuevoTitulo}
            placeholder={nuevoTitulo}
            onChange={(e) => setNuevoTitulo(e.target.value)}
          />
          <input
            type="text"
            value={nuevaDescripcion}
            placeholder={nuevaDescripcion}
            onChange={(e) => setNuevaDescripcion(e.target.value)}
          />
          <input
            type="number"
            value={nuevoPrecio}
            placeholder={nuevoPrecio}
            onChange={(e) => setNuevoPrecio(e.target.value)}
          />
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}/>

          <button onClick={handleGuardarClick}>Guardar</button>
          <button onClick={() => setModalVisible(false)}>Cancelar</button>
        </div>
      )}
    </main>
  );
}

export default Home;
