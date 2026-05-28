"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Star, Cpu, Zap, Beaker, Brain, Sparkles, ChevronRight, PlayCircle, ShieldCheck, Mail, CheckCircle2, ShoppingCart, Rocket } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

const CATEGORIES = [
  { name: "Coding Robots", icon: Cpu, color: "bg-blue-100 text-blue-600" },
  { name: "Science Labs", icon: Beaker, color: "bg-orange-100 text-orange-500" },
  { name: "Smart Circuits", icon: Zap, color: "bg-amber-100 text-amber-500" },
  { name: "Brain Games", icon: Brain, color: "bg-purple-100 text-purple-600" },
];

const BEST_SELLERS = [
  { id: 1, name: "RoboBuddy Pro", price: 89.99, rating: 4.9, reviews: 124, age: "6-8", image: "https://picsum.photos/seed/robo/400/400", badge: "New" },
  { id: 2, name: "Circuit Master Kit", price: 49.99, rating: 4.8, reviews: 89, age: "9-12+", image: "https://picsum.photos/seed/circuit/400/400" },
  { id: 3, name: "AlphaBot Toddler", price: 34.99, rating: 4.7, reviews: 201, age: "3-5", image: "https://picsum.photos/seed/alpha/400/400", badge: "Best Seller" },
  { id: 4, name: "Chemistry Lab AR", price: 59.99, rating: 4.9, reviews: 67, age: "9-12+", image: "https://picsum.photos/seed/chem/400/400" },
];

const TESTIMONIALS = [
  { name: "Sarah M.", text: "My 7-year-old hasn't stopped playing with the RoboBuddy since Christmas. It's amazing to see her learning to code without even realizing it!", role: "Parent of 2" },
  { name: "David T.", text: "The quality of these kits is unmatched. As an engineer myself, I'm highly impressed by how they simplify complex concepts for kids.", role: "Software Engineer" },
  { name: "Emily R.", text: "Customer service is top-notch and the toys are incredibly durable. Truly the best STEM store on the internet.", role: "Teacher" },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FDFCFB]">
      <Navbar />

      <main className="flex-grow">
        {/* --- HERO SECTION --- */}
        <section className="relative mx-4 sm:mx-6 mt-4 pt-12 pb-20 md:pt-16 md:pb-16 overflow-hidden rounded-[3rem] bg-[#2563EB] shadow-2xl">
          {/* Background Decorative Gradients */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-[#8B5E3C] to-[#C89B6D] opacity-20 rounded-full blur-[100px] transform translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-[-100px] left-[-100px] w-80 h-80 bg-orange-400/20 rounded-full blur-[80px]" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-2xl px-4 sm:pl-10"
              >
                <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full w-fit mb-4 border border-white/20">
                  <span className="flex h-2 w-2 rounded-full bg-[#F97316]"></span>
                  <span className="text-white text-[10px] uppercase font-bold tracking-widest">The future of learning is here</span>
                </div>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[0.9] tracking-tight mb-4">
                  LEARN THROUGH <br/>
                  <span className="text-orange-300">PLAY.</span>
                </h1>
                <p className="text-blue-100 text-lg leading-relaxed mb-8 max-w-sm font-medium">
                  Discover our premium collection of educational electronic toys, coding robots, and STEM kits designed to spark imagination and build future-ready skills.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="px-8 py-4 bg-[#F97316] text-white font-black rounded-2xl shadow-xl shadow-orange-900/20 hover:scale-105 transition-transform flex items-center justify-center gap-2">
                    Shop the Collection
                    <ArrowRight className="h-5 w-5" />
                  </button>
                  <button className="px-8 py-4 bg-white/10 backdrop-blur-md border-2 border-white/30 text-white font-black rounded-2xl flex items-center justify-center gap-2 hover:bg-white/20 transition-colors">
                    <PlayCircle className="h-5 w-5" />
                    How it Works
                  </button>
                </div>
                
                <div className="mt-10 flex items-center gap-4 text-sm text-blue-100 font-medium">
                  <div className="flex -space-x-2">
                    {[1,2,3,4].map(i => (
                      <div key={i} className="w-8 h-8 rounded-full border-2 border-[#2563EB] bg-gray-200 overflow-hidden relative">
                        {/* <Image src={`https://picsum.photos/seed/user${i}/100/100`} fill alt="User" className="object-cover" /> */}
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center text-orange-300">
                      {[1,2,3,4,5].map(i => <Star key={i} className="h-4 w-4 fill-current" />)}
                    </div>
                    <span>Loved by 10,000+ parents</span>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative lg:h-[500px] flex justify-center items-center"
              >
                {/* Abstract shape background styled to match the editorial reference */}
                <div className="relative w-72 h-72 sm:w-96 sm:h-96">
                  <div className="absolute inset-0 bg-white/10 rounded-[3rem] rotate-12"></div>
                  <div className="absolute inset-0 bg-white/20 rounded-[3rem] -rotate-6"></div>
                  <div className="absolute inset-0 bg-white rounded-[3rem] flex items-center justify-center overflow-hidden shadow-2xl">
                    {/* <Image src="https://picsum.photos/seed/hero-toy/800/1000" alt="Robotic Toy" fill className="object-cover opacity-80 mix-blend-multiply" /> */}
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-50/80 to-blue-50/80 flex flex-col items-center justify-center text-center p-8">
                      <div className="text-6xl mb-4">🤖</div>
                      <div className="text-[#2563EB] font-black text-2xl mb-1">ROBO-CODER X1</div>
                      <p className="text-slate-500 text-xs font-semibold">DIY ENGINEERING KIT</p>
                    </div>
                  </div>
                  {/* Decorative elements */}
                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-[#F97316] rounded-full flex items-center justify-center text-white font-bold rotate-12 shadow-lg">+8yr</div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* --- CATEGORIES --- */}
        <section id="categories" className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-black tracking-tight text-slate-800 mb-8">Shop <span className="text-[#F97316]">Categories.</span></h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {CATEGORIES.map((cat, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="group cursor-pointer bg-white rounded-[2rem] p-6 text-center border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-blue-900/5 transition-all flex flex-col items-center"
                >
                  <div className={`w-16 h-16 mx-auto rounded-3xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110 ${cat.color}`}>
                    <cat.icon className="h-8 w-8" />
                  </div>
                  <h3 className="font-display font-black text-slate-800 group-hover:text-[#2563EB] transition-colors">{cat.name}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* --- BEST SELLERS --- */}
        <section id="best-sellers" className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-black tracking-tight text-slate-800">Top Sellers <span className="text-[#F97316]">Now.</span></h2>
              <div className="flex space-x-2">
                <button className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400">←</button>
                <button className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-[#2563EB] shadow-md shadow-blue-100 font-bold">→</button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {BEST_SELLERS.map((product, idx) => (
                <motion.div 
                  key={product.id}
                  whileHover={{ y: -5 }}
                  className={`bg-white rounded-[2.5rem] p-5 border ${idx === 2 ? 'border-2 border-[#F97316] shadow-xl shadow-orange-100' : 'border-slate-100 shadow-sm'} flex flex-col group relative`}
                >
                  {product.badge && (
                    <div className="absolute top-4 right-4 bg-[#F97316] text-white text-[10px] font-black px-2 py-1 rounded-full uppercase tracking-wider z-10">
                      {product.badge}
                    </div>
                  )}
                  <div className="aspect-square bg-slate-50 rounded-3xl mb-4 relative overflow-hidden">
                    {/* <Image src={product.image} alt={product.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" /> */}
                  </div>
                  <h4 className="font-black text-slate-800 leading-tight mb-1 truncate w-full">{product.name}</h4>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter mb-4">Ages {product.age}</p>
                  
                  <div className="mt-auto flex items-center justify-between">
                    <span className="text-xl font-black text-[#2563EB]">${product.price}</span>
                    <button className={`w-10 h-10 ${idx === 2 ? 'bg-[#F97316] shadow-orange-200' : 'bg-[#2563EB] shadow-blue-200'} text-white rounded-xl flex items-center justify-center shadow-lg font-bold text-lg`}>+</button>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="mt-8 text-center sm:hidden">
               <button className="bg-slate-100 text-slate-800 font-bold text-sm px-6 py-3 rounded-xl w-full hover:bg-slate-200">VIEW ALL PRODUCTS</button>
            </div>
          </div>
        </section>

        {/* --- EDUCATIONAL BENEFITS (Bento Grid) --- */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-display font-black mb-6 tracking-tight text-slate-800 uppercase">Engineered for <span className="text-[#2563EB]">Growth.</span></h2>
              <p className="text-slate-500 text-lg max-w-2xl mx-auto font-medium">We meticulously select and design products that foster critical thinking, creativity, and foundational STEM skills.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2 bg-[#2563EB] text-white rounded-[2.5rem] p-8 overflow-hidden relative shadow-2xl">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400/30 rounded-full blur-3xl -mr-10 -mt-10"></div>
                <Brain className="h-12 w-12 text-blue-200 mb-6 relative z-10" />
                <h3 className="text-2xl font-black mb-3 relative z-10 tracking-tight">Cognitive Development</h3>
                <p className="text-blue-100/80 leading-relaxed max-w-md relative z-10 font-medium">Our puzzles and coding kits challenge young minds, improving spatial reasoning and problem-solving abilities naturally through play.</p>
              </div>
              <div className="bg-[#F97316] text-white rounded-[2.5rem] p-8 overflow-hidden relative shadow-xl shadow-orange-900/10">
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-orange-400 rounded-full blur-2xl"></div>
                <Zap className="h-12 w-12 text-orange-200 mb-6 relative z-10" />
                <h3 className="text-2xl font-black mb-3 relative z-10 tracking-tight">Motor Skills</h3>
                <p className="text-orange-100 leading-relaxed relative z-10 font-medium">Hands-on circuit building refines fine motor control and precision.</p>
              </div>
              <div className="bg-gradient-to-br from-[#8B5E3C] to-[#63422A] text-white rounded-[2.5rem] p-8 overflow-hidden relative shadow-xl shadow-amber-900/10">
                 <div className="absolute top-[-20%] right-[-20%] w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                 <ShieldCheck className="h-12 w-12 text-[#f3e5d8] mb-6 relative z-10" />
                 <h3 className="text-2xl font-black mb-3 relative z-10 tracking-tight">Screen-Free</h3>
                 <p className="text-[#f3e5d8]/80 leading-relaxed relative z-10 font-medium">Engaging tactile experiences that captivate without relying on a screen.</p>
              </div>
              <div className="md:col-span-2 bg-slate-900 text-white rounded-[2.5rem] p-8 flex flex-col md:flex-row items-center justify-between overflow-hidden relative shadow-2xl">
                <div className="relative z-10">
                  <h3 className="text-3xl font-black mb-3 tracking-tight">BUILT FOR THE FUTURE.</h3>
                  <p className="text-slate-400 max-w-md mb-6 font-medium">Equip them with the logical foundation they need for tomorrow&apos;s technology-driven world.</p>
                  <button className="bg-white text-slate-900 font-black px-8 py-4 rounded-2xl hover:scale-105 transition-transform">EXPLORE CURRICULUM</button>
                </div>
                <div className="hidden md:block relative z-10">
                  <Rocket className="h-32 w-32 text-slate-700/50 -rotate-12" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- TESTIMONIALS --- */}
        <section className="py-24 bg-[#FDFCFB]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-black tracking-tight text-center mb-16 text-slate-800">Stories from our <span className="text-[#2563EB]">community.</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {TESTIMONIALS.map((t, idx) => (
                <div key={idx} className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm relative pt-12 mt-6">
                  <div className="absolute -top-6 left-8 bg-[#2563EB] rounded-2xl w-12 h-12 flex items-center justify-center shadow-lg text-white font-black text-xl uppercase transform -rotate-3">
                    {t.name[0]}
                  </div>
                  <div className="flex text-[#F97316] mb-6">
                    {[1,2,3,4,5].map(i => <Star key={i} className="h-4 w-4 fill-current" />)}
                  </div>
                  <p className="text-slate-600 mb-6 font-medium leading-relaxed">&quot;{t.text}&quot;</p>
                  <div className="font-black text-slate-800">{t.name}</div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{t.role}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- NEWSLETTER --- */}
        <section className="py-16 md:py-24">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-[3rem] p-8 md:p-16 text-center border-2 border-white shadow-xl shadow-blue-900/5 relative overflow-hidden">
               <div className="absolute inset-0 bg-white/40" />
               <div className="relative z-10 max-w-2xl mx-auto">
                 <div className="bg-white w-20 h-20 rounded-[2rem] flex items-center justify-center mx-auto mb-6 shadow-sm shadow-blue-100 transform rotate-3">
                   <Mail className="h-10 w-10 text-[#2563EB]" />
                 </div>
                 <h2 className="text-3xl md:text-4xl font-black mb-4 text-slate-800 tracking-tight">Join our play-and-learn <span className="text-[#F97316]">club.</span></h2>
                 <p className="text-slate-500 mb-8 max-w-lg mx-auto font-medium">Subscribe to get special offers, free educational printables, and early access to new toy drops.</p>
                 
                 <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
                   <input type="email" placeholder="Enter your email address" className="flex-grow px-6 py-4 rounded-2xl border border-slate-200 focus:outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-blue-100 transition-all bg-white font-medium text-slate-700" required />
                   <button type="submit" className="bg-[#2563EB] text-white px-8 py-4 rounded-2xl font-black shadow-lg shadow-blue-200 hover:-translate-y-1 transition-transform whitespace-nowrap">
                     Subscribe
                   </button>
                 </form>
                 <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-6">We respect your inbox. Unsubscribe anytime.</p>
               </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
