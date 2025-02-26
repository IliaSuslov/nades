import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const maps = [
  { id: 1, label: 'Dust II', value: 'dust_2' },
  { id: 2, label: 'Mirage', value: 'mirage' },
  { id: 3, label: 'Train', value: 'train' },
  { id: 4, label: 'Anubis', value: 'anubis' },
  { id: 5, label: 'Ancient', value: 'ancient' },
  { id: 6, label: 'Nuke', value: 'nuke' },
  { id: 7, label: 'Inferno', value: 'inferno' },
];

export function isMapExists(map: string) {  
  return maps.map(v => v.value).includes(map.toLowerCase())
}