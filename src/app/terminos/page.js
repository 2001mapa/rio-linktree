import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function TerminosPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800 p-8 flex justify-center">
      <div className="max-w-md w-full animate-fade-in">
        
        {/* Botón Volver */}
        <Link href="/" className="inline-flex items-center text-gold-rio text-sm font-medium mb-8 hover:opacity-80 transition-opacity">
          <ArrowLeft size={16} className="mr-2" /> Volver al inicio
        </Link>

        <h1 className="text-2xl font-bold uppercase tracking-widest mb-6 text-black">
          Términos y Condiciones
        </h1>

        <div className="text-xs leading-relaxed text-gray-500 space-y-4 text-justify">
          <p>
            Bienvenido a RIO COLOMBIA. Al acceder a nuestros canales de venta y adquirir nuestros accesorios, aceptas los siguientes términos:
          </p>
          
          <h2 className="text-sm font-bold text-gray-800 uppercase mt-4">1. Productos y Disponibilidad</h2>
          <p>
            Nuestras piezas de joyería y accesorios están sujetas a disponibilidad. Nos esforzamos por mostrar los colores y texturas con la mayor precisión posible, pero no podemos garantizar que la pantalla de tu dispositivo refleje el color real del producto con exactitud.
          </p>

          <h2 className="text-sm font-bold text-gray-800 uppercase mt-4">2. Precios</h2>
          <p>
            Todos los precios están expresados en pesos colombianos (COP). Nos reservamos el derecho de modificar los precios sin previo aviso.
          </p>

          <h2 className="text-sm font-bold text-gray-800 uppercase mt-4">3. Cuidados (Garantía)</h2>
          <p>
            Por higiene y seguridad, no se aceptan cambios en aretes. La garantía cubre defectos de fábrica, pero no cubre el desgaste natural por uso, mal trato o contacto con químicos (perfumes, cremas).
          </p>
        </div>
      </div>
    </div>
  );
}