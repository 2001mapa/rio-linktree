export default function Stories({ items }) {
  if (!items || items.length === 0) return null;

  return (
    // CAMBIO AQUÍ: De 'mb-8' pasamos a 'mb-2' para pegarlo a los botones
    <div className="flex gap-5 mb-2 overflow-x-auto pb-2 w-full justify-center px-4">
      {items.map((item) => {
        const isLink = !!item.url;
        const Component = isLink ? 'a' : 'div';
        const props = isLink 
          ? { href: item.url, target: "_blank", rel: "noopener noreferrer" } 
          : {};

        return (
          <Component 
            key={item.id} 
            {...props}
            className="flex flex-col items-center gap-2 cursor-pointer group min-w-[64px]"
          >
            {/* ... (el resto del código interno sigue igual) ... */}
            <div className="w-16 h-16 rounded-full p-[2px] border-2 border-gray-100 group-hover:border-gold-rio transition-all duration-300">
              <div className="w-full h-full rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-white transition-colors">
                <div className="text-gold-rio group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
              </div>
            </div>
            
            <span className="text-[9px] uppercase tracking-widest text-gray-400 font-medium group-hover:text-gold-rio transition-colors">
              {item.text}
            </span>
          </Component>
        );
      })}
    </div>
  );
}