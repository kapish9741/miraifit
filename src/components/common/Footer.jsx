import React from 'react';
import { Facebook, Twitter, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-black text-neutral-400 py-12 px-6 sm:px-12 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        <div>
          <h2 className="text-neutral-100 text-xl font-semibold">MiraiFit</h2>
          <p className="mt-2 text-sm">
            Transforming fitness journeys with AI-powered personalized workout and meal plans.
          </p>
          <div className="flex gap-4 mt-4 text-neutral-100">
            <Facebook className="w-5 h-5 hover:text-blue-500 cursor-pointer" />
            <Twitter className="w-5 h-5 hover:text-sky-400 cursor-pointer" />
            <Instagram className="w-5 h-5 hover:text-pink-400 cursor-pointer" />
          </div>
        </div>

        <div>
          <h3 className="text-neutral-100 font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm text-neutral-400">
            <li><Link to="/" className="hover:text-neutral-100">Home</Link></li>
            <li><Link to="/ai" className="hover:text-neutral-100">AI Assistant</Link></li>
            <li><Link to="/blog" className="hover:text-neutral-100">Blog</Link></li>
            <li><Link to="/about" className="hover:text-neutral-100">About</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-neutral-100 font-semibold mb-3">Legal</h3>
          <ul className="space-y-2 text-sm neutral-400">
            <li><Link to="/privacy" className="hover:text-neutral-100">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-neutral-100">Terms of Service</Link></li>
            <li><Link to="/cookies" className="hover:text-neutral-100">Cookie Policy</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-3">Subscribe</h3>
          <p className="text-sm mb-4">
            Stay updated with the latest fitness tips and features.
          </p>
          <div className="flex items-center gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 rounded-md bg-black border border-neutral-700 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-neutral-100 px-4 py-2 rounded-md text-sm cursor-pointer">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="border-t border-neutral-800 mt-12 pt-6 text-center text-sm text-neutral-500">
        © 2025 ApexFitness. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;