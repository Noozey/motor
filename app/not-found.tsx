import { AlertTriangle } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
                <div className='h-screen w-full bg--700 text-white text-5xl flex items-center justify-center'> <main className="flex items-center justify-center min-h-screen bg-gray-50 text-center">
      <div className="p-8">
        <AlertTriangle className="mx-auto h-24 w-24 text-yellow-500" />
        <h1 className="mt-6 text-6xl font-extrabold text-gray-900 tracking-tight">
          404
        </h1>
        <h2 className="mt-2 text-2xl font-semibold text-gray-800">Page Not Found</h2>
        <p className="mt-4 text-lg text-gray-600 max-w-md mx-auto">
          Sorry, the page you are looking for doesn't exist or has been moved.
        </p>
        <Link
          href="/"
          className="mt-8 inline-block rounded-lg bg-indigo-600 px-8 py-3 text-base font-semibold text-white shadow-md hover:bg-indigo-700 transition-all"
        >
          Go back home
        </Link>
      </div>
    </main></div>
            )
}

export default NotFound