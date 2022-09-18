const getBrigades = async () => {
   return await fetch('http://localhost:3000/brigades')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    });
}

const getChevrons = async () => {
    return await fetch('http://localhost:3000/nft')
        .then((response) => {
            //console.log(1, response)
            return response.json()
        })
        .then((data) => {
            //console.log(2, data)
            return data
        })
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
  order: 1,
  affiliation: '',
  description: '',
  facebook: '',
  instagram: '',
  youtube: '',
}
const emptyObjectChevron = {
  id: Math.random(),
  description: '',
  editions: 1000,
  name: '',
  price: 30,
  video: '',
  brigadeId: '',
}

export { getBrigades, emptyObjectBrigade, getChevrons, emptyObjectChevron};