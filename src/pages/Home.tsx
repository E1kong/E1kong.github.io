import { useNavigate } from 'react-router-dom'
import BlackHole from '../components/BlackHole'
import ParticleCanvas from '../components/ParticleCanvas'

export default function Home() {
  const navigate = useNavigate()

  return (
    <div
      className="relative min-h-screen w-full overflow-hidden"
      style={{
        background: 'radial-gradient(circle at center, #0a1a10 0%, #050508 100%)',
      }}
    >
      <ParticleCanvas />

      {/* Decorative grid lines */}
      <div className="absolute top-0 left-1/2 w-px h-32 bg-gradient-to-b from-primary-container/20 to-transparent" />
      <div className="absolute bottom-0 left-1/2 w-px h-32 bg-gradient-to-t from-primary-container/20 to-transparent" />
      <div className="absolute left-0 top-1/2 h-px w-32 bg-gradient-to-r from-primary-container/20 to-transparent" />
      <div className="absolute right-0 top-1/2 h-px w-32 bg-gradient-to-l from-primary-container/20 to-transparent" />

      {/* Hero content */}
      <main className="relative z-10 min-h-screen w-full flex flex-col items-center justify-center px-8">
        {/* Black hole animation */}
        <BlackHole />

        {/* Identity */}
        <div className="text-center">
          <h1
            className="font-orbitron text-[56px] md:text-[80px] font-bold text-white tracking-widest uppercase mb-2 glitch cursor-default"
          >
            ekong
          </h1>
          <p className="font-mono text-[13px] tracking-[0.2em] mb-12"
             style={{ color: '#00ff87' }}>
            // DESIGNER · DEVELOPER · CREATOR
          </p>

          {/* CTA button */}
          <button
            onClick={() => navigate('/contact')}
            className="font-sans font-semibold text-sm uppercase py-4 px-12 transition-all duration-300 transform active:scale-95"
            style={{
              background: '#f5a623',
              color: '#050508',
              borderRadius: 0,
              boxShadow: '0 0 20px rgba(245,166,35,0.4)',
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLButtonElement
              el.style.background = '#ffcf40'
              el.style.boxShadow = '0 0 35px rgba(245,166,35,0.6)'
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLButtonElement
              el.style.background = '#f5a623'
              el.style.boxShadow = '0 0 20px rgba(245,166,35,0.4)'
            }}
          >
            CONTACT ME
          </button>
        </div>
      </main>
    </div>
  )
}
