import './App.css';
import styleVars from './resourses/styles/style.scss'
import Typography from "./components/Typography";
import './resourses/styles/style.scss'
import Image from "./components/Image";
import imgMock from './resourses/mocks/chevron-1.png'
import Button from "./components/Button";


function App() {

  return (
    <div className="App">
        Immerse yourself in the army life
        <Image src={imgMock} size='img-sm' alt='control-img'/>
        <Image src={imgMock} size='img-md' alt='rank-img'/>
        <Image src={imgMock} size='img-lg' alt='drop-img'/>
        <Image src={imgMock} size='img-xl' alt='buy-img'/>
        <Typography titleNum='h1'>h1</Typography>
        <Typography titleNum='h1' >h1 <span>yellow</span></Typography>
        <Typography titleNum='h2' >h2</Typography>
        <Typography titleNum='h3' color='secondary'><span>h3</span> immerse</Typography>
        <Typography titleNum='h3' color='primary'>h3</Typography>
        <Typography titleNum='h3' color='primary'> h3</Typography>
        <Typography titleNum='h4' >h4</Typography>
        <Button isYellow={true}>hui</Button>
        <Button isYellow={false}>hui</Button>
    </div>
  );
}

export default App;
