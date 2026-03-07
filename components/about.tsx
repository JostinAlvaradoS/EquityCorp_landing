import { Building2, Globe2, Layers } from "lucide-react"

const pillars = [
  {
    icon: Layers,
    title: "Ecosistema de marcas",
    description:
      "Cada solución que construimos opera bajo su propia identidad y marca. EquityCorp es el motor invisible que potencia cada producto.",
  },
  {
    icon: Building2,
    title: "Foco 100% gubernamental",
    description:
      "No somos una empresa de tecnología genérica. Todo lo que hacemos está diseñado para las complejidades, normativas y necesidades del sector público.",
  },
  {
    icon: Globe2,
    title: "Visión latinoamericana",
    description:
      "Entendemos la realidad de los gobiernos de la región. Construimos soluciones que se adaptan al contexto, presupuesto y cultura de cada institución.",
  },
]

export function About() {
  return (
    <section id="about" className="py-28 px-6 border-t border-border" aria-label="Sobre EquityCorp">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="h-px w-8 bg-primary" />
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">
                Nosotros
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-foreground text-balance leading-tight mb-8">
              El motor detrás
              <br />
              del gobierno digital.
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              EquityCorp es una startup GovTech que desarrolla un ecosistema de
              soluciones digitales para entidades públicas. No construimos
              un solo producto — construimos múltiples soluciones especializadas,
              cada una con su propia marca e identidad.
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Nuestra misión es democratizar el acceso a tecnología de vanguardia
              en el sector público latinoamericano, reduciendo la brecha entre
              las instituciones de gobierno y las herramientas que necesitan
              para servir mejor a los ciudadanos.
            </p>
          </div>

          {/* Right: pillars */}
          <div className="space-y-4">
            {pillars.map((pillar) => {
              const Icon = pillar.icon
              return (
                <div
                  key={pillar.title}
                  className="flex gap-5 p-6 rounded-xl border border-border bg-surface-1 hover:border-primary/20 transition-colors duration-300"
                >
                  <div className="w-9 h-9 rounded-lg bg-surface-2 flex items-center justify-center shrink-0 mt-0.5">
                    <Icon size={18} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-foreground mb-2">{pillar.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{pillar.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Marquee strip */}
        <div className="mt-20 pt-10 border-t border-border overflow-hidden">
          <div className="flex items-center gap-3 flex-wrap">
            <span className="text-xs text-muted-foreground/40 uppercase tracking-widest font-medium shrink-0">
              Powered by EquityCorp
            </span>
            {["GPI", "DataGov", "LegalAI", "CiudadApp", "AuditTrack", "BudgetOps", "DocuGov", "RegulateAI"].map(
              (tag) => (
                <span
                  key={tag}
                  className="text-xs font-semibold text-muted-foreground border border-border px-3 py-1 rounded-full hover:border-primary/30 hover:text-primary transition-colors duration-200 cursor-default"
                >
                  {tag}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
