export default function Header() {
  return (
    <header className="w-full py-4 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto flex items-center gap-4">
        <a href="/" className="text-xl font-bold tracking-tight shrink-0">
          <span className="text-white">Games</span>
          <span className="text-accent">OnChain</span>
        </a>
        <div className="flex-1 max-w-xl">
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
    </header>
  );
}
