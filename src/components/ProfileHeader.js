import Image from "next/image";

export default function ProfileHeader({ title, subtitle, image }) {
  return (
    // CAMBIO: De 'mb-6' pasamos a 'mb-2'
    <div className="flex flex-col items-center space-y-2 mb-2"> 
      <div className="relative w-28 h-28 rounded-full border-[3px] border-gold-rio flex items-center justify-center bg-white shadow-sm overflow-hidden p-1">
        <Image 
          src={image} 
          alt="Logo Rio" 
          fill 
          className="object-contain p-2" 
          priority
        />
      </div>
      
      {/* Reduje el margin-top del título también (mt-2 en vez de mt-4) */}
      <h1 className="text-2xl font-bold tracking-[0.2em] text-black uppercase text-center mt-2 font-sans">
        {title}
      </h1>
      <p className="text-xs text-gray-500 tracking-widest uppercase">
        {subtitle}
      </p>
    </div>
  );
}