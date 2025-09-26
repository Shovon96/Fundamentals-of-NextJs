import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function CommonLayout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <Navbar />
            <div className="min-h-screen">
                {children}
            </div>
            <Footer />
        </div>
    )
}
