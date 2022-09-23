// STYLING
import './App.css';

// COMPONENTS
import Header from "./components/Header.js"
import Board from "./components/Board.js"
import Footer from "./components/Footer.js"

function App() {
  return (
    <div className="App">
      <Header/>
      <Board/>
      <Footer/>
    </div>
  );
}

export default App;
