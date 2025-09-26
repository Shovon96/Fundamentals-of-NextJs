import AdminSidebar from "../components/Sidebar";


export default function layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex gap-2">
            <AdminSidebar />
            {children}
        </div>
    )
}
