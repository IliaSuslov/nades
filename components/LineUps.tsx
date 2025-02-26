'use client';

import { useMemo } from 'react';
import grenades from '@/data/grenades';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

type LineUpsProps = {
  map: string;
  side: 'ct' | 't';
  nade: 'smoke' | 'flash' | 'he' | 'fire';
};

export function LineUps({ map, side, nade }: LineUpsProps) {
  const lineups = useMemo(
    () =>
      grenades.find(v =>
        v.map
          .toLowerCase()
          .includes((map.split('_')[0] as string).toLowerCase())
      )?.grenades,
    [map]
  );

  const getYouTubeEmbedUrl = (url: string) => {
    const videoId = url.split('/').pop()?.split('?')[0];
    const timeMatch = url.match(/t=(\d+)/);
    const startTime = timeMatch ? timeMatch[1] : 0;
    return `https://www.youtube.com/embed/${videoId}?start=${startTime}&mute=1`;
  };

  if (!lineups) return <p>No grenades found for this map.</p>;

  return (
    <div className="grid grid-cols-3 gap-4 ">
      {lineups
        .filter(v => v.type === nade && v.side === side)
        .map((grenade, index) => (
          <Card key={index} className='flex flex-col'>
            <CardHeader>
              <CardTitle>{grenade.description.toUpperCase()}</CardTitle>
            </CardHeader>
            <CardContent>
              <iframe
                className="w-full h-full aspect-video"
                src={getYouTubeEmbedUrl(grenade.videoUrl)}
                title={grenade.type}
                allowFullScreen
              />
            </CardContent>
          </Card>
        ))}
    </div>
  );
}
