import {
  Link,
  Routes,
  Route,
} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Home from './routes/Home';
import Trendings from './routes/Trendings';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <Link to="/">Home</Link> |{" "}
          <Link to="/trendings">Trendings</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="trendings" element={<Trendings />} />
      </Routes>
    </div>
  );
}

export default App;
