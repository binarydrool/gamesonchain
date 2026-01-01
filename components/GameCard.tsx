import Image from 'next/image';
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

export default function GameCard({ game }: { game: Game }) {
  return (
    <a
      href={game.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block bg-card border border-border rounded-2xl p-4 transition-all duration-200 hover:-translate-y-1 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/5"
    >
      <div className="flex items-start gap-4">
        <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-zinc-800 flex-shrink-0">
          <Image
            src={game.icon}
            alt={game.name}
            fill
            className="object-cover"
            sizes="64px"
          />
        </div>
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
