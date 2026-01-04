export default function Header() {
  return (
    <header className="w-full pt-8 pb-6 px-4 sm:px-6 border-b border-border/50">
      <div className="max-w-6xl mx-auto">
        {/* Logo and nav */}
        <div className="flex items-center justify-between">
          <a href="/" className="text-2xl font-bold tracking-tight">
            <span className="text-white">Games</span>
            <span className="text-cyan-400">OnChain</span>
          </a>
          <nav className="flex items-center gap-3">
            <a
              href="https://console.optimism.io/faucet"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg text-sm font-medium bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 hover:bg-cyan-500/30 transition-colors inline-flex items-center gap-2"
            >
              <svg className="w-4 h-4" viewBox="0 0 320 512" fill="currentColor">
                <path d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z" />
              </svg>
              Get Testnet ETH
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
