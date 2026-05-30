export default function BlackHole() {
  return (
    <div className="flex flex-col items-center gap-6 mb-12">
      <div className="black-hole-container">
        <div className="bh-halo" />
        <div className="bh-ring-outer" />
        <div className="bh-ring-middle" />
        <div className="bh-ring-inner" />
      </div>
      <p className="font-mono text-[10px] tracking-[0.3em] uppercase"
         style={{ color: 'rgba(0,255,135,0.5)' }}>
        [ ROTATING BLACK HOLE — CSS ANIMATION ]
      </p>
    </div>
  )
}
