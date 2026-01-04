function SpinningCube() {
  return (
    <div className="flex justify-center mb-6">
      <div className="cube-container">
        <div className="cube">
          <div className="cube-face cube-front">X</div>
          <div className="cube-face cube-back">X</div>
          <div className="cube-face cube-right">X</div>
          <div className="cube-face cube-left">X</div>
          <div className="cube-face cube-top">X</div>
          <div className="cube-face cube-bottom">X</div>
        </div>
      </div>
      <style jsx>{`
        .cube-container {
          width: 60px;
          height: 60px;
          perspective: 200px;
        }
        .cube {
          width: 100%;
          height: 100%;
          position: relative;
          transform-style: preserve-3d;
          animation: spin 8s infinite linear;
        }
        .cube-face {
          position: absolute;
          width: 60px;
          height: 60px;
          background: rgba(168, 85, 247, 0.15);
          border: 2px solid rgba(168, 85, 247, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          font-weight: bold;
          color: rgba(168, 85, 247, 0.8);
        }
        .cube-front  { transform: rotateY(0deg) translateZ(30px); }
        .cube-back   { transform: rotateY(180deg) translateZ(30px); }
        .cube-right  { transform: rotateY(90deg) translateZ(30px); }
        .cube-left   { transform: rotateY(-90deg) translateZ(30px); }
        .cube-top    { transform: rotateX(90deg) translateZ(30px); }
        .cube-bottom { transform: rotateX(-90deg) translateZ(30px); }
        @keyframes spin {
          from { transform: rotateX(0deg) rotateY(0deg); }
          to { transform: rotateX(360deg) rotateY(360deg); }
        }
      `}</style>
    </div>
  );
}

export default function Header() {
  return (
    <header className="w-full pt-8 pb-6 px-4 sm:px-6 border-b border-border/50">
      <div className="max-w-6xl mx-auto">
        {/* Logo and nav */}
        <div className="flex items-center justify-between mb-8">
          <a href="/" className="text-2xl font-bold tracking-tight">
            <span className="text-white">Games</span>
            <span className="text-accent">OnChain</span>
          </a>
          <nav className="flex items-center gap-3">
            <a
              href="https://console.optimism.io/faucet"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg text-sm font-medium bg-purple-500/20 text-purple-400 border border-purple-500/30 hover:bg-purple-500/30 transition-colors inline-flex items-center gap-2"
            >
              <svg className="w-4 h-4" viewBox="0 0 320 512" fill="currentColor">
                <path d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z" />
              </svg>
              Get Testnet ETH
            </a>
          </nav>
        </div>

        {/* Hero tagline */}
        <div className="text-center py-6 sm:py-8">
          <SpinningCube />
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-3 sm:mb-4">
            <span className="text-white">Web3 Games.</span>{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Fully Onchain.</span>
          </h1>
          <p className="text-muted text-sm sm:text-lg max-w-2xl mx-auto">
            Discover games built entirely onchain. True ownership. Real rewards.
          </p>
        </div>
      </div>
    </header>
  );
}
