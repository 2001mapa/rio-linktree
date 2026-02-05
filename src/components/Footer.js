import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();
  
  return (
    <footer className="w-full max-w-md mt-auto mb-8 border-t border-gray-100 pt-8">
      <div className="flex justify-center gap-6 mb-4">
        {/* Enlace a Términos */}
        <Link href="/terminos" className="text-[10px] text-gray-400 uppercase tracking-wider hover:text-gold-rio transition-colors">
          Términos
        </Link>

        {/* Separador decorativo */}
        <span className="text-[10px] text-gray-300">•</span>

        {/* Enlace a Privacidad */}
        <Link href="/privacidad" className="text-[10px] text-gray-400 uppercase tracking-wider hover:text-gold-rio transition-colors">
          Privacidad
        </Link>
      </div>
      
      <div className="text-center">
        <p className="text-[10px] text-gray-300 uppercase tracking-widest">
          © {year} Rio Accesorios.
        </p>
      </div>
    </footer>
  );
}