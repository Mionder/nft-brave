import './App.css';
import styleVars from './resourses/styles/style.scss'
import Typography from "./components/Typography";

function App() {

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
    </div>
  );
}

export default App;
