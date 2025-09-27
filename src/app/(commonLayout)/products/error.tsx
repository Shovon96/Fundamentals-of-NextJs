"use client"

export default function ProductErrorPage({ error, reset }: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-center px-4">
            <h2 className="text-4xl font-semibold text-red-500 mb-2">Something went wrong!</h2>
            <button
                className="inline-block bg-pink-600 text-white px-6 py-2 rounded hover:bg-pink-700 transition"
                onClick={
                    () => reset()
                }
            >
                Try again
            </button>
        </div>
    )
}
