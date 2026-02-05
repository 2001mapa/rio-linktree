// 1. Importamos los nuevos íconos aquí arriba
import { Truck, Users, Tag, MapPin, MessageCircle, ShoppingBag, Instagram } from 'lucide-react';

export const profileData = {
  title: "RIO COLOMBIA",
  subtitle: "Moda & Accesorios | Envíos a todo el país 🇨🇴",
  image: "/logo.png",
};

export const links = [
  {
    id: 1,
    text: "WhatsApp", // Nombre corto
    url: "https://wa.me/573124560359?text=Hola%20Rio%20Colombia,%20quiero%20más%20información%20sobre%20sus%20accesorios!%20",
    featured: true,
    icon: <MessageCircle size={20} />, // Ícono de Chat
  },
  {
    id: 2,
    text: "Catálogo", // Nombre corto
    url: "https://wa.me/c/573124560359", 
    featured: false,
    icon: <ShoppingBag size={20} />, // Ícono de Bolsa
  },
  {
    id: 3,
    text: "Instagram", // Nombre corto
    url: "https://www.instagram.com/riocolombia/",
    featured: false,
    icon: <Instagram size={20} />, // Ícono de Cámara
  },
];

// ... (El resto de 'stories' lo dejas igual que como lo tenías) ...
export const stories = [
  { 
    id: 4, 
    text: "Ubicación", 
    icon: <MapPin size={24} />,
    url: "https://www.google.com/maps/search/?api=1&query=Centro+Comercial+Gran+Plaza+Medellin+Calle+45+%2353-50"
  },
];