'use client';

import { useState } from 'react';

const filters = ['All', 'Live', 'Testnet', 'Coming Soon'] as const;

export default function SearchFilter() {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  return (
    <section className="w-full py-3 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap gap-2">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                activeFilter === filter
                  ? 'bg-accent text-black'
                  : 'bg-card text-muted hover:text-white border border-border'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
