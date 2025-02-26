'use client';

import React, { useMemo } from 'react';

export function MapName({ map }: { map: string }) {
  const mapName = useMemo(() => map.toUpperCase(), [map]);

  return <h1 className='text-xl font-bold'>{mapName} Nades</h1>;
}
