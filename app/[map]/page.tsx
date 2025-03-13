import { MapName } from '@/components/MapName';
import { getMapImage, isMapExists } from '@/lib/utils';
import { MapContainer } from '@/components/interactive_map/MapContainer';
import { nades } from '@/data/nadeCoords';

export default async function MapPage({
  params,
}: {
  params: Promise<{ map: string }>;
}) {
  const resolvedParams = await params;
  const map = resolvedParams.map;

  if (map && !isMapExists(map))
    return <p className="text-red-500">No such map</p>;

  return (
    <div className="flex flex-col gap-2">
      <MapName map={map} />
      <MapContainer mapImage={getMapImage(map).src} mapData={nades[map]} />
    </div>
  );
}
