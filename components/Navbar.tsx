"use client";

import { motion } from "motion/react";
import { Search, ShoppingCart, Menu, X, Rocket } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 bg-white shadow-sm z-50 px-4 sm:px-10 py-5">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-[#2563EB] rounded-xl flex items-center justify-center transform -rotate-6 shadow-lg shadow-blue-200">
             <div className="w-5 h-5 border-2 border-white flex items-center justify-center rounded-full">
               <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
             </div>
          </div>
          <Link href="/" className="font-display text-2xl font-black tracking-tighter text-[#2563EB]">
            STEM<span className="text-[#F97316]">PLAY</span>
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8 font-semibold text-sm">
          <Link href="#categories" className="hover:text-[#2563EB] transition-colors">Categories</Link>
          <Link href="#best-sellers" className="hover:text-[#2563EB] transition-colors">Best Sellers</Link>
          <Link href="#ages" className="hover:text-[#2563EB] transition-colors">Shop by Age</Link>
        </div>
        
        <div className="hidden md:flex items-center space-x-5">
          <div className="relative flex items-center px-4 py-2 bg-slate-50 border border-slate-200 rounded-full">
            <Search className="h-4 w-4 text-slate-400 mr-2" />
            <input type="text" placeholder="Find a toy..." className="bg-transparent outline-none text-xs w-28 text-slate-700" />
          </div>
          <button className="relative bg-white border-2 border-[#2563EB] p-2 rounded-full text-[#2563EB]">
            <ShoppingCart className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 bg-[#F97316] text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full font-bold shadow-md">3</span>
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center gap-4">
          <button className="p-2 text-[#2563EB] relative border-2 border-[#2563EB] rounded-full">
            <ShoppingCart className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 bg-[#F97316] text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full font-bold shadow-md">3</span>
          </button>
          <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-slate-700">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }} 
          animate={{ opacity: 1, y: 0 }} 
          exit={{ opacity: 0, y: -10 }} 
          className="md:hidden border-t border-gray-100 bg-white"
        >
          <div className="px-4 pt-2 pb-6 space-y-1">
            <Link href="#categories" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-base font-medium text-gray-800 hover:bg-gray-50 rounded-lg">Categories</Link>
            <Link href="#best-sellers" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-base font-medium text-gray-800 hover:bg-gray-50 rounded-lg">Best Sellers</Link>
            <Link href="#ages" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-base font-medium text-gray-800 hover:bg-gray-50 rounded-lg">Shop by Age</Link>
            <div className="px-3 py-3 relative">
              <Search className="h-5 w-5 absolute left-6 top-6 text-gray-400" />
              <input type="text" placeholder="Search toys..." className="w-full bg-gray-100 rounded-full py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
