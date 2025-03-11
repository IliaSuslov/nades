import { MapName } from '@/components/MapName';
import { isMapExists } from '@/lib/utils';
import dust from '@/data/maps/dust_2.webp';
import nuke from '@/data/maps/nuke.webp';
import train from '@/data/maps/train.webp';
import mirage from '@/data/maps/mirage.webp';
import ancient from '@/data/maps/ancient.webp';
import anubis from '@/data/maps/anubis.webp';
import inferno from '@/data/maps/inferno.webp';
import { nades } from '@/data/nadeCoords';
import { MapContainer } from '@/components/interactive_map/MapContainer';

export default async function MapPage({
  params,
}: {
  params: Promise<{ map: string }>;
}) {
  const resolvedParams = await params;
  const map = resolvedParams.map;

  if (map && !isMapExists(map))
    return <p className="text-red-500">No such map</p>;

  const getMapImage = (map: string) => {
    switch (map) {
      case 'dust_2':
        return dust;
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

  return (
    <div className="flex flex-col gap-2">
      <MapName map={map} />
      <MapContainer mapImage={getMapImage(map).src} mapData={nades[map]} />
    </div>
  );
}
