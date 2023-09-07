const postFunction = async (data) => {
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

export default postFunction;