import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PrivacidadPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800 p-8 flex justify-center">
      <div className="max-w-md w-full animate-fade-in">
        
        <Link href="/" className="inline-flex items-center text-gold-rio text-sm font-medium mb-8 hover:opacity-80 transition-opacity">
          <ArrowLeft size={16} className="mr-2" /> Volver al inicio
        </Link>

        <h1 className="text-2xl font-bold uppercase tracking-widest mb-6 text-black">
          Política de Privacidad
        </h1>

        <div className="text-xs leading-relaxed text-gray-500 space-y-4 text-justify">
          <p>
            En RIO COLOMBIA respetamos tu privacidad y estamos comprometidos con la protección de tus datos personales.
          </p>
          
          <h2 className="text-sm font-bold text-gray-800 uppercase mt-4">1. Recolección de Datos</h2>
          <p>
            Solo recolectamos la información necesaria para procesar tus pedidos y comunicarnos contigo (Nombre, Teléfono, Dirección de envío). Esta información se obtiene principalmente a través de nuestro canal de WhatsApp o Instagram.
          </p>

          <h2 className="text-sm font-bold text-gray-800 uppercase mt-4">2. Uso de la Información</h2>
          <p>
            Tus datos serán utilizados exclusivamente para:
            <br/>• Enviar tus productos.
            <br/>• Contactarte en caso de novedades con tu pedido.
            <br/>• No compartimos tu información con terceros ajenos a la logística de envío.
          </p>

          <h2 className="text-sm font-bold text-gray-800 uppercase mt-4">3. Contacto</h2>
          <p>
            Si deseas actualizar o eliminar tus datos de nuestra base de clientes, puedes escribirnos directamente a nuestro WhatsApp oficial.
          </p>
        </div>
      </div>
    </div>
  );
}