import Nav from "./components/Nav";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from "./pages/Home";
import Selection from "./pages/Selection"
import Movie from "./pages/Movie"
import { search } from "https://www.omdbapi.com/?apikey=c24b97b7&s=fast"


function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
      
      <Route path="/" element={<Home />} />
      <Route path="/movies" element={<Selection />} />
      <Route path="/movie" element={<Movie movie={search} />} />
    
      </Routes>
    </div>
    
    </Router>
    
  );
}

export default App;
