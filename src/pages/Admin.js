import React from 'react';
import getBrigades from "../hooks";
import Image from "../components/Image";
import CardList from "../components/CardList";
import Typography from "../components/Typography";

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

      <div style={{marginBottom: 80}}>
        <Typography titleNum='h3' color='primary'> <span>1</span> DROP </Typography>
        <CardList data={data}/>
      </div>


      {data.map((item) => {
        return (
          <div key={item.id} style={{ display: 'flex', alignItems: 'center' }}>
            <Image size={'img-sm'} src={item.img} alt={item.name} />
            <p style={{color: 'red'}}>{item.name}</p>
          </div>
        )
      })}
    </>
  )
}

export default Admin;