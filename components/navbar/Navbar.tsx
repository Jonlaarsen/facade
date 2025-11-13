"use client";

import React from "react";
import Link from "next/link";
import { FaCartShopping } from "react-icons/fa6";
import { useCart } from "@/contexts/CartContext";

const Navbar = () => {
  const { getTotalItems } = useCart();
  const cartItemCount = getTotalItems();

  return (
    <div className="fixed top-0 uppercase left-0 z-50 text-zinc-50 py-2 sm:py-3 min-h-12  bg-black/30 backdrop-blur-sm justify-between items-center w-full flex px-4 sm:px-5 pointer-events-auto">
      <div className="w-30 flex gap-2 items-center"></div>
      <div className="hidden sm:flex uppercase text-xs sm:text-sm gap-3 sm:gap-4 pt-2">
        <a className="text-red-500 font-bold hover:text-red-400 transition-colors">
          SALE!
        </a>
        <Link
          href="/products?category=Skateboards"
          className="hover:text-red-500 transition-colors"
        >
          Skateboards
        </Link>
        <Link
          href="/products?category=Upper"
          className="hover:text-red-500 transition-colors"
        >
          Clothing
        </Link>
        <Link href="/products" className="hover:text-red-500 transition-colors">
          Products
        </Link>
        <Link href="/" className="hover:text-red-500 transition-colors">
          Home
        </Link>
      </div>
      <div className="flex w-30 items-center justify-end gap-3 sm:gap-4">
        <p className="hidden sm:block text-xs sm:text-sm">account</p>
        <Link
          href="/cart"
          className="relative hover:opacity-80 transition-opacity"
        >
          <FaCartShopping size={20} className="sm:w-6 sm:h-6" />
          {cartItemCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-4 w-4 sm:h-5 sm:w-5 flex items-center justify-center text-[10px] sm:text-xs">
              {cartItemCount > 9 ? "9+" : cartItemCount}
            </span>
          )}
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
