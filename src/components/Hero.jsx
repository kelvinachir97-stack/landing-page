import React, { use } from 'react';

export default function HeroSection() {

   return (
      <section
         className="py-12 px-4 bg-gradient-to-r from-white via-indigo-100 to-white lg:py-16 md:px-8">
         <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl">
               <h1 className="text-slate-900 text-4xl font-bold !leading-tight md:text-5xl lg:text-6xl">The
                  Most Modern Card Platform for Debit</h1>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 lg:gap-12 mt-6">
               <div>
                  <p className="text-slate-600 text-lg leading-relaxed">Explore a curated collection of
                     ready-to-use components and design blocks, responsive interfaces with ease. Streamline your workflow and
                     discover the future of web development.</p>

                  <div className="mt-8 flex gap-6 items-center flex-wrap">
                     <a href="#"
                        className="py-2.5 px-4 text-sm rounded-md font-semibold cursor-pointer text-white border border-blue-600 bg-blue-600 hover:bg-blue-700 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500">
                        Get Started
                     </a>
                     <a href="#"
                        className="text-slate-900 text-sm font-semibold underline whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500">API
                        Documentation</a>
                  </div>

                  <div className="mt-16 flex flex-wrap gap-x-8 gap-y-6">
                     <img src="https://readymadeui.com/images/brand-logo1.webp"
                        className="w-28 shrink-0" alt="brand-logo1" />
                     <img src="https://readymadeui.com/images/brand-logo2.webp"
                        className="w-28 shrink-0" alt="brand-logo2" />
                     <img src="https://readymadeui.com/images/brand-logo3.webp"
                        className="w-28 shrink-0" alt="brand-logo3" />
                     <img src="https://readymadeui.com/images/brand-logo4.webp"
                        className="w-28 shrink-0" alt="brand-logo4" />
                  </div>
               </div>

               <div className="aspect-[7/4]">
                  <img src='https://readymadeui.com/images/kpis-dashboard-img.webp'
                     className="shrink-0 w-full h-full rounded-md object-contain" alt="kpi dashboard image" />
               </div>
            </div>
         </div>
      </section>
   );
}