import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Header/Home/Home';
import Reviews from './components/Reviews/Reviews';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reviews" element={<Reviews isAll={true} />} />
      </Routes>
    </div>
  );
}

export default App;
