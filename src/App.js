import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from './Components/Home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Routes>
            <Route exact path="/" element ={<Home/>} />
          </Routes>
        </Router>
        
      </header>
    </div>
  );
}

export default App;
