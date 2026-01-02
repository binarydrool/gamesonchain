import { Game } from '@/lib/games';

const statusStyles = {
  live: 'bg-green-500/20 text-green-400 border-green-500/30',
  testnet: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
  'coming-soon': 'bg-zinc-500/20 text-zinc-400 border-zinc-500/30',
};

const statusLabels = {
  live: 'Live',
  testnet: 'Testnet',
  'coming-soon': 'Coming Soon',
};

export default function FeaturedGame({ game }: { game: Game }) {
  return (
    <a
      href={game.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block"
    >
      <div
        className="relative rounded-2xl overflow-hidden transition-transform duration-300 group-hover:scale-[1.01]"
        style={{
          background: `linear-gradient(135deg, ${game.accentColor}15 0%, transparent 50%)`,
        }}
      >
        {/* Main container */}
        <div className="flex flex-col lg:flex-row">
          {/* Image section */}
          <div className="relative lg:w-2/3">
            <div className="aspect-video lg:aspect-[16/10] overflow-hidden">
              <img
                src={game.icon}
                alt={game.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-black/90" />

            {/* Mobile info overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6 lg:hidden">
              <div className="flex items-center gap-2 mb-3">
                <span className={`px-3 py-1 rounded-full text-xs font-medium border ${statusStyles[game.status]}`}>
                  {statusLabels[game.status]}
                </span>
                <span className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-blue-500/20 text-blue-400 border border-blue-500/30">
                  <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
                    <circle cx="12" cy="12" r="10" />
                  </svg>
                  {game.chain}
                </span>
              </div>
              <h2 className="text-3xl font-bold text-white mb-2">{game.name}</h2>
              <p className="text-white/80 text-base mb-4">{game.tagline}</p>
              <button
                className="play-btn px-8 py-3 rounded-xl font-semibold text-base"
                style={{
                  background: game.accentColor,
                  color: 'black',
                  '--btn-glow-color': game.accentColor,
                } as React.CSSProperties}
              >
                <span className="relative z-10">Play Now</span>
              </button>
            </div>
          </div>

          {/* Desktop info section */}
          <div className="hidden lg:flex lg:w-1/3 flex-col justify-center p-8 bg-gradient-to-r from-black/50 to-transparent">
            <div className="flex items-center gap-2 mb-4">
              <span className={`px-3 py-1 rounded-full text-xs font-medium border ${statusStyles[game.status]}`}>
                {statusLabels[game.status]}
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-blue-500/20 text-blue-400 border border-blue-500/30">
                <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
                  <circle cx="12" cy="12" r="10" />
                </svg>
                {game.chain}
              </span>
            </div>
            <h2 className="text-4xl font-bold text-white mb-3">{game.name}</h2>
            <p className="text-white/70 text-lg mb-6 leading-relaxed">{game.tagline}</p>
            <button
              className="play-btn w-full py-4 rounded-xl font-semibold text-lg"
              style={{
                background: game.accentColor,
                color: 'black',
                '--btn-glow-color': game.accentColor,
              } as React.CSSProperties}
            >
              <span className="relative z-10">Play Now</span>
            </button>
            <p className="text-white/40 text-sm mt-4 text-center">Free to play on Base Testnet</p>
          </div>
        </div>

        {/* Decorative border glow */}
        <div
          className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            boxShadow: `inset 0 0 0 1px ${game.accentColor}40, 0 0 40px ${game.accentColor}20`,
          }}
        />
      </div>
    </a>
  );
}
