import Link from 'next/link';

export default function AdminSidebar() {

    return (
        <>
            {/* Toggle button for mobile */}
            {/* <div className="lg:hidden bg-black text-white p-4 flex justify-between items-center">
                <div className="text-xl font-serif text-gold">AdminPanel</div>
                <button onClick={() => setOpen(!open)}>
                    <FaBars className="text-xl" />
                </button>
            </div> */}

            {/* Sidebar */}
            <div className="bg-white/10 text-white w-64 h-screen transition-transform duration-300 z-40">
                <div className="p-6 border-b border-white/10">
                    <h1 className="text-2xl font-serif text-gold">AdminPanel</h1>
                </div>
                <nav className="mt-6">
                    <Link href="#" className="block p-4 hover:bg-white/10 transition duration-300">Dashboard</Link>
                    <Link href="/profile" className="block p-4 hover:bg-white/10 transition duration-300">Profile</Link>
                    <Link href="#" className="block p-4 hover:bg-white/10 transition duration-300">Settings</Link>
                    <Link href="#t" className="block p-4 hover:bg-white/10 transition duration-300">Logout</Link>
                </nav>
            </div>
        </>
    );
}
