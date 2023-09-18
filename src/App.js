import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import About from './component/About';
import List from './component/List';
import LibraryHeader from './component/LibraryHeader';
import InsideHostel from './component/InsideHostel';
import { Navbar } from 'react-bootstrap';
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/library' element={<LibraryHeader />} />
        <Route path='/list/:city' element={<List />} />
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/insideHostel/:name/:address' element={<InsideHostel />} />
      </Routes>
    </div>
  );
}

export default App;
