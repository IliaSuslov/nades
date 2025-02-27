export type Type = 'smoke' | 'he' | 'flash' | 'fire' | 'combo' | 'прострел';
export type Side = 'ct' | 't';

export interface Grenade {
  type: Type;
  description: string;
  videoUrl: string;
  side: Side
}

export interface MapData {
  map: string;
  grenades: Grenade[];
} 