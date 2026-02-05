"use client";
import React, { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react'; // Importamos las flechas

export default function ProductSlider() {
  // Configuración AVANZADA:
  // stopOnInteraction: false -> Esto hace que el carrusel NO se muera si lo tocas. Sigue rodando.
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 3500, stopOnInteraction: false })
  ]);

  // Funciones para mover las flechas manualmente
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const slides = [
    { 
        id: 1, 
        src: "/images/Slide-1.jpg", 
        alt: "Colección exclusiva Rio",
        title: "Nueva Colección" 
    },
    { 
        id: 2, 
        src: "/images/Slide-2.jpg", 
        alt: "Detalles en oro",
        title: "Detalles Únicos" 
    },
    { 
        id: 3, 
        src: "/images/Slide-3.jpg", 
        alt: "Estilo Rio Accesorios",
        title: "Tendencia 2026" 
    },
  ];

  return (
    // Agregamos 'relative' y 'group' para posicionar las flechas
    <div className="relative w-full max-w-sm mx-auto mb-6 group">
      
      {/* --- El Carrusel (Igual que antes) --- */}
      <div className="overflow-hidden rounded-lg shadow-sm border border-gray-100 bg-gray-50" ref={emblaRef}>
        <div className="flex">
          {slides.map((slide) => (
            <div key={slide.id} className="flex-[0_0_100%] min-w-0 relative h-64">
               <div className="relative w-full h-full">
                  <Image 
                      src={slide.src} 
                      alt={slide.alt} 
                      fill 
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                      priority={slide.id === 1}
                  />
                  {/* Capa oscura muy sutil para que las flechas blancas resalten si la foto es clara */}
                  <div className="absolute inset-0 bg-black/5" />
               </div>
               
               <div className="absolute bottom-4 left-4 bg-white/95 px-3 py-1 rounded-sm shadow-sm backdrop-blur-[2px]">
                  <p className="text-[10px] uppercase tracking-widest text-gold-rio font-bold">
                      {slide.title}
                  </p>
               </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- BOTONES DE FLECHAS (NUEVO) --- */}
      {/* Flecha Izquierda */}
      <button 
        onClick={scrollPrev} 
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full text-gold-rio shadow-md hover:bg-white hover:scale-110 transition-all z-20 backdrop-blur-sm"
        aria-label="Anterior"
      >
        <ChevronLeft size={20} />
      </button>

      {/* Flecha Derecha */}
      <button 
        onClick={scrollNext} 
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full text-gold-rio shadow-md hover:bg-white hover:scale-110 transition-all z-20 backdrop-blur-sm"
        aria-label="Siguiente"
      >
        <ChevronRight size={20} />
      </button>

    </div>
  );
}