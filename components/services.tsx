import {
  BrainCircuit,
  Code2,
  Cloud,
  LayoutDashboard,
  ShieldCheck,
  Database,
} from "lucide-react"

const services = [
  {
    icon: BrainCircuit,
    title: "Automatización con IA",
    description:
      "Flujos de trabajo inteligentes que reducen tareas manuales en entidades públicas. Desde procesamiento de documentos hasta decisiones asistidas por IA.",
  },
  {
    icon: LayoutDashboard,
    title: "SaaS Govtech",
    description:
      "Plataformas SaaS diseñadas para las necesidades del gobierno. Cada producto con su propia identidad de marca, respaldado por EquityCorp.",
  },
  {
    icon: Code2,
    title: "Desarrollo a medida",
    description:
      "Software 100% personalizado para los requerimientos únicos de cada institución pública. Desde arquitectura hasta despliegue.",
  },
  {
    icon: Cloud,
    title: "Infraestructura Cloud",
    description:
      "Diseño, migración y gestión de infraestructura cloud segura, escalable y compatible con estándares gubernamentales.",
  },
  {
    icon: ShieldCheck,
    title: "Seguridad y Compliance",
    description:
      "Cumplimiento normativo, auditoría de seguridad y protección de datos sensibles del sector público bajo estándares internacionales.",
  },
  {
    icon: Database,
    title: "Integración de sistemas",
    description:
      "Conectamos sistemas legados con plataformas modernas. APIs, ETL y orquestación de datos entre instituciones gubernamentales.",
  },
]

export function Services() {
  return (
    <section id="services" className="py-28 px-6 border-t border-border" aria-label="Servicios">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-px w-8 bg-primary" />
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">
                Servicios
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-foreground text-balance leading-tight">
              Todo lo que el gobierno
              <br />
              digital necesita.
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm text-sm leading-relaxed md:text-right">
            Un ecosistema completo de servicios tecnológicos especializados para el sector público.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div
                key={service.title}
                className="bg-background p-8 group hover:bg-surface-1 transition-colors duration-300"
              >
                <div className="mb-5">
                  <div className="w-10 h-10 flex items-center justify-center rounded-md bg-surface-2 group-hover:bg-primary/10 transition-colors duration-300">
                    <Icon size={20} className="text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                  </div>
                </div>
                <h3 className="text-base font-bold text-foreground mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            )
          })}
        </div>

        {/* Bottom statement */}
        <div className="mt-16 p-8 border border-border rounded-lg glow-red">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <p className="text-xl md:text-2xl font-bold text-foreground text-balance">
                Cada solución que construimos lleva la marca de nuestros clientes.
                <span className="text-primary"> Nosotros somos el motor detrás.</span>
              </p>
            </div>
            <div className="shrink-0">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Recurso%207-WaLxlzBzqmbN5Bg61K2dcX8tiOptTR.png"
                alt="EquityCorp"
                className="h-7 w-auto opacity-60"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
