'use client';

import { useState } from 'react';

const filters = ['All', 'Live', 'Testnet'] as const;

export default function SearchFilter() {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  return (
    <section className="w-full py-3 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap items-center gap-2">
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
          <a
            href="https://console.optimism.io/faucet"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 rounded-full text-sm font-medium bg-purple-500/20 text-purple-400 border border-purple-500/30 hover:bg-purple-500/30 transition-colors inline-flex items-center gap-1.5"
          >
            <svg className="w-3.5 h-3.5" viewBox="0 0 320 512" fill="currentColor">
              <path d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z" />
            </svg>
            Get Testnet ETH
          </a>
        </div>
      </div>
    </section>
  );
}
