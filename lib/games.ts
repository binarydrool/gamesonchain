export type GameStatus = 'live' | 'testnet' | 'coming-soon';

export interface Game {
  id: string;
  name: string;
  tagline: string;
  url: string;
  icon: string;
  status: GameStatus;
  chain: string;
  accentColor: string;
}

export const games: Game[] = [
  {
    id: 'digishrooms',
    name: 'digiSHROOMS',
    tagline: 'Cultivate consciousness, harvest rewards',
    url: 'https://digishrooms.xyz',
    icon: '/games/digishrooms.png',
    status: 'testnet',
    chain: 'Base',
    accentColor: '#a855f7'
  },
  {
    id: 'digibuds',
    name: 'digiBUDS',
    tagline: 'Skill-based cannabis growing simulation',
    url: 'https://digibuds.xyz',
    icon: '/games/digibuds.png',
    status: 'testnet',
    chain: 'Base',
    accentColor: '#22c55e'
  },
  {
    id: 'cooter',
    name: 'Cooter',
    tagline: '3D mind tester game',
    url: 'https://cooter.xyz',
    icon: '/games/cooter.png',
    status: 'testnet',
    chain: 'Base',
    accentColor: '#d4af37'
  }
];
