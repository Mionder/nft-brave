import './App.css';
import './resourses/styles/style.scss'
import Image from "./components/Image";

import imgMock from './resourses/mocks/chevron-1.png'

function App() {

  return (
    <div className="App">
        Immerse yourself in the army life
        <Image src={imgMock} size='img-sm' alt='control-img'/>
        <Image src={imgMock} size='img-md' alt='rank-img'/>
        <Image src={imgMock} size='img-lg' alt='drop-img'/>
        <Image src={imgMock} size='img-xl' alt='buy-img'/>
    </div>
  );
}

export default App;
