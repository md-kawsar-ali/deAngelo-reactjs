import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Reviews from './components/Reviews/Reviews';
import Analytics from './components/Analytics/Analytics';
import Blog from './components/Blog/Blog';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reviews" element={<Reviews isAll={true} />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="*" element={<div className='py-60 px-20 text-center'><h2 className='text-4xl font-bold text-slate-800 text-center'>Not Found! 404</h2></div>} />
      </Routes>
      <Footer></Footer>
    </div >
  );
}

export default App;
