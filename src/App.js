import Nav from "./components/Nav";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from "./pages/Home";
import Selection from "./pages/Selection"
import Movie from "./pages/Movie"

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
      
      <Route path="/" element={<Home />} />
      <Route path="/movies" element={<Selection />} />
      <Route path="/movie" element={<Movie />} />
    
      </Routes>
    </div>
    
    </Router>
    
  );
}

export default App;
