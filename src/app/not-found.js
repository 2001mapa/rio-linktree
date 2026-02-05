import Link from 'next/link'

// Es vital que diga 'export default'
export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-white text-black">
      <h2 className="text-4xl font-bold mb-4 text-gold-rio">404</h2>
      <p className="mb-8">Esta página no existe.</p>
      <Link 
        href="/"
        className="px-6 py-3 bg-black text-white rounded-sm hover:bg-gray-800"
      >
        Volver al Inicio
      </Link>
    </div>
  )
}