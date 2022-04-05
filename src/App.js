import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Reviews from './components/Reviews/Reviews';
import Analytics from './components/Analytics/Analytics';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reviews" element={<Reviews isAll={true} />} />
        <Route path="/analytics" element={<Analytics />} />
      </Routes>
      <Footer></Footer>
    </div >
  );
}

export default App;
