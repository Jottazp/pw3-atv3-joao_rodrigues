import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Create from './components/Creating';
import Getting from './components/Getting';
import Update from './components/Updating';
import Delete from './components/Deleting';
import Listing from './components/Listing';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/create" element={<Create />} />
          <Route path="/get" element={<Getting />} />
          <Route path="/update" element={<Update />} />
          <Route path="/delete" element={<Delete />} />
          <Route path="/" element={<Listing />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
