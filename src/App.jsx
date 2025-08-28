import { BrowserRouter, HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Layout from './Components/Layout';
import Portfolio from './Components/Portfolio/Portfolio';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<Layout><Home /></Layout>} />
        <Route path="portfolio" element={<Layout><Portfolio /></Layout>} />
        <Route path="about" element={<Layout><About /></Layout>} />
        <Route path="contact" element={<Layout><Contact /></Layout>} />
      </Routes>
    </BrowserRouter>
  ); 
}

export default App;
