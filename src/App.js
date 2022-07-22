import './App.css';
import CustomButton from "./components/Button";
import Link from "./components/Link";

function App() {
    const styles = {
        container: {
            'display': 'flex',
            'alignItems': 'center',
            'marginBottom': 20,
        },
    }
  return (
    <div className="App">
        <div style={styles.container}>
            Immerse yourself in the army life
        </div>

        <div style={styles.container}>
            <CustomButton height={400}>hui</CustomButton>
            <CustomButton height={450}>hui</CustomButton>
        </div>

        <div style={styles.container}>
            <Link href='#' likeBtn={true}>like btn</Link>
            <Link href='#' >link simple</Link>
        </div>


    </div>
  );
}

export default App;
