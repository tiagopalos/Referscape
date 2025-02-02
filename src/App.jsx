// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import SearchResults from './Pages/SearchResults';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* Define all routes here */}
        <Route path="/" element={<Home />} />
        <Route path="/search-results" element={<SearchResults />} /> {/* Updated path */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;