import logoImg from "@assets/Design_sem_nome_1778711135652.jpeg";

const links = [
  {
    id: "instagram",
    label: "Instagram",
    sub: "@benettix_co",
    href: "https://instagram.com/benettix_co",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
      </svg>
    ),
    gradient: "linear-gradient(135deg, #833ab4, #fd1d1d, #fcb045)",
    glow: "rgba(253, 29, 29, 0.45)",
    delay: "0.1s",
  },
  {
    id: "youtube",
    label: "YouTube",
    sub: "Assista meus vídeos",
    href: "https://youtube.com/@benettix_co",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    ),
    gradient: "linear-gradient(135deg, #c4302b, #ff0000)",
    glow: "rgba(255, 0, 0, 0.4)",
    delay: "0.2s",
  },
  {
    id: "website",
    label: "Site Pessoal",
    sub: "Visite meu portfólio",
    href: "https://benettix.co",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <circle cx="12" cy="12" r="10"/>
        <line x1="2" y1="12" x2="22" y2="12"/>
        <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>
      </svg>
    ),
    gradient: "linear-gradient(135deg, #5b2da8, #a855f7)",
    glow: "rgba(168, 85, 247, 0.45)",
    delay: "0.3s",
  },
  {
    id: "whatsapp",
    label: "Fale Comigo",
    sub: "(11) 98826-6671",
    href: "https://wa.me/5511988266671",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    ),
    gradient: "linear-gradient(135deg, #128c7e, #25d366)",
    glow: "rgba(37, 211, 102, 0.4)",
    delay: "0.4s",
  },
];

function Orb({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return <div className={`orb ${className ?? ""}`} style={style} />;
}

export default function App() {
  return (
    <div
      className="min-h-screen w-full relative flex flex-col items-center justify-start py-12 px-4 overflow-hidden"
      style={{ background: "linear-gradient(160deg, #0d0520 0%, #1a0a2e 40%, #0d0520 100%)" }}
    >
      {/* Background orbs */}
      <Orb style={{ width: 380, height: 380, background: "#e91e8c", top: -100, left: -100 }} />
      <Orb style={{ width: 320, height: 320, background: "#5b2da8", bottom: 60, right: -80 }} />
      <Orb style={{ width: 200, height: 200, background: "#a855f7", top: "45%", left: "55%" }} />

      {/* Stars / sparkles */}
      {[...Array(18)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            width: Math.random() * 3 + 1,
            height: Math.random() * 3 + 1,
            background: i % 3 === 0 ? "#e91e8c" : i % 3 === 1 ? "#a855f7" : "#fff",
            opacity: Math.random() * 0.6 + 0.2,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
        />
      ))}

      {/* Card */}
      <div
        className="relative z-10 w-full max-w-sm flex flex-col items-center"
        style={{ backdropFilter: "blur(12px)" }}
      >
        {/* Logo section */}
        <div className="animate-fade-in-up" style={{ animationDelay: "0s" }}>
          <div className="relative mb-6 animate-float">
            {/* Spinning gradient ring */}
            <div
              className="absolute inset-0 rounded-full animate-spin-slow"
              style={{
                background: "conic-gradient(from 0deg, #e91e8c, #a855f7, #5b2da8, #e91e8c)",
                padding: 3,
                borderRadius: "50%",
                margin: -3,
              }}
            />
            {/* Glow pulse */}
            <div
              className="absolute inset-0 rounded-full animate-pulse-glow"
              style={{ margin: -6 }}
            />
            {/* Logo container */}
            <div
              className="relative rounded-full overflow-hidden"
              style={{
                width: 130,
                height: 130,
                border: "3px solid transparent",
                background:
                  "linear-gradient(#1a0a2e, #1a0a2e) padding-box, linear-gradient(135deg, #e91e8c, #a855f7, #5b2da8) border-box",
              }}
            >
              <img
                src={logoImg}
                alt="Benettix logo"
                className="w-full h-full object-cover"
                style={{ objectPosition: "center" }}
              />
            </div>
          </div>
        </div>

        {/* Name */}
        <div className="animate-fade-in-up mb-1" style={{ animationDelay: "0.05s" }}>
          <h1
            className="text-3xl font-black tracking-tight gradient-text"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            benettix_co
          </h1>
        </div>

        {/* Tagline */}
        <div className="animate-fade-in-up mb-8" style={{ animationDelay: "0.08s" }}>
          <p className="text-sm text-center" style={{ color: "rgba(220,180,255,0.7)" }}>
            Arte que fala por si
          </p>
        </div>

        {/* Divider */}
        <div
          className="w-16 h-px mb-8 animate-fade-in-up"
          style={{
            animationDelay: "0.09s",
            background: "linear-gradient(90deg, transparent, #e91e8c, transparent)",
          }}
        />

        {/* Link buttons */}
        <div className="w-full flex flex-col gap-4">
          {links.map((link) => (
            <a
              key={link.id}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="link-btn animate-fade-in-up w-full flex items-center gap-4 rounded-2xl px-5 py-4"
              style={{
                animationDelay: link.delay,
                background: link.gradient,
                boxShadow: `0 4px 24px ${link.glow}, 0 0 0 1px rgba(255,255,255,0.08) inset`,
                color: "#fff",
                textDecoration: "none",
              }}
            >
              <div
                className="flex-shrink-0 flex items-center justify-center rounded-xl"
                style={{
                  width: 44,
                  height: 44,
                  background: "rgba(0,0,0,0.25)",
                  backdropFilter: "blur(4px)",
                }}
              >
                {link.icon}
              </div>
              <div className="flex flex-col items-start min-w-0">
                <span className="font-bold text-base leading-tight">{link.label}</span>
                <span className="text-xs leading-tight" style={{ opacity: 0.85 }}>
                  {link.sub}
                </span>
              </div>
              <div className="ml-auto flex-shrink-0 opacity-70">
                <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </a>
          ))}
        </div>

        {/* Footer */}
        <div
          className="animate-fade-in-up mt-10 text-xs"
          style={{ animationDelay: "0.55s", color: "rgba(180,130,220,0.45)" }}
        >
          © 2026 Benettix Co. Todos os direitos reservados.
        </div>
      </div>
    </div>
  );
}
