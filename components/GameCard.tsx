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

// SVG icon components for games
const gameIcons: Record<string, React.ReactNode> = {
  seedling: (
    <svg viewBox="0 0 24 24" fill="none" className="w-12 h-12">
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

function GameIcon({ game }: { game: Game }) {
  // Use SVG icon for games with icon:iconName format
  if (game.icon.startsWith('icon:')) {
    const iconName = game.icon.replace('icon:', '');
    const icon = gameIcons[iconName];
    return (
      <div
        className="w-16 h-16 rounded-xl flex items-center justify-center"
        style={{ background: `linear-gradient(135deg, ${game.accentColor}33, ${game.accentColor}11)` }}
      >
        {icon}
      </div>
    );
  }

  // Default image handling for custom icons
  return (
    <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-zinc-800 flex-shrink-0">
      <img
        src={game.icon}
        alt={game.name}
        className="object-cover w-full h-full"
      />
    </div>
  );
}

export default function GameCard({ game }: { game: Game }) {
  return (
    <a
      href={game.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block bg-card border border-border rounded-2xl p-4 transition-all duration-200 hover:-translate-y-1 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/5"
    >
      <div className="flex items-start gap-4">
        <GameIcon game={game} />
        <div className="flex-1 min-w-0">
          <h3 className="font-bold text-white text-lg group-hover:text-accent transition-colors">
            {game.name}
          </h3>
          <p className="text-muted text-sm line-clamp-1 mt-0.5">
            {game.tagline}
          </p>
          <div className="flex items-center gap-2 mt-3">
            <span
              className={`px-2.5 py-0.5 rounded-full text-xs font-medium border ${statusStyles[game.status]}`}
            >
              {statusLabels[game.status]}
            </span>
            <span className="flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-500/20 text-blue-400 border border-blue-500/30">
              <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
                <circle cx="12" cy="12" r="10" />
              </svg>
              {game.chain}
            </span>
          </div>
        </div>
      </div>
    </a>
  );
}
