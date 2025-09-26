// components/Footer.js

export default function Footer() {
    return (
        <footer className="bg-black text-white pt-10 pb-6 border-t border-white/10">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">

                {/* Column 1 - About */}
                <div>
                    <h2 className="text-xl font-serif mb-4 text-gold">LuxeBrand</h2>
                    <p className="text-sm text-gray-400">
                        Delivering luxury experiences through elegant design, quality, and timeless style. Crafted for those who desire more.
                    </p>
                </div>

                {/* Column 2 - Quick Links */}
                <div>
                    <h3 className="text-lg font-semibold mb-4 text-gold">Quick Links</h3>
                    <ul className="space-y-2 text-sm text-gray-300">
                        <li><a href="/" className="hover:text-gold transition">Home</a></li>
                        <li><a href="/about" className="hover:text-gold transition">About</a></li>
                        <li><a href="/services" className="hover:text-gold transition">Services</a></li>
                        <li><a href="/contact" className="hover:text-gold transition">Contact</a></li>
                    </ul>
                </div>

                {/* Column 3 - Social Media */}
                <div>
                    <h3 className="text-lg font-semibold mb-4 text-gold">Follow Us</h3>
                    <div className="flex space-x-4 text-gray-300 text-xl">
                        <a href="#" className="hover:text-gold transition">Facebook</a>
                        <a href="#" className="hover:text-gold transition">Twitter</a>
                        <a href="#" className="hover:text-gold transition">Instagram</a>
                        <a href="#" className="hover:text-gold transition">LinkedinIn</a>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="mt-10 text-center text-sm text-gray-500 border-t border-white/10 pt-4">
                © {new Date().getFullYear()} LuxeBrand. All rights reserved.
            </div>
        </footer>
    );
}
