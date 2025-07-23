import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import ScrollToTop from "./hooks/ScrollToTop";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Ai from "./pages/Ai";
import Contact from "./pages/ContactUs";
import FitnessPlan from "./pages/FitnessPlan";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Toaster position="top-center" />
      <div className="flex flex-col min-h-screen relative">
        <header className="sticky top-4 w-screen z-50">
          <Header />
        </header>
        <main className="flex-grow relative">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/ai" element={<Ai />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/fitness-plan" element={<FitnessPlan />} />
          </Routes>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </Router>
  );
}

export default App;
