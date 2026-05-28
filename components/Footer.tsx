import { Rocket, Heart } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-[#2563EB] rounded-xl flex items-center justify-center transform -rotate-6 shadow-lg shadow-blue-900/50">
                 <div className="w-5 h-5 border-2 border-white flex items-center justify-center rounded-full">
                   <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                 </div>
              </div>
              <span className="font-display font-black text-2xl tracking-tighter text-[#2563EB]">
                STEM<span className="text-[#F97316]">PLAY</span>
              </span>
            </div>
            <p className="text-sm mb-6 leading-relaxed text-slate-500 font-medium">
              Empowering the next generation of innovators with playful, educational electronics and STEM kits.
            </p>
            <div className="flex space-x-4">
             {/*<a href="#" className="h-10 w-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 hover:bg-[#2563EB] hover:text-white transition-colors"><Facebook className="h-4 w-4" /></a>
              <a href="#" className="h-10 w-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 hover:bg-[#F97316] hover:text-white transition-colors"><Instagram className="h-4 w-4" /></a>
              <a href="#" className="h-10 w-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 hover:bg-[#2563EB] hover:text-white transition-colors"><Youtube className="h-4 w-4" /></a>
            */}</div>
          </div>

          <div>
            <h3 className="font-display font-black text-white mb-6 uppercase tracking-widest text-xs">Shop</h3>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="#" className="hover:text-white transition-colors">All Toys</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Coding Robots</a></li>
              <li><a href="#" className="hover:text-white transition-colors">STEM Kits</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Toddler Gadgets</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-display font-black text-white mb-6 uppercase tracking-widest text-xs">Support</h3>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Track Order</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-display font-black text-white mb-6 uppercase tracking-widest text-xs">About Us</h3>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="#" className="hover:text-white transition-colors">Our Story</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Educational Board</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
            </ul>
          </div>

        </div>
        <div className="mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase font-bold tracking-widest text-slate-500">
          <p>© 2026 STEM PLAY TOYS.</p>
          <div className="flex space-x-1">
            <div className="w-1.5 h-1.5 bg-[#F97316] rounded-full"></div>
            <div className="w-1.5 h-1.5 bg-[#F97316] rounded-full"></div>
            <div className="w-1.5 h-1.5 bg-[#F97316] rounded-full"></div>
            <div className="w-1.5 h-1.5 bg-[#F97316] rounded-full opacity-50"></div>
          </div>
        </div>
      </div>
    </footer>
  );
}
