import './App.css';
import './resourses/styles/style.scss'
import CustomButton from "./components/Button";

function App() {
  return (
    <div className="App">
        Immerse yourself in the army life
        <CustomButton isYellow={true}>hui</CustomButton>
        <CustomButton isYellow={false}>hui</CustomButton>
    </div>
  );
}

export default App;
