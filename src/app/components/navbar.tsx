"use client";
import Image from "next/image";
import Link from "next/link";  // Import Link from Next.js
import user from "@/images/Vector (12).png";
import search from "@/images/icn settings icn-xs (6).png";
import cart from "@/images/icn settings icn-xs (7).png";
import mail from "@/images/icn settings icn-xs (8).png";
import { useState } from "react"; // Import useState for toggling hamburger menu

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for toggling the menu

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the menu state on hamburger click
  };

  return (
    <div className="w-full h-[70px] bg-white relative top-15 z-50">
      <div className="max-w-[1437px] mx-auto flex items-center justify-between px-4">
        {/* Logo */}
        <h3 className="font-Montserrat font-semibold text-[24px] text-black">Bandage</h3>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-[30px]">
          <ul className="font-Montserrat font-semibold text-[14px] text-[#737373] flex items-center gap-[20px]">
            <li className="relative group">
              <Link href="/shop">Shop</Link>
              <span className="absolute left-0 top-full hidden group-hover:block bg-white border border-[#737373] py-[2px] px-[5px] text-[12px] text-[#737373]">
                ▼
              </span>
            </li>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/pages">Pages</Link></li>
          </ul>

          {/* Icons section */}
          <ul className="flex items-center gap-[15px]">
            <li>
              <Image src={search} alt="search" width={16} height={16} />
            </li>
            <li>
              <Image src={cart} alt="cart" width={16} height={16} />
            </li>
            <li>
              <Image src={mail} alt="mail" width={16} height={16} />
            </li>
            <li className="flex items-center gap-[5px]">
              <Image src={user} alt="user" width={16} height={16} />
              <span className="font-Montserrat text-[14px] text-[#23A6F0]">Login / Register</span>
            </li>
          </ul>
        </div>

        {/* Mobile Menu */}
        <div className="lg:hidden flex items-center">
          {/* Hamburger Icon */}
          <div className="cursor-pointer" onClick={toggleMenu}>
            <div className="w-[24px] h-[2px] bg-black mb-[5px]"></div>
            <div className="w-[24px] h-[2px] bg-black mb-[5px]"></div>
            <div className="w-[24px] h-[2px] bg-black"></div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Content */}
      <div className={`${isMenuOpen ? "block" : "hidden"} absolute top-[70px] w-full bg-white p-4 flex flex-col items-center`}>
        <ul className="font-Montserrat font-semibold text-[14px] text-black leading-[24px] gap-4 flex flex-col items-center">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/shop">Shop</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/blog">Blog</Link></li>
          <li><Link href="/contact">Contact</Link></li>
          <li><Link href="/pages">Pages</Link></li>
        </ul>

        {/* Close button */}
        <button
          onClick={toggleMenu}
          className="text-black font-Montserrat text-[14px] mt-4"
        >
          Close Menu
        </button>
      </div>
    </div>
  );
}

