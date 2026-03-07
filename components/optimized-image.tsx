import Image from 'next/image'
import { ImgHTMLAttributes } from 'react'

interface OptimizedImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string
  alt: string
  width?: number
  height?: number
  objectFit?: 'contain' | 'cover' | 'fill' | 'scale-down'
}

/**
 * Optimized Image Component
 * Usa Next.js Image cuando es posible, fallback a img HTML
 * Siempre asegura dimensiones para evitar layout shift (CLS)
 */
export function OptimizedImage({
  src,
  alt,
  width,
  height,
  objectFit = 'cover',
  className,
  ...props
}: OptimizedImageProps) {
  // Si las dimensiones no están disponibles o es una URL externa
  // usa img tag HTML directo con dimensiones CSS
  if (!width || !height) {
    return (
      <img
        src={src}
        alt={alt}
        className={className}
        loading="lazy"
        decoding="async"
        {...props}
      />
    )
  }

  // Si es una URL relativa, usa Next.js Image para optimización
  if (src.startsWith('/')) {
    return (
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={className}
        priority={false}
        loading="lazy"
        {...props}
      />
    )
  }

  // URL externa - usa img HTML con dimensiones
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      loading="lazy"
      decoding="async"
      {...props}
    />
  )
}
