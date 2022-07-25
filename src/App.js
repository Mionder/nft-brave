import './App.css';
import './resourses/styles/style.scss'
import Typography from "./components/Typography";

function App() {
  return (
    <div className="App">
        Immerse yourself in the army life
        <Typography titleNum='h1'>h1</Typography>
        <Typography titleNum='h1' isYellow={true}>h1 yellow</Typography>
        <Typography titleNum='h2'>h2</Typography>
        <Typography titleNum='h2' h2Spec='collect'>h2 collect</Typography>
        <Typography titleNum='h2' h2Spec='immerse'>h2 immerse</Typography>
        <Typography titleNum='h3'>h3</Typography>
        <Typography titleNum='h3' isH3Card={true}>h3 card</Typography>
    </div>
  );
}

export default App;
