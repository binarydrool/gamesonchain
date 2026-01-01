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
    id: 'digibudz',
    name: 'digiBUDZ',
    tagline: 'Skill-based cannabis growing simulation',
    url: 'https://digibudz.xyz',
    icon: 'emoji:🌱',
    status: 'testnet',
    chain: 'Base',
    accentColor: '#22c55e'
  }
];
