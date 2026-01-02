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

// SVG icon components for games - larger size for card display
const gameIcons: Record<string, React.ReactNode> = {
  seedling: (
    <svg viewBox="0 0 24 24" fill="none" className="w-24 h-24 sm:w-32 sm:h-32">
      <g transform="rotate(-15 12 12)">
        {/* Seed body - balanced teardrop */}
        <path
          d="M12 4C12 4 6 9 6 14.5C6 18 8.5 20 12 20C15.5 20 18 18 18 14.5C18 9 12 4 12 4Z"
          fill="#22c55e"
        />
        {/* Vertical stripes */}
        <path d="M9 9C8.5 11.5 8.5 15 9 17.5" stroke="#16a34a" strokeWidth="0.8" strokeLinecap="round" opacity="0.5" />
        <path d="M12 6C12 9.5 12 14 12 18.5" stroke="#16a34a" strokeWidth="0.8" strokeLinecap="round" opacity="0.5" />
        <path d="M15 9C15.5 11.5 15.5 15 15 17.5" stroke="#16a34a" strokeWidth="0.8" strokeLinecap="round" opacity="0.5" />
        {/* Highlight dot */}
        <circle cx="8.5" cy="11" r="1.5" fill="#4ade80" opacity="0.6" />
      </g>
    </svg>
  ),
};

function GameArtwork({ game }: { game: Game }) {
  // Use SVG icon for games with icon:iconName format
  if (game.icon.startsWith('icon:')) {
    const iconName = game.icon.replace('icon:', '');
    const icon = gameIcons[iconName];
    return (
      <div
        className="relative w-full aspect-square rounded-t-xl flex items-center justify-center"
        style={{ background: `linear-gradient(180deg, ${game.accentColor}22 0%, ${game.accentColor}08 100%)` }}
      >
        {icon}
        <GameOverlay game={game} />
      </div>
    );
  }

  // Image handling - crops to square
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
      <h3 className="font-bold text-white text-sm sm:text-base drop-shadow-lg">
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
        className="rounded-2xl p-[3px] transition-all duration-200 group-hover:scale-[1.02] group-hover:shadow-xl"
        style={{
          background: `linear-gradient(180deg, ${game.accentColor}60 0%, ${game.accentColor}30 100%)`,
        }}
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
              className="w-full py-2.5 mt-3 rounded-xl font-semibold text-sm transition-all duration-200"
              style={{
                background: `${game.accentColor}15`,
                color: game.accentColor,
              }}
            >
              Play
            </button>
          </div>
        </div>
      </div>
    </a>
  );
}
