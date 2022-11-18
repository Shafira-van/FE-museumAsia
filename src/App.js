import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import {Routes, Route} from "react-router-dom"
import Collection from './pages/Collection';
import Faq from './pages/Faq';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/collection' element={<Collection />} />
        <Route path='/faq' element={<Faq/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
