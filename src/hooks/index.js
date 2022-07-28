const getBrigades = async () => {
   return await fetch('http://localhost:3000/brigades')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    });
}

export default getBrigades;