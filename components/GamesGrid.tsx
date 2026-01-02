import { games } from '@/lib/games';
import FeaturedGame from './FeaturedGame';
import GameCard from './GameCard';

export default function GamesGrid() {
  const [featured, ...rest] = games;

  return (
    <section className="w-full py-6 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Featured game */}
        {featured && <FeaturedGame game={featured} />}

        {/* More games grid */}
        {rest.length > 0 && (
          <>
            <h3 className="text-lg font-semibold text-white">More Games</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
              {rest.map((game) => (
                <GameCard key={game.id} game={game} />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
