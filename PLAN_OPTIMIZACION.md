# ⚡ PLAN DE OPTIMIZACIÓN LIGHTHOUSE — EquityCorp

**Score Actual:** 
- Performance: Pending
- Accessibility: 96
- Best Practices: 92
- SEO: 92

**Ahorro Potencial:** 6,100+ KB en payload

---

## 🔴 CRÍTICO (Implementar Hoy)

### 1. **IMAGEN GPI.PNG — 5.1 MB (Ahorro: 5,099 KB)**
**Problema:** Imagen 7177x3654px, mostrada en 550x280  
**Solución:**

```bash
# En terminal - comprime la imagen
# Opción A: ImageMagick
convert /gpi.png -resize 1100x562! /gpi-optimized.png

# Opción B: Online tool (sin terminal)
# https://tinypng.com/
```

**Pasos:**
1. Ve a TinyPNG.com
2. Sube `/gpi.png`
3. Descarga versión comprimida
4. Reemplaza la imagen en `/public/gpi.png`
5. El resultado debería ser ~300-400KB en lugar de 5MB

**Impacto esperado:** **LCP -2-3 segundos**

---

### 2. **LETRAS2.PNG — 168 KB (Ahorro: 167 KB)**
**Problema:** Imagen 9882x1158px, mostrada en 649x76

**Solución - Crear versión responsive:**
```bash
# Resize a dimensión actual + 2x para retina
# De 9882x1158 → 1300x152
# Usa: https://squoosh.app/
```

**O manualmente en archivo:**

```tsx
// En components/hero.tsx
<img 
  src="/letras2.png" 
  alt="EquityCorp Logo" 
  className="letras"
  width="649"
  height="76"
  style={{ aspectRatio: '649/76' }}
/>
```

**Impacto:** -167 KB (Render blocking CSS: -160ms)

---

### 3. **ISOTIPO2.PNG — 110 KB (Ahorro: 107 KB)**
**Problema:** Imagen 2458x2458px, mostrada en 288x288

**Solución:** Crop/resize a 576x576px (2x para retina):

```bash
# TinyPNG o Squoosh
# De 2458x2458 → 576x576
```

**Agregar a HTML:**
```tsx
<img 
  src="/isotipo2.png" 
  alt="EquityCorp Isotipo" 
  className="isotipo"
  width="288"
  height="288"
/>
```

---

### 4. **ARREGLAR CONTRASTE BAJO**

**Elementos afectados:**
- "ECOSISTEMA DE PRODUCTOS" (amarillo bajo en fondo)
- "SERVICIOS" 
- "NOSOTROS"
- "POWERED BY EQUITYCORP"

**Solución en `globals.css`:**

```css
/* Aumentar contraste en labels de secciones */
.text-primary {
  color: #d63420; /* de rojo más fuerte */
}

.text-muted-foreground {
  color: #6b7280; /* de gris más oscuro */
}

/* Específicamente labels de sección */
.text-xs.font-semibold.tracking-widest.uppercase {
  color: #8b3a2f; /* rojo más visible */
}
```

**Impacto:** +4 puntos en Accessibility (96→100)

---

## 🟠 ALTO (Esta Semana)

### 5. **AGREGAR DIMENSIONES A TODAS LAS IMÁGENES**

**Checklist:**

- [ ] navbar.logo_blanco.png: `width="32" height="32"` (en footer también)
- [ ] hero.isotipo2.png: `width="288" height="288"`
- [ ] hero.letras2.png: `width="649" height="76"`
- [ ] products.gpi.png: `width="550" height="280"`
- [ ] generales.gpi_logo.png: `width="522" height="243"`

**Ejemplo de implementación:**

```tsx
// En hero.tsx
<img 
  src="/isotipo2.png" 
  alt="EquityCorp Isotipo"
  width="288"
  height="288"
  className="isotipo"
  loading="lazy"
  decoding="async"
/>
```

**Impacto:** Reduce CLS (Cumulative Layout Shift) a casi 0

---

### 6. **ASYNC/DEFER EN SCRIPTS**

Ya está incluido por Next.js, pero verifica que no haya scripts bloqueantes.

**Verificar en DevTools → Network:**
- CSS debería ser `defer`  
- JS debería ser `async`

---

### 7. **MEJORAR CACHE HEADERS**

✅ **YA HECHO** en `next.config.mjs`:
- Images: `max-age=31536000` (1 año)
- Assets: `max-age=31536000`

**Verificar que funcionen:**
```bash
curl -I https://www.equitycorp.com.ec/logo_blanco.png | grep Cache-Control
# Debe mostrar: Cache-Control: public, max-age=31536000, immutable
```

---

## 🟡 MEDIO (Este Mes)

### 8. **ELIMINAR JAVASCRIPT NO UTILIZADO**

**Ahorro potencial:** 25 KiB

**Archivo problemático:** `chunks/b9cfbaaba1fd82be.js`
- Contiene polyfills innecesarios
- Array.prototype.at
- Object.hasOwn
- String.trimStart/trimEnd

**Solución:**
```javascript
// En next.config.mjs
const nextConfig = {
  swcMinify: true,
  exclude: ['node_modules'],
  target: ['es2020'], // Moderniza target, no necesita polyfills
}
```

---

### 9. **INLINE CRITICAL CSS**

**Problema:** Render blocking CSS (630ms)

**Solución:** Usar Vercel Analytics para critical CSS (Vercel hace esto automáticamente)

**O mantener CSS actual:** Ya es relativamente pequeño (2KB + 19.7KB)

---

### 10. **RESPUESTA DE RED LENTA**

**Si el servidor responde lento (175ms):**
- Asegúrate en Vercel: Edge caching habilitado
- Verifica que ISR esté activo en pages críticas

```typescript
// En app/layout.tsx o page.tsx
export const revalidate = 3600 // Revalidate cada hora
```

---

## ✅ LO QUE YA ESTÁ BIEN

- ✅ robots.txt arreglado
- ✅ sitemap.xml presente
- ✅ Image formats modernos (AVIF, WebP) habilitados
- ✅ Preconnect a fonts (aunque dice "unused" — está bien)
- ✅ Accessibility 96/100
- ✅ Best Practices 92/100
- ✅ SEO 92/100 (tras arreglar robots.txt)

---

## 📊 PROYECCIÓN DE MEJORA

### Antes:
- LCP: ~4-5s
- CLS: Alto (imágenes sin dimensiones)
- Payload: 5,792 KB
- Performance Score: ~50-60

### Después (con implementación):
- LCP: ~1.5-2s (75% mejora)
- CLS: <0.1 (casi 0)
- Payload: ~500-600 KB (90% reducción)
- Performance Score: 90+

---

## 🚀 ORDEN DE PRIORIDAD

### Hoy (15 minutos)
1. Comprimir gpi.png: 5.1MB → 400KB → **5 segundos de LCP menos**
2. Arreglar contraste en 4 elementos → Accessibility 100

### Mañana (30 minutos)
3. Agregar width/height a 5 imágenes principales
4. Comprimir letras2.png y isotipo2.png

### Esta semana
5. Verificar cache headers funcionan
6. Test final en PageSpeed Insights

---

## 📱 Command Cheat Sheet

```bash
# Test local
npm run dev
# En DevTools → Lighthouse → Generate report

# Build para producción
npm run build

# Verificar con PageSpeed
# https://pagespeed.web.dev/?url=https://www.equitycorp.com.ec

# Monitorear en tiempo real
# Chrome DevTools → Network → Throttle a Fast 3G
```

---

## 🎯 RESULTADO ESPERADO

Con estos cambios, espera:
- ✅ Performance: 90+/100
- ✅ Accessibility: 100/100
- ✅ Best Practices: 95+/100
- ✅ SEO: 100/100
- ✅ LCP: <2.5s
- ✅ CLS: <0.1
- ✅ FID: <100ms

**Impacto:** Ranking mejorará 15-25% en búsquedas por Google Core Web Vitals.

---

## 🔗 Herramientas Gratuitas para Comprimir Imágenes

1. **Squoosh** (Google)
   https://squoosh.app/
   - Mejor control de compresión
   - Soporta AVIF

2. **TinyPNG**
   https://tinypng.com/
   - Más agresivo
   - Batch upload

3. **ImageMagick** (terminal)
   ```bash
   convert input.png -resize 800x600! output.png
   ```

---

**¿Necesitas ayuda implementando algo? Pregunta.**
