"use client"

import Link from "next/link";

export default function NotFoundPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-center px-4">
            <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
            <h2 className="text-4xl font-semibold mb-2">Page Not Found</h2>
            <p className="text-gray-100 mb-6">
                The page you are looking for could not be found.
            </p>
            <Link
                href="/"
                className="inline-block bg-pink-600 text-white px-6 py-2 rounded hover:bg-pink-700 transition"
            >
                Return Home
            </Link>
        </div>
    );
}
