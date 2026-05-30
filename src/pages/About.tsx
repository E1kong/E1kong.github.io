import { useEffect, useRef } from 'react'
import MagicBento from '../components/MagicBento'

type InfoRow = { label: string; value: string | React.ReactNode }

const INFO_ROWS: InfoRow[] = [
  { label: 'Name',         value: 'EKONG_SAMUEL' },
  { label: 'Role',         value: 'Designer & Developer' },
  {
    label: 'Location',
    value: (
      <div className="flex items-center gap-3">
        <span>Berlin, GER</span>
        <div
          className="w-2 h-2 rounded-full animate-pulse"
          style={{ background: '#00ff87', boxShadow: '0 0 8px #00ff87' }}
        />
      </div>
    ),
  },
  { label: 'Education',    value: 'MSc. Human-Computer Interaction' },
  {
    label: 'Availability',
    value: (
      <div
        className="px-4 py-1 border font-mono text-xs"
        style={{
          background: 'rgba(0,255,135,0.1)',
          borderColor: 'rgba(0,255,135,0.5)',
          color: '#00ff87',
        }}
      >
        OPEN_FOR_COMMISSIONS_2026
      </div>
    ),
  },
]

export default function About() {
  const gridRef = useRef<HTMLDivElement>(null)

  // Subtle parallax on mousemove
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!gridRef.current) return
      const x = e.clientX / window.innerWidth
      const y = e.clientY / window.innerHeight
      gridRef.current.style.backgroundPosition = `${x * 20}px ${y * 20}px`
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <div ref={gridRef} className="tech-grid min-h-screen flex flex-col bg-background">
      <main className="flex-grow flex flex-col px-8 py-24">
        {/* ── Two-column info section ── */}
        <div className="max-w-[1200px] w-full grid grid-cols-1 md:grid-cols-[38%_57%] gap-12 items-center relative mx-auto mb-24">

          {/* ── Left Column ── */}
          <div className="relative flex flex-col gap-6">
            {/* Ghost watermark */}
            <div className="absolute -left-24 top-1/2 -translate-y-1/2 hidden lg:block">
              <span
                className="rotated-ghost text-[140px] font-bold tracking-widest font-headline opacity-10"
              >
                ABOUT
              </span>
            </div>

            <div className="z-10">
              <p className="font-mono text-xs tracking-[0.2em] mb-2" style={{ color: '#00ff87' }}>
                [ 02 ]
              </p>
              <h1 className="font-headline text-[64px] font-bold text-on-surface relative inline-block mb-8 leading-tight">
                About Me
                <span
                  className="absolute bottom-0 left-0 w-full h-[2px]"
                  style={{
                    background: '#00ff87',
                    boxShadow: '0 0 10px #00ff87',
                  }}
                />
              </h1>
              <div className="font-mono text-sm text-on-surface-variant leading-relaxed max-w-md">
                <p className="mb-4">
                  // I am a digital architect specializing in high-fidelity interfaces and
                  performance-driven system design. My methodology sits at the intersection
                  of brutalist aesthetics and technical precision.
                </p>
                <p>
                  // Every pixel is accounted for. Every interaction is engineered. I build
                  digital experiences that aren&apos;t just seen—they&apos;re felt.{' '}
                  <span className="custom-cursor" />
                </p>
              </div>
            </div>

            {/* Decorative terminal panel */}
            <div
              className="hidden md:block mt-12 p-8 border relative bracket-corner"
              style={{
                borderColor: 'rgba(59,75,61,0.2)',
                background: 'rgba(14,14,18,0.5)',
              }}
            >
              <div className="flex gap-4 items-center">
                <div
                  className="w-12 h-12 flex items-center justify-center border"
                  style={{
                    background: 'rgba(0,255,135,0.1)',
                    borderColor: '#00ff87',
                  }}
                >
                  <span
                    className="material-symbols-outlined"
                    style={{
                      color: '#00ff87',
                      fontVariationSettings: "'FILL' 1",
                    }}
                  >
                    terminal
                  </span>
                </div>
                <div>
                  <p className="font-mono text-[10px] text-outline uppercase tracking-widest">
                    SYSTEM_VERSION
                  </p>
                  <p className="font-mono text-sm text-on-surface">EKONG_CORE_v2.4.0</p>
                </div>
              </div>
            </div>
          </div>

          {/* ── Right Column ── */}
          <div
            className="flex flex-col border-l pl-0 md:pl-12"
            style={{ borderColor: 'rgba(59,75,61,0.3)' }}
          >
            <div>
              {INFO_ROWS.map(({ label, value }, i) => (
                <div
                  key={label}
                  className="info-row py-6 flex flex-col md:flex-row md:items-center justify-between gap-2 group transition-all"
                  style={{
                    borderBottom:
                      i < INFO_ROWS.length - 1 ? '1px solid rgba(59,75,61,0.2)' : undefined,
                  }}
                >
                  <span
                    className="info-label font-mono uppercase text-xs tracking-[0.2em] transition-all duration-300"
                    style={{ color: '#00ff87' }}
                  >
                    {label}
                  </span>
                  <span className="font-headline text-2xl font-semibold text-on-surface text-right">
                    {value}
                  </span>
                </div>
              ))}
            </div>

            {/* Terminal window placeholder (no photo) */}
            <div className="mt-12 relative overflow-hidden group">
              <div
                className="w-full h-64 relative"
                style={{ background: '#0a0a0a', border: '1px solid rgba(59,75,61,0.3)' }}
              >
                {/* macOS-style titlebar */}
                <div
                  className="flex items-center gap-2 p-3"
                  style={{ borderBottom: '1px solid rgba(59,75,61,0.2)' }}
                >
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                  <span className="ml-4 font-mono text-xs text-outline/60">~/ ekong_core</span>
                </div>
                {/* Terminal lines */}
                <div className="p-4 font-mono text-xs space-y-1" style={{ color: 'rgba(0,255,135,0.7)' }}>
                  <p>
                    <span className="text-outline/60">$</span> ./init_session --user ekong
                  </p>
                  <p style={{ color: '#00ff87' }}>SYSTEM ONLINE. ALL NODES ACTIVE.</p>
                  <p>
                    <span className="text-outline/60">$</span> ls -la ./projects
                  </p>
                  <p className="text-on-surface-variant">drwxr-xr-x  12 ekong  staff  384 May 30 2026</p>
                  <p className="text-on-surface-variant">drwxr-xr-x   8 ekong  staff  256 May 30 2026</p>
                  <p>
                    <span className="text-outline/60">$</span>{' '}
                    <span className="custom-cursor" />
                  </p>
                </div>
                {/* Hover border */}
                <div
                  className="absolute inset-0 border transition-colors duration-500 group-hover:border-primary-container pointer-events-none"
                  style={{ borderColor: 'rgba(59,75,61,0.3)' }}
                />
                {/* Asset ID badge */}
                <div
                  className="absolute bottom-4 left-4 p-2 border backdrop-blur-md"
                  style={{
                    background: 'rgba(5,5,8,0.8)',
                    borderColor: 'rgba(59,75,61,0.3)',
                  }}
                >
                  <p className="font-mono text-[10px] uppercase" style={{ color: '#00ff87' }}>
                    Asset_ID: 0x2A9F
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      {/* ── MagicBento Capabilities Section ── */}
      <section className="px-8 pb-24">
        <div className="max-w-[1200px] mx-auto">
          {/* Section header */}
          <div className="mb-8">
            <p className="font-mono text-xs tracking-[0.2em] mb-2" style={{ color: '#00ff87' }}>
              [ CAPABILITIES ]
            </p>
            <h2 className="font-headline text-2xl font-semibold text-on-surface relative inline-block pb-2">
              What I Do
              <span
                className="absolute bottom-0 left-0 w-full h-[2px]"
                style={{ background: '#00ff87', boxShadow: '0 0 10px #00ff87' }}
              />
            </h2>
          </div>

          <MagicBento
            textAutoHide={true}
            enableStars
            enableSpotlight
            enableBorderGlow={true}
            enableTilt={false}
            enableMagnetism={false}
            clickEffect
            spotlightRadius={400}
            particleCount={12}
            glowColor="0, 255, 135"
            disableAnimations={false}
          />
        </div>
      </section>

      </main>

      {/* Ambient glow blobs */}
      <div
        className="fixed top-1/4 -right-1/4 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,255,135,0.05) 0%, rgba(0,0,0,0) 70%)' }}
      />
      <div
        className="fixed bottom-1/4 -left-1/4 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,255,135,0.03) 0%, rgba(0,0,0,0) 70%)' }}
      />
    </div>
  )
}
