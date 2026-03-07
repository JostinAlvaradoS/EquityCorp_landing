import { ArrowUpRight, Zap, Clock, CheckCircle2 } from "lucide-react"
import Link from "next/link"

const upcomingProducts = [
  {
    name: "DataGov",
    category: "Analítica de datos",
    status: "Próximamente",
    description: "Plataforma de inteligencia de datos para instituciones públicas.",
  },
  {
    name: "LegalAI",
    category: "IA Legal",
    status: "Próximamente",
    description: "Automatización de documentos legales y contratos gubernamentales.",
  },
  {
    name: "CiudadApp",
    category: "Ciudadano digital",
    status: "Próximamente",
    description: "Portal omnicanal de servicios al ciudadano.",
  },
]

const gpiFeatures = [
  "Gestión unificada de proyectos gubernamentales",
  "Seguimiento presupuestario en tiempo real",
  "Colaboración entre entidades públicas",
  "Reportería y cumplimiento normativo",
  "Integración con sistemas existentes",
  "Panel de auditoría y trazabilidad",
]

export function Products() {
  return (
    <section id="products" className="py-28 px-6 border-t border-border" aria-label="Productos">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-4">
            <div className="h-px w-8 bg-primary" />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">
              Ecosistema de productos
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-foreground text-balance leading-tight max-w-3xl">
            Múltiples soluciones,
            <br />
            una sola plataforma.
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl text-sm leading-relaxed">
            Cada producto es una marca independiente con su propio posicionamiento,
            construida sobre la base tecnológica de EquityCorp.
          </p>
        </div>

        {/* GPI Featured card */}
        <div className="relative rounded-xl border border-primary/30 overflow-hidden mb-6 glow-red">
          {/* Background */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at 80% 50%, rgba(192,57,43,0.08) 0%, transparent 70%)",
            }}
            aria-hidden="true"
          />

          <div className="relative grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-0">
            {/* Left content */}
            <div className="p-8 lg:p-12 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-primary/20">
              {/* Product badge */}
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" aria-hidden="true" />
                    Producto insignia
                  </span>
                </div>

                {/* GPI Logo */}
                <div className="mb-6">
                  <div className="inline-flex items-center gap-4">
                    <img 
                      src="/gpi_logo.png" 
                      alt="GPI Logo" 
                      className="h-35 w-auto"
                    />
                  </div>
                </div>

                <p className="text-sm text-muted-foreground leading-snug mb-4 max-w-xs">
                  La plataforma integral para la gestión de proyectos, presupuestos
                  y colaboración entre entidades del sector público. Diseñada para
                  la realidad de los gobiernos latinoamericanos.
                </p>

                <ul className="space-y-2 mb-8">
                  {gpiFeatures.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm text-foreground">
                      <CheckCircle2 size={14} className="text-primary shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center gap-4">
                <Link
                  href="#contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold bg-primary text-primary-foreground rounded-md hover:bg-brand-red-light transition-colors"
                >
                  Solicitar acceso anticipado
                  <ArrowUpRight size={15} />
                </Link>
                <Link
                  href="https://gestionpublica.ec"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-primary hover:text-brand-red-light transition-colors font-medium"
                >
                  Conoce mas →
                </Link>
              </div>
            </div>

            {/* Right: GPI Image preview */}
            <div className="p-6 lg:p-8 flex items-center justify-center">
              <img 
                src="/gpi.png" 
                alt="GPI Platform Preview" 
                className="w-full h-auto rounded-lg shadow-lg object-cover"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
