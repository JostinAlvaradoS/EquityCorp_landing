import { ArrowRight, Mail, MapPin } from "lucide-react"
import Link from "next/link"

export function ContactCTA() {
  return (
    <section
      id="contact"
      className="py-28 px-6 border-t border-border relative overflow-hidden"
      aria-label="Contacto"
    >
      {/* Background accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 100%, rgba(192,57,43,0.08) 0%, transparent 65%)",
        }}
        aria-hidden="true"
      />
      <div className="absolute top-0 left-0 right-0 brand-line" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="h-px w-8 bg-primary" />
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">
                Contacto
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-foreground text-balance leading-tight mb-6">
              ¿Listo para transformar
              <br />
              tu institución?
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm mb-10">
              Conversemos sobre cómo EquityCorp puede construir la solución
              que tu entidad gubernamental necesita. Sin compromisos.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-md bg-surface-2 flex items-center justify-center shrink-0">
                  <Mail size={14} className="text-primary" />
                </div>
                <span className="text-sm text-muted-foreground">contacto@equitycorp.co</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-md bg-surface-2 flex items-center justify-center shrink-0">
                  <MapPin size={14} className="text-primary" />
                </div>
                <span className="text-sm text-muted-foreground">Colombia · Latam</span>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className="bg-surface-1 border border-border rounded-xl p-8">
            <h3 className="text-base font-bold text-foreground mb-6">Envíanos un mensaje</h3>
            <form className="space-y-4" aria-label="Formulario de contacto">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-medium text-muted-foreground mb-1.5">
                    Nombre
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Tu nombre"
                    className="w-full px-3 py-2.5 text-sm bg-surface-2 border border-border rounded-md text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="org" className="block text-xs font-medium text-muted-foreground mb-1.5">
                    Institución
                  </label>
                  <input
                    id="org"
                    type="text"
                    placeholder="Nombre de la entidad"
                    className="w-full px-3 py-2.5 text-sm bg-surface-2 border border-border rounded-md text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-colors"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-xs font-medium text-muted-foreground mb-1.5">
                  Correo electrónico
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="tu@institucion.gov"
                  className="w-full px-3 py-2.5 text-sm bg-surface-2 border border-border rounded-md text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-colors"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-xs font-medium text-muted-foreground mb-1.5">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Cuéntanos sobre tu proyecto o necesidad..."
                  className="w-full px-3 py-2.5 text-sm bg-surface-2 border border-border rounded-md text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold bg-primary text-primary-foreground rounded-md hover:bg-brand-red-light transition-colors duration-200"
              >
                Enviar mensaje
                <ArrowRight size={15} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
