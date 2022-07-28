import './App.css';
import Typography from "./components/Typography";
import './resourses/styles/style.scss'
import getBrigades from "./hooks";
import Button from "./components/Button";
import React from "react";

const App = () => {
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    dataSetter();
  }, [])

  const dataSetter = async () => {
    setData(await getBrigades());
  }


  return (
    <div className="App">
        Immerse yourself in the army life
        <Typography titleNum='h1'>h1</Typography>
        <Typography titleNum='h1' >h1 <span>yellow</span></Typography>
        <Typography titleNum='h2' >h2</Typography>
        <Typography titleNum='h3' color='secondary'><span>h3</span> immerse</Typography>
        <Typography titleNum='h3' color='primary'>h3</Typography>
        <Typography titleNum='h3' color='primary'> h3</Typography>
        <Typography titleNum='h4' >h4</Typography>
        <Button isYellow={true}>hui</Button>
        <Button isYellow={false}>hui</Button>

      {data.map((item) => {
        return (
          <p style={{color: '#fff'}}>{item.name}</p>
        )
      })}
    </div>
  );
}

export default App;
