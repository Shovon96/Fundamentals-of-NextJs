// components/Navbar.js
import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="w-full backdrop-blur-md bg-white/10 shadow-md border-b border-white/10">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                {/* Logo */}
                <div className="text-2x tracking-wide text-white">
                    NextJs
                </div>

                {/* Navigation Items */}
                <ul className="flex space-x-8 text-white text-md font-light tracking-wider">
                    <li className="hover:text-pink-600 transition duration-300">
                        <Link href="/">Home</Link>
                    </li>
                    <li className="hover:text-pink-600 transition duration-300">
                        <Link href="/products">Products</Link>
                    </li>
                    <li className="hover:text-pink-600 transition duration-300">
                        <Link href="/about">About</Link>
                    </li>
                    <li className="hover:text-pink-600 transition duration-300">
                        <Link href="/contact">Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
