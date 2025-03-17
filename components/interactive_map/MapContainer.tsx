'use client'

import NadeMap from './NadeMap';
import { MapData } from '@/data/types';

interface MapContainerProps {
  mapImage: string;
  mapData: MapData
}

export function MapContainer({ mapImage, mapData }: MapContainerProps) {
  return (
    <div className="flex flex-col lg:flex-row gap-4 items-start">
      <NadeMap mapImage={mapImage} mapData={mapData} />
      
      {/* <div className="flex flex-col gap-4">
        <ToggleGroup type="single" size="lg">
          <ToggleGroupItem
            value="t"
            aria-label="Toggle Terrorist"
            onClick={() => console.log('Terrorist selected')}
          >
            <Image
              src={'/images/sides/t.png'}
              width={40}
              height={40}
              alt={'Terrorist Logo'}
            />
          </ToggleGroupItem>
          <ToggleGroupItem value="ct" aria-label="Toggle Counter-Terrorist">
            <Image
              src={'/images/sides/ct.png'}
              width={40}
              height={40}
              alt={'Counter-Terrorist Logo'}
            />
          </ToggleGroupItem>
        </ToggleGroup>

        <ToggleGroup type="single" size="lg">
          <ToggleGroupItem value="smoke" aria-label="Toggle Smoke Grenade">
            <Image
              src={'/images/smoke.png'}
              width={40}
              height={40}
              alt={'Smoke Grenade Logo'}
            />
          </ToggleGroupItem>
          <ToggleGroupItem value="fire" aria-label="Toggle Fire Grenade">
            <Image
              src={'/images/fire.png'}
              width={40}
              height={40}
              alt={'Fire Grenade Logo'}
            />
          </ToggleGroupItem>
          <ToggleGroupItem value="flash" aria-label="Toggle Flash Grenade">
            <Image
              src={'/images/flash.png'}
              width={40}
              height={40}
              alt={'Flash Grenade Logo'}
            />
          </ToggleGroupItem>
          <ToggleGroupItem value="he" aria-label="Toggle HE Grenade">
            <Image
              src={'/images/he.png'}
              width={40}
              height={40}
              alt={'HE Grenade Logo'}
            />
          </ToggleGroupItem>
        </ToggleGroup>
      </div> */}
    </div>
  );
}
