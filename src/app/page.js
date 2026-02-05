import ProfileHeader from "@/components/ProfileHeader";
import LinkButton from "@/components/LinkButton";
import Footer from "@/components/Footer";
import Stories from "@/components/Stories";
import ProductSlider from "@/components/ProductSlider"; 
import { profileData, links, stories } from "@/data/links"; 

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 bg-white text-gray-800">
      
      <main className="flex flex-col items-center w-full max-w-md py-10 animate-fade-in flex-grow">
        
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