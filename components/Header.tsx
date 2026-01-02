'use client';

import { useState } from 'react';

const filters = ['All', 'Live', 'Testnet', 'Coming Soon'] as const;

export default function Header() {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Top row: Logo + Tagline + Search */}
        <div className="flex items-center gap-4 h-16">
          <div className="shrink-0">
            <a href="/" className="text-xl font-bold tracking-tight">
              <span className="text-white">Games</span>
              <span className="text-accent">OnChain</span>
            </a>
            <p className="text-muted text-xs">
              True ownership. Real rewards. No compromise.
            </p>
          </div>

          {/* Search bar */}
          <div className="flex-1 max-w-md ml-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search games..."
                className="w-full bg-card border border-border rounded-lg px-3 py-1.5 text-sm text-white placeholder:text-muted focus:outline-none focus:border-accent transition-colors"
              />
              <svg
                className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted"
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
          </div>
        </div>

        {/* Filters row */}
        <div className="flex items-center pb-4">
          <div className="flex flex-wrap gap-1.5">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
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
      </div>
    </header>
  );
}
