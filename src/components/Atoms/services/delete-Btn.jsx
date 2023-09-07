const deleteFunction = async (id) => {
    fetch(`http://localhost:3000/courses/${id}`, {
  method: 'DELETE',
})
  .then(response => {
    return response.json(); // O puedes usar response.text() si la respuesta no es JSON
  })
}


export default deleteFunction;