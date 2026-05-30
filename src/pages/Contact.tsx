type SocialLink = {
  id:       string
  icon:     string
  platform: string
  handle:   string
  href:     string
}

const SOCIAL_LINKS: SocialLink[] = [
  { id: 'gh', icon: 'GH', platform: 'GITHUB',       handle: '@ekong_core',      href: '#' },
  { id: 'x',  icon: 'X_', platform: 'TWITTER / X',  handle: '@ekong_dev',       href: '#' },
  { id: 'ln', icon: 'LN', platform: 'LINKEDIN',      handle: 'in/ekong-digital', href: '#' },
  { id: 'ig', icon: 'IG', platform: 'INSTAGRAM',     handle: '@ekong.exe',       href: '#' },
]

export default function Contact() {
  return (
    <div
      className="min-h-screen flex flex-col bg-background"
      style={{
        backgroundImage:
          'linear-gradient(rgba(0,255,135,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,135,0.03) 1px, transparent 1px)',
        backgroundSize: '40px 40px',
      }}
    >
      <main className="flex-grow pt-40 pb-20 px-8 flex flex-col items-center">
        <div className="w-full max-w-[560px]">

          {/* Header */}
          <header className="mb-12">
            <div className="font-mono text-sm mb-2" style={{ color: '#00ff87' }}>
              [ 03 ]
            </div>
            <h1 className="font-headline text-[32px] font-semibold text-white inline-block relative pb-2">
              Contact
              <span
                className="absolute bottom-0 left-0 w-full h-[2px]"
                style={{ background: '#00ff87', boxShadow: '0 0 10px #00ff87' }}
              />
            </h1>
            <p className="font-mono text-sm text-outline mt-6 opacity-80">
              // Find me on the following platforms
            </p>
          </header>

          {/* Social cards */}
          <div className="flex flex-col gap-4">
            {SOCIAL_LINKS.map(({ id, icon, platform, handle, href }) => (
              <a
                key={id}
                href={href}
                className="social-card group flex items-center justify-between p-6 border"
                style={{
                  background: '#0d0d14',
                  borderColor: 'rgba(59,75,61,0.3)',
                  borderRadius: '2px',
                }}
              >
                <div className="flex items-center gap-6">
                  <span
                    className="bracket-label font-mono text-sm font-bold"
                    style={{ color: '#00ff87' }}
                  >
                    {icon}
                  </span>
                  <div className="flex flex-col">
                    <span className="font-mono text-lg tracking-wider text-white">
                      {platform}
                    </span>
                    <span
                      className="font-mono text-xs text-outline transition-colors group-hover:text-primary-container"
                    >
                      {handle}
                    </span>
                  </div>
                </div>
                <span
                  className="material-symbols-outlined transition-transform group-hover:translate-x-1"
                  style={{ color: '#f5a623' }}
                >
                  arrow_forward
                </span>
              </a>
            ))}
          </div>

          {/* Decorative footer element */}
          <div
            className="mt-16 pt-12 flex justify-between items-start opacity-40"
            style={{ borderTop: '1px solid rgba(59,75,61,0.2)' }}
          >
            <div className="font-mono text-[10px] leading-tight text-outline">
              EST_CONNECTION: SECURE<br />
              LOC: 40.7128° N, 74.0060° W<br />
              SIGNAL: STABLE
            </div>
            <div className="w-24 h-24 opacity-20 relative">
              <div
                className="absolute inset-0 border animate-pulse"
                style={{ borderColor: '#00ff87' }}
              />
              <div
                className="absolute inset-2 border"
                style={{ borderColor: '#ffb955' }}
              />
            </div>
          </div>

        </div>
      </main>
    </div>
  )
}
