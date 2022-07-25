import './App.css';
import './resourses/styles/style.scss'
import Image from "./components/Image";

import imgMok from './resourses/moks/chevron-1.png'

function App() {

  return (
    <div className="App">
        Immerse yourself in the army life
        <Image src={imgMok} pictureComponent='drop' alt='drop-img'/>
        <Image src={imgMok} pictureComponent='buy' alt='buy-img'/>
        <Image src={imgMok} pictureComponent='rank' alt='rank-img'/>
        <Image src={imgMok} pictureComponent='control' alt='control-img'/>
    </div>
  );
}

export default App;
