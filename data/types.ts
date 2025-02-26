export interface Grenade {
  type: string;
  description: string;
  videoUrl: string;
  side: "ct" | "t"
}

export interface MapData {
  map: string;
  grenades: Grenade[];
} 