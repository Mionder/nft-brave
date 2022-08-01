const getBrigades = async () => {
   return await fetch('http://localhost:3000/brigades')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    });
}

const emptyObjectBrigade = {
  id: Math.random(),
  name: '',
  year: 1900,
  kindOfTroops: '',
  typeOfTroops: '',
  awards: '',
  motto: '',
  trophies: '',
  protector: '',
  pet: '',
  videoLink: '',
  img: '',
}

export { getBrigades, emptyObjectBrigade };