import { ImageResponse } from 'next/og'

// Configuración para que cargue súper rápido
export const runtime = 'edge'

// Tamaño del icono (32x32 es el estándar perfecto para pestañas)
export const size = {
  width: 32,
  height: 32,
}
export const contentType = 'image/png'

// Esta función DIBUJA la "R" automáticamente
export default function Icon() {
  return new ImageResponse(
    (
      // Contenedor principal (Círculo Blanco)
      <div
        style={{
          fontSize: 24,           // Tamaño de la letra
          background: 'white',    // Fondo blanco limpio
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#DAA520',       // <--- Tu color Dorado Rio
          borderRadius: '50%',    // Esto lo hace redondo
          fontWeight: 900,        // Letra bien gruesa (Bold)
          fontFamily: 'sans-serif'
        }}
      >
        R
      </div>
    ),
    {
      ...size,
    }
  )
}