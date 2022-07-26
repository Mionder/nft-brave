import './App.css';
import './resourses/styles/style.scss'
import Button from "./components/Button";

function App() {
  return (
    <div className="App">
        Immerse yourself in the army life
        <Button isYellow={true}>hui</Button>
        <Button isYellow={false}>hui</Button>
    </div>
  );
}

export default App;
