import React from 'react';
import getBrigades from "../hooks";
import Image from "../components/Image";

const Admin = () => {
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    dataSetter();
  }, [])

  const dataSetter = async () => {
    setData(await getBrigades());
  }

  return (
    <>
      <h1>Title</h1>
      {data.map((item) => {
        return (
          <div key={item.id} style={{ display: 'flex', alignItems: 'center' }}>
            <Image size={'img-sm'} src={item.img} alt={item.name} />
            <p>{item.name}</p>
          </div>
        )
      })}
    </>
  )
}

export default Admin;