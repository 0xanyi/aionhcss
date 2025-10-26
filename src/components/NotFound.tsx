import { Link } from '@tanstack/react-router'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="max-w-md mx-auto text-center p-8">
        <div className="text-6xl font-bold text-aion-coral mb-4">404</div>
        <h1 className="text-3xl font-bold text-aion-navy mb-4">Page Not Found</h1>
        <p className="text-aion-gray-600 mb-8">
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="btn-primary inline-block px-6 py-3 text-lg font-semibold hover:shadow-aion-lg transition-all"
        >
          Return Home
        </Link>
      </div>
    </div>
  )
}