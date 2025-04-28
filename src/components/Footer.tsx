
import React from 'react';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full py-8 bg-black border-t border-zinc-800">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold">
              <span className="text-gradient">VIRAL</span> VIEWS
            </h3>
          </div>
          
          <div className="text-sm text-gray-400">
            © {currentYear} Viral Views. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
