import React, { useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext.jsx';
import { Link } from 'react-router-dom';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react'

const Header = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <nav className="sticky z-50 w-full max-w-5xl h-16 px-6 md:px-20 mx-auto backdrop-blur-md bg-black/20 rounded-full border border-white/20 flex items-center justify-between shadow-lg">
      <h1 className="text-2xl font-bold bg-gradient-to-br from-neutral-500 via-neutral-200 to-neutral-950 bg-clip-text text-transparent hover:from-neutral-200 hover:via-neutral-500 hover:to-neutral-950 transition-colors cursor-pointer">
        <Link to="/"><img src="miraifit.png" alt="MiraiFit" className='h-8' /></Link>
      </h1>

      <ul className="hidden md:flex gap-6 font-medium text-neutral-400">
        <li><Link to="/ai" className="hover:text-white transition-colors">Ai</Link></li>
        <li><Link to="/about" className="hover:text-white transition-colors">About</Link></li>
        <li><Link to="/blog" className="hover:text-white transition-colors">Blog</Link></li>
        <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
      </ul>

      <div className="flex items-center gap-4">
        <SignedOut>
          <SignInButton className="px-4 py-2 rounded-lg border-2 border-neutral-200 text-neutral-200 font-medium hover:opacity-80 transition-opacity cursor-pointer" />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>

        <button
          onClick={toggleTheme}
          className="p-2 rounded-full bg-black/20 hover:bg-black/30 text-neutral-100 transition-colors cursor-pointer"
        >
          {isDarkMode ? <Moon size={20} /> : <Sun size={20} />}
        </button>
      </div>
    </nav>
  );
};

export default Header;