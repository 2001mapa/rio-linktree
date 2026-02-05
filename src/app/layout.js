import { Montserrat } from "next/font/google";
import "./globals.css";

// Configuramos la fuente Montserrat
const montserrat = Montserrat({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"], // Cargamos varios grosores
  variable: "--font-montserrat",
});

export const metadata = {
  title: "RIO COLOMBIA | Accesorios & Joyería",
  description: "Tienda oficial de Rio Colombia. Nueva colección, catálogo y atención personalizada. Envíos a todo el país 🇨🇴.",
  // Esto es lo que lee WhatsApp:
  openGraph: {
    title: "RIO COLOMBIA | Accesorios Exclusivos",
    description: "Descubre nuestra nueva colección y catálogo oficial.",
    url: "https://rio-accesorios.vercel.app", // (Cambiarás esto cuando tengas el link final)
    siteName: "Rio Colombia",
    images: [
      {
        url: "/logo.png", // Usará tu logo como imagen de portada al compartir
        width: 800,
        height: 600,
        alt: "Logo Rio Colombia",
      },
    ],
    locale: "es_CO",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${montserrat.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}