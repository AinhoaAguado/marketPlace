const editFunction = async (id,updatedData) => {fetch(`http://localhost:3000/courses/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatedData),
  })
    .then(response => {
      return response.json();
    })
  }


  export default editFunction;
