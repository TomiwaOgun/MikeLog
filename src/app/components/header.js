'use client'; // Mark this as a Client Component

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation'; // Use next/navigation for App Router
import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

export default function Header() {
  const pathname = usePathname(); // Get the current route
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu toggle

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-green-700 shadow-sm py-4">
      <div className="container mx-auto flex items-center justify-between bg-green-700 px-4">
        {/* Logo */}
        <Link href="/" aria-label="Home">
          <Image
            src="/mikelogLogo.jpg"
            alt="Logo"
            width={50}
            height={50}
            className="rounded-full border-4 border-white shadow-lg w-10 h-10 md:w-12 md:h-12"
          />
        </Link>

        {/* Mobile Menu Toggle */}
        <button onClick={toggleMenu} className="lg:hidden" aria-label="Toggle Menu">
          {isMenuOpen ? (
            <XMarkIcon className="w-6 h-6 text-gray-800" />
          ) : (
            <Bars3Icon className="w-6 h-6 text-gray-800" />
          )}
        </button>

        {/* Navigation Links */}
        <nav className={`lg:flex gap-6 ${isMenuOpen ? 'flex' : 'hidden'} flex-col lg:flex-row`}>
          <Link
            href="/"
            className={`text-gray-800 hover:text-blue-600 border-b-2 ${
              pathname === '/' ? 'border-blue-600' : 'border-transparent'
            } hover:border-blue-600`}
          >
            Home
          </Link>
          <Link
            href="/products"
            className={`text-gray-800 hover:text-blue-600 border-b-2 ${
              pathname === '/projects' ? 'border-blue-600' : 'border-transparent'
            } hover:border-blue-600`}
          >
            Projects
          </Link>
          <Link
            href="/about"
            className={`text-gray-800 hover:text-blue-600 border-b-2 ${
              pathname === '/about' ? 'border-blue-600' : 'border-transparent'
            } hover:border-blue-600`}
          >
            About
          </Link>

        </nav>
      </div>
    </header>
  );
}