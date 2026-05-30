import { Link, useLocation } from 'react-router-dom'

const NAV_ITEMS = [
  { label: '[01] HOME',    path: '/'        },
  { label: '[02] ABOUT',   path: '/about'   },
  { label: '[03] CONTACT', path: '/contact' },
]

export default function Navbar() {
  const { pathname } = useLocation()

  return (
    <nav
      className="fixed top-8 right-8 z-50 flex items-center gap-6 px-6 py-3 rounded-xl border backdrop-blur-xl"
      style={{
        background: 'rgba(19,19,23,0.8)',
        borderColor: 'rgba(59,75,61,0.3)',
        boxShadow: '0 0 15px rgba(0,255,135,0.1)',
      }}
    >
      {/* Logo */}
      <Link
        to="/"
        className="font-headline text-xl font-semibold tracking-tighter text-primary mr-4"
      >
        EKONG
      </Link>

      {/* Desktop links */}
      <div className="hidden md:flex gap-6 items-center">
        {NAV_ITEMS.map(({ label, path }) => {
          const isActive = pathname === path
          return (
            <Link
              key={path}
              to={path}
              className={`font-mono text-xs uppercase tracking-[0.05em] transition-all duration-150 ease-in-out active:scale-95 ${
                isActive
                  ? 'text-primary-container font-bold border-b-2 border-primary-container glow-sm'
                  : 'text-on-surface-variant hover:text-primary hover:glow-sm'
              }`}
            >
              {label}
            </Link>
          )
        })}
      </div>

      {/* Mobile hamburger */}
      <button className="md:hidden" aria-label="Open menu">
        <span className="material-symbols-outlined text-primary">menu</span>
      </button>
    </nav>
  )
}
