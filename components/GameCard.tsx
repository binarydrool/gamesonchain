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

function GameArtwork({ game }: { game: Game }) {
  return (
    <div className="relative w-full aspect-square rounded-t-xl overflow-hidden bg-zinc-800">
      <img
        src={game.icon}
        alt={game.name}
        className="object-cover w-full h-full"
      />
      <GameOverlay game={game} />
    </div>
  );
}

function GameOverlay({ game }: { game: Game }) {
  return (
    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-3 pt-10">
      <h3 className="font-bold text-white text-xl sm:text-2xl drop-shadow-lg">
        {game.name}
      </h3>
      <p className="text-white/80 text-xs sm:text-sm mt-0.5 drop-shadow">
        {game.tagline}
      </p>
    </div>
  );
}

export default function GameCard({ game }: { game: Game }) {
  return (
    <a
      href={game.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block"
    >
      {/* Card with colored border */}
      <div
        className="rounded-2xl p-[3px] transition-transform duration-200 group-hover:scale-[1.02]"
        style={{
          background: `linear-gradient(180deg, ${game.accentColor}40 0%, ${game.accentColor}20 100%)`,
          '--card-glow-color': game.accentColor,
        } as React.CSSProperties}
      >
        <div className="bg-zinc-900 rounded-[13px] overflow-hidden">
          {/* Artwork area */}
          <GameArtwork game={game} />

          {/* Badges and Play button */}
          <div className="p-3">
            {/* Badges */}
            <div className="flex flex-wrap items-center gap-1.5">
              <span
                className={`px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-medium border ${statusStyles[game.status]}`}
              >
                {statusLabels[game.status]}
              </span>
              <span className="flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-medium bg-blue-500/20 text-blue-400 border border-blue-500/30">
                <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3" viewBox="0 0 24 24" fill="currentColor">
                  <circle cx="12" cy="12" r="10" />
                </svg>
                {game.chain}
              </span>
            </div>
            {/* Play button */}
            <button
              className="play-btn w-full py-2.5 mt-3 rounded-xl font-semibold text-sm"
              style={{
                background: `${game.accentColor}20`,
                color: game.accentColor,
                '--btn-glow-color': game.accentColor,
              } as React.CSSProperties}
            >
              <span className="relative z-10">Play</span>
            </button>
          </div>
        </div>
      </div>
    </a>
  );
}
