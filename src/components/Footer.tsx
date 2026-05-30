export default function Footer() {
  return (
    <footer
      className="w-full py-6 px-8 flex flex-col md:flex-row justify-between items-center gap-4 border-t"
      style={{ borderColor: 'rgba(0,255,135,0.2)', background: 'transparent' }}
    >
      <div className="font-mono text-xs text-outline">
        © 2026 EKONG_CORE. ALL RIGHTS RESERVED.
      </div>
      <div className="flex gap-8">
        <a
          href="#"
          className="font-mono text-xs text-outline hover:text-primary duration-200 uppercase tracking-tight"
        >
          TERMINAL
        </a>
        <a
          href="#"
          className="font-mono text-xs text-outline hover:text-primary duration-200 uppercase tracking-tight"
        >
          SYSTEM_LOGS
        </a>
        <a
          href="#"
          className="font-mono text-xs text-outline hover:text-primary duration-200 uppercase tracking-tight"
        >
          ENCRYPTED_COMMS
        </a>
      </div>
    </footer>
  )
}
