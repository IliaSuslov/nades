import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import {
  train,
  mirage,
  inferno,
  nuke,
  anubis,
  ancient,
  dust_2,
} from '../public/images/maps'

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

export const getYouTubeEmbedUrl = (url: string, type?: string) => {
  if (type === 'vk') {
    return url;
  }

  const videoId = url.split('/').pop()?.split('?')[0];
  const timeMatch = url.match(/t=(\d+)/);
  const startTime = timeMatch ? timeMatch[1] : 0;

  return `https://www.youtube.com/embed/${videoId}?start=${startTime}&mute=1`;
};

export const getMapImage = (map: string) => {
  switch (map) {
    case 'dust_2':
      return dust_2;
    case 'nuke':
      return nuke;
    case 'train':
      return train;
    case 'mirage':
      return mirage;
    case 'ancient':
      return ancient;
    case 'anubis':
      return anubis;
    case 'inferno':
      return inferno;
    default:
      throw new Error(`No map image for ${map}`);
  }
};