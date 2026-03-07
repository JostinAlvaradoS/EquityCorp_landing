import Link from "next/link"

const footerLinks = {
  Compañía: [
    { label: "Nosotros", href: "#about" },
    { label: "Productos", href: "#products" },
    { label: "Servicios", href: "#services" },
    { label: "Contacto", href: "#contact" },
  ],
  Soluciones: [
    { label: "GPI — Gestión Pública Integrada", href: "#products" },
    { label: "Automatización IA", href: "#services" },
    { label: "SaaS Govtech", href: "#services" },
    { label: "Infraestructura Cloud", href: "#services" },
  ],
  Legal: [
    { label: "Política de privacidad", href: "#" },
    { label: "Términos de servicio", href: "#" },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-16 bg-background" aria-label="Pie de página">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand column */}
          <div className="md:col-span-1">
            <img
              src="/logo_blanco.png"
              alt="EquityCorp"
              className="h-7 w-auto mb-4"
            />
            <p className="text-xs text-muted-foreground leading-relaxed max-w-[200px]">
              Tecnología de vanguardia para transformar el sector público latinoamericano.
            </p>
            <div className="mt-4 flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span className="text-xs text-muted-foreground">GovTech Solutions</span>
            </div>
          </div>

          {/* Links columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-xs font-semibold tracking-[0.15em] uppercase text-muted-foreground mb-4">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-xs text-muted-foreground hover:text-foreground transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} EquityCorp. Todos los derechos reservados.
          </p>
          <p className="text-xs text-muted-foreground">
            Construido con propósito para el{" "}
            <span className="text-primary font-medium">sector público</span>.
          </p>
        </div>
      </div>
    </footer>
  )
}
