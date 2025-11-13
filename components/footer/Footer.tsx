import React from "react";

import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full bg-black/30 backdrop-blur-sm text-zinc-50 py-6 sm:py-8 mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6">
          <div className="uppercase text-xs sm:text-sm text-center sm:text-left">
            <p>&copy; {new Date().getFullYear()} Facade. All rights reserved.</p>
          </div>
          <div className="flex flex-wrap justify-center sm:justify-end gap-4 sm:gap-6 uppercase text-xs sm:text-sm">
            <Link href="#" className="hover:text-red-500 transition-colors">
              About
            </Link>
            <Link href="#" className="hover:text-red-500 transition-colors">
              Contact
            </Link>
            <Link href="#" className="hover:text-red-500 transition-colors">
              Shipping
            </Link>
            <Link href="#" className="hover:text-red-500 transition-colors">
              Returns
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


