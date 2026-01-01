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
    <svg viewBox="0 0 24 24" fill="none" className="w-10 h-10">
      <path
        d="M12 22V12M12 12C12 12 12 8 8 4C8 4 8 10 12 12ZM12 12C12 12 12 8 16 4C16 4 16 10 12 12Z"
        stroke="#22c55e"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 22C12 22 7 20 7 16"
        stroke="#22c55e"
        strokeWidth="2"
        strokeLinecap="round"
      />
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
