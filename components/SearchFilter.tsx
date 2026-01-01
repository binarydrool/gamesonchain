'use client';

import { useState } from 'react';

const filters = ['All', 'Live', 'Testnet', 'Coming Soon'] as const;

export default function SearchFilter() {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  return (
    <section className="w-full py-8 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto space-y-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search games..."
            className="w-full bg-card border border-border rounded-xl px-4 py-3 text-white placeholder:text-muted focus:outline-none focus:border-accent transition-colors"
          />
          <svg
            className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <div className="flex flex-wrap gap-2">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
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
