import './App.css';
import './resourses/styles/style.scss'
import Link from "./components/Link";

function App() {
  return (
    <div className="App">
        Immerse yourself in the army life
        <Link href='#' isBtn={false}>OpenSea</Link>
        <Link href='#' isBtn={true}>Sign in</Link>
    </div>
  );
}

export default App;
