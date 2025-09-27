"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const currentPath = usePathname()
    return (
        <nav className="w-full backdrop-blur-md bg-white/10 shadow-md border-b border-white/10">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                {/* Logo */}
                <div className="text-2xl font-bold underline shadow-2xl shadow-fuchsia-500 tracking-wide text-pink-600">
                    NextJs
                </div>

                {/* Navigation Items */}
                <ul className="flex space-x-8 text-white text-md font-light tracking-wider">
                    <li className={`${currentPath === "/" ? "text-pink-600 font-bold underline" : "font-bold hover:text-pink-500 hover:underline"}`}>
                        <Link href="/">Home</Link>
                    </li>
                    <li className={`${currentPath === "/products" ? "text-pink-600 font-bold underline" : "font-bold hover:text-pink-500 hover:underline"}`}>
                        <Link href="/products">Products</Link>
                    </li>
                    <li className={`${currentPath === "/about" ? "text-pink-600 font-bold underline" : "font-bold hover:text-pink-500 hover:underline"}`}>
                        <Link href="/about">About</Link>
                    </li>
                    <li className={`${currentPath === "/contact" ? "text-pink-600 font-bold underline" : "font-bold hover:text-pink-500 hover:underline"}`}>
                        <Link href="/contact">Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
