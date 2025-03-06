export type Type = 'smoke' | 'he' | 'flash' | 'fire' | 'combo' | 'прострел';
export type Side = 'ct' | 't';

export interface Grenade {
  type: Type;
  description: string;
  videoUrl: string;
  side: Side
  vidType?: 'vk'
}

export interface MapData {
  map: string;
  grenades: Grenade[];
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