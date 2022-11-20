import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import {Routes, Route} from "react-router-dom"
import Collection from './pages/Collection';
import Faq from './pages/Faq';
import InputData from './pages/InputData';
import Barang from './pages/Barang';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/collection' element={<Barang/>} >
          <Route index element={<Collection/>} />
          <Route path="inputdata" element={<InputData />} />
        </Route>
        <Route path='/faq' element={<Faq />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
