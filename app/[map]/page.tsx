import { MapName } from '@/components/MapName';
import { NadesWithFilters } from '@/components/NadesWithFilters';
import { isMapExists } from '@/lib/utils';

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
    <div className='flex flex-col gap-2'>
      <MapName map={map} />
      <NadesWithFilters map={map} />
    </div>
  );
}
