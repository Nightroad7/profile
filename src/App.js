import './App.css';
import Header from './components/header/index';
import Main from './components/main/index';
function App() {
  return (
    <div className="App">
      <Header styles={styles.header} />
      <Main styles={styles.main} />
      <div style={{ backgroundColor: '#000', height: '5vh', bottom: '0', position: 'absolute', width: '100%', display: 'flex', justifyContent: 'space-between' }} >
        <p style={{ color: 'white', paddingLeft: '25px' }} >Universidad Mariano Gálvez de Guatemala</p>
        <p style={{ color: 'white', paddingRight: '25px' }} >2020</p>
      </div>
    </div>
  );
}

const styles = {
  header: {
    height: '10vh',
    backgroundColor: 'red'
  },
  main: {
    height: '90vh'
  }
}

export default App;
