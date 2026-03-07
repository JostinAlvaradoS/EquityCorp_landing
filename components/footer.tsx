import Link from "next/link"
import { FacebookIcon, LinkedinIcon } from "lucide-react"

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
              width="299"
              height="56"
              style={{ width: '28px', height: 'auto' }}
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
        <div className="pt-8 border-t border-border flex items-center justify-between">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} EquityCorp. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-4">
            <Link href="https://www.linkedin.com/company/equitycorp" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <LinkedinIcon className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
            </Link>
            <Link href="https://x.com/equitycorp" target="_blank" rel="noopener noreferrer" aria-label="X">
              <svg className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.5 3H21L13.5 11L21 21H17.5L12 14.5L6.5 21H3L10.5 13L3 3H6.5L12 9.5L17.5 3Z" fill="currentColor" />
              </svg>
            </Link>
            <Link href="https://facebook.com/equitycorp" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FacebookIcon className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
