export default function LinkButton({ text, url, featured, icon }) {
  // Estilos base
  const baseClasses =
    "w-full py-4 px-6 font-medium uppercase tracking-widest text-sm transition-all duration-300 rounded-sm cursor-pointer block text-center flex items-center justify-center gap-3";
  
  // Estilos según si es destacado o no
  const styles = featured
    ? "bg-gold-rio border border-gold-rio text-white hover:bg-white hover:text-gold-rio shadow-md"
    : "border border-gold-rio text-gray-800 hover:bg-gold-rio hover:text-white";

  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="w-full group">
      <div className={`${baseClasses} ${styles}`}>
        {/* Si hay ícono, lo mostramos. El color se hereda automáticamente del texto */}
        {icon && <span className="mb-[2px]">{icon}</span>}
        <span>{text}</span>
      </div>
    </a>
  );
}