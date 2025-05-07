import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Blog from './pages/Blog';
import Ai from './pages/Ai';
import Contact from './pages/ContactUs';
import Home from './pages/Home';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import { Toaster } from 'react-hot-toast';


function App() {

  return (
    <BrowserRouter>
     <Toaster position="top-center" />
    <header className='sticky top-4 w-screen z-50'><Header /></header>
      
      <div className="flex flex-col min-h-screen">
        <main className="">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/ai" element={<Ai />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <footer><Footer /></footer>
      </div>
    </BrowserRouter>
  );
}

export default App;