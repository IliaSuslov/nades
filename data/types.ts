export type Type = 'smoke' | 'he' | 'flash' | 'fire' | 'combo' | 'прострел';
export type Side = 'ct' | 't';

export interface Grenade {
  type: Type;
  description: string;
  videoUrl: string;
  side: Side
  vidType?: 'vk'
}

export interface Nade {
  id: number;
  coords: { lineUps: [number, number]; cloud: [number, number] };
  description: string;
  side: 't' | 'ct';
  type: 'smoke' | 'fire' | 'flash' | 'he';
  videoUrl: string;
}

export interface MapData {
  spawns: {
      coords: [number, number];
      icon: string;
  }[]
  nades: Nade[];
}

export interface FaceitPlayer {
  player_id: string;
  nickname: string;
  avatar: string;
  country: string;
  games: {
    cs2: {
      faceit_elo: number;
      skill_level: number;
    };
  };
}

export interface PromiseFulfilledResult<T> {
  status: 'fulfilled';
  value: T;
}

export interface PromiseRejectedResult {
  status: 'rejected';
}

export type PromiseSettledResult<T> = PromiseFulfilledResult<T> | PromiseRejectedResult;