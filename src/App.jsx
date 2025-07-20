import { useState } from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import About from './pages/About';
import Blog from './pages/Blog';
import Ai from './pages/Ai';
import Contact from './pages/ContactUs';
import Home from './pages/Home';
import FitnessPlan from './pages/FitnessPlan';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import { Toaster } from 'react-hot-toast';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Toaster position="top-center" />
      <header className='sticky top-4 w-screen z-50'>
        <Header />
      </header>
      <main className="flex-grow">
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: "about",
          element: <About />
        },
        {
          path: "blog",
          element: <Blog />
        },
        {
          path: "ai",
          element: <Ai />
        },
        {
          path: "fitness-plan",
          element: <FitnessPlan />
        },
        {
          path: "contact",
          element: <Contact />
        }
      ]
    }
  ],
  {
    future: {
      v7_startTransition: true,
      v7_relativeSplatPath: true
    },
    basename: '/'
  }
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;