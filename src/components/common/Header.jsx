import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react'

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="sticky z-50 w-full max-w-5xl h-16 px-4 sm:px-6 md:px-20 mx-auto backdrop-blur-md bg-black/20 rounded-full border border-white/20 flex items-center justify-between shadow-lg">
      <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-br from-neutral-500 via-neutral-200 to-neutral-950 bg-clip-text text-transparent hover:from-neutral-200 hover:via-neutral-500 hover:to-neutral-950 transition-colors cursor-pointer">
        <Link to="/"><img src="miraifit.png" alt="MiraiFit" className='h-6 sm:h-8' /></Link>
      </h1>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex gap-6 font-medium text-neutral-400">
        <li><Link to="/ai" className="hover:text-white transition-colors">Ai</Link></li>
        <li><Link to="/about" className="hover:text-white transition-colors">About</Link></li>
        <li><Link to="/blog" className="hover:text-white transition-colors">Blog</Link></li>
        <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
      </ul>

      <div className="flex items-center gap-2 sm:gap-4">
        <SignedOut>
          <SignInButton className="hidden sm:block font-medium hover:opacity-80 transition-opacity cursor-pointer text-sm py-2 px-4 border-[1px] border-blue-500 rounded-full bg-gradient-to-b from-blue-800 via-blue-600 to-blue-500 text-neutral-100" />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden p-2 rounded-full bg-black/20 hover:bg-black/30 text-neutral-100 transition-colors cursor-pointer"
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-black/95 backdrop-blur-md rounded-2xl border border-white/20 shadow-xl md:hidden">
          <div className="p-4 space-y-4">
            <ul className="space-y-3 font-medium text-neutral-400">
              <li><Link to="/ai" className="block hover:text-white transition-colors py-2" onClick={toggleMobileMenu}>Ai</Link></li>
              <li><Link to="/about" className="block hover:text-white transition-colors py-2" onClick={toggleMobileMenu}>About</Link></li>
              <li><Link to="/blog" className="block hover:text-white transition-colors py-2" onClick={toggleMobileMenu}>Blog</Link></li>
              <li><Link to="/contact" className="block hover:text-white transition-colors py-2" onClick={toggleMobileMenu}>Contact</Link></li>
            </ul>
            <div className="pt-4 border-t border-white/20">
              <SignedOut>
                <SignInButton className="w-full font-medium hover:opacity-80 transition-opacity cursor-pointer text-sm py-3 px-4 border-[1px] border-blue-500 rounded-full bg-gradient-to-b from-blue-800 via-blue-600 to-blue-500 text-neutral-100" />
              </SignedOut>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;