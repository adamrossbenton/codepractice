// STYLING
import './App.css';

// COMPONENTS
import Header from "./components/Header.js"
import Gameboard from "./components/Gameboard.js"
import Scoreboard from "./components/Scoreboard.js"
import Footer from "./components/Footer.js"

// STATE/HOOKS
import PlayerHooks from "./hooks/playerHooks.js"

function App() {
  const {playTest, checkWin} = PlayerHooks()
  
  return (
    <div className="App">
      <Header/>
      <Gameboard/>
      <Scoreboard/>
      <Footer/>
    </div>
  );
}

export default App;
