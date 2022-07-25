import './App.css';
import './resourses/styles/style.scss'
import Link from "./components/Link";

function App() {
  return (
    <div className="App">
        Immerse yourself in the army life
        <Link href='#' isLikeBtn={false}>OpenSea</Link>
        <Link href='#' isLikeBtn={true}>Sign in</Link>
    </div>
  );
}

export default App;
