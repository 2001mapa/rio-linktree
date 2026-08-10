import ProfileHeader from "@/components/ProfileHeader";
import LinkButton from "@/components/LinkButton";
import Footer from "@/components/Footer";
import Stories from "@/components/Stories";
import ProductSlider from "@/components/ProductSlider"; 
import { profileData, links, stories } from "@/data/links"; 

export default function Home() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gray-50 text-gray-800 overflow-hidden sm:px-4">
      
      {/* Fondo Premium (Figuras y destellos dorados) */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden hidden md:block">
        {/* Esferas doradas con animación */}
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] max-w-[400px] max-h-[400px] bg-gold-rio/20 rounded-full mix-blend-multiply blur-3xl animate-blob"></div>
        <div className="absolute top-[20%] right-[-10%] w-[35%] h-[35%] max-w-[300px] max-h-[300px] bg-yellow-500/20 rounded-full mix-blend-multiply blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-20%] left-[20%] w-[50%] h-[50%] max-w-[500px] max-h-[500px] bg-gold-rio/15 rounded-full mix-blend-multiply blur-3xl animate-blob animation-delay-4000"></div>
        
        {/* Patrón sutil visible más en desktop */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23DAA520\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>
      </div>

      {/* Main container con efecto Glassmorphism en Desktop */}
      <main className="relative z-10 flex flex-col items-center w-full max-w-md py-10 px-4 animate-fade-in flex-grow 
                       bg-white md:bg-white/80 md:backdrop-blur-xl md:shadow-[0_20px_50px_rgba(218,165,32,0.1)] md:border md:border-white/50 md:rounded-[40px] md:my-10 md:px-6">
        
        {/* 1. Header */}
        <ProfileHeader 
          title={profileData.title} 
          subtitle={profileData.subtitle} 
          image={profileData.image}
        />

        {/* 2. Historias */}
        <Stories items={stories} />

        {/* 3. BOTONES (Ahora van primero para vender más) */}
        <div className="w-full flex flex-col gap-3 z-10 mt-2 mb-8">
          {links.map((link) => (
            <LinkButton 
              key={link.id} 
              text={link.text} 
              url={link.url} 
              featured={link.featured} 
              icon={link.icon}
            />
          ))}
        </div>

        {/* 4. Carrusel (Ahora va abajo, como galería de inspiración) */}
        <div className="w-full mb-6">
            <h3 className="text-center text-[10px] uppercase tracking-widest text-gray-400 mb-4">
              — Inspírate con Rio —
            </h3>
            <ProductSlider /> 
        </div>

      </main>

      <Footer />
    </div>
  );
}