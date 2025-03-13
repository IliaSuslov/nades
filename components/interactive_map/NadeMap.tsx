'use client';

import dynamic from 'next/dynamic';
import 'leaflet/dist/leaflet.css';
import L, { CRS } from 'leaflet';
import { useRef, useState } from 'react';
import { Polyline } from 'react-leaflet';
import { MapData, Nade } from '@/data/types';
import CustomPopup from './CustomPopup';
import { useIsMobile } from '@/hooks/use-mobile';

interface NadeMapProps {
  mapImage: string;
  mapData?: MapData;
}

const MapContainer = dynamic(
  () => import('react-leaflet').then(mod => mod.MapContainer),
  { ssr: false }
);
const ImageOverlay = dynamic(
  () => import('react-leaflet').then(mod => mod.ImageOverlay),
  { ssr: false }
);
const Marker = dynamic(() => import('react-leaflet').then(mod => mod.Marker), {
  ssr: false,
});

const cloudIconT = new L.Icon({
  iconUrl: '/images/smoke-cloud-t.svg',
  iconRetinaUrl: '/images/smoke-cloud-t.svg',
  popupAnchor: [0, -0],
  iconSize: [40, 40],
});

const cloudIconCT = new L.Icon({
  iconUrl: '/images/smoke-cloud-ct.svg',
  iconRetinaUrl: '/images/smoke-cloud-ct.svg',
  popupAnchor: [0, -0],
  iconSize: [40, 40],
});

const fireCloud = new L.Icon({
  iconUrl: '/images/fire-cloud.svg',
  iconRetinaUrl: '/images/fire-cloud.svg',
  popupAnchor: [0, -0],
  iconSize: [40, 40],
});

const flashBang = new L.Icon({
  iconUrl: '/images/flash-bang.svg',
  iconRetinaUrl: '/images/flash-bang.svg',
  popupAnchor: [0, -0],
  iconSize: [40, 40],
});

const heBang = new L.Icon({
  iconUrl: '/images/he-bang.svg',
  iconRetinaUrl: '/images/he-bang.svg',
  popupAnchor: [0, -0],
  iconSize: [40, 40],
});

const smokeIcon = new L.Icon({
  iconUrl: '/images/smoke.png',
  iconRetinaUrl: '/images/smoke.png',
  popupAnchor: [0, -0],
  iconSize: [25, 25],
});

const fireIcon = new L.Icon({
  iconUrl: '/images/fire.png',
  iconRetinaUrl: '/images/fire.png',
  popupAnchor: [0, -0],
  iconSize: [25, 25],
});

const flashIcon = new L.Icon({
  iconUrl: '/images/flash.png',
  iconRetinaUrl: '/images/flash.png',
  popupAnchor: [0, -0],
  iconSize: [25, 25],
});

const heIcon = new L.Icon({
  iconUrl: '/images/he.png',
  iconRetinaUrl: '/images/he.png',
  popupAnchor: [0, -0],
  iconSize: [25, 25],
});

const getIcon = (nade: 'smoke' | 'fire' | 'flash' | 'he') => {
  switch (nade) {
    case 'smoke':
      return smokeIcon;
    case 'fire':
      return fireIcon;
    case 'flash':
      return flashIcon;
    case 'he':
      return heIcon;
  }
};

const bounds: [[number, number], [number, number]] = [
  [0, 0],
  [100, 100],
];

const NadeMap: React.FC<NadeMapProps> = ({ mapImage, mapData }) => {
  const [lineUpsById, setLineUpId] = useState<number | null>(null);
  const [lineCoordinates, setLineCoordinates] = useState<
    [number, number] | null
  >(null);
  const [popupData, setPopupData] = useState<{
    description: string;
    videoUrl: string;
    position: [number, number];
    vidType?: string;
  } | null>(null);
  const mapRef = useRef<L.Map | null>(null);
  const markerRefs = useRef<{ [key: number]: L.Marker | null }>({});

  const handleCloudClick = (
    id: number,
    cloudCoords: [number, number],
    lineUpCoords: [number, number],
    description: string,
    videoUrl: string
  ) => {
    setLineUpId(id);
    setLineCoordinates(cloudCoords);

    if (mapRef.current) {
      const markerPosition = L.latLng(lineUpCoords);
      const point = mapRef.current.latLngToContainerPoint(markerPosition);
      const position: [number, number] = [point.x, point.y - 40];
      setPopupData({ description, videoUrl, position });
    }
  };

  const handleNadeMouseOver = (
    lineUpCoords: [number, number],
    description: string,
    videoUrl: string,
    vidType?: string
  ) => {
    if (mapRef.current) {
      const markerPosition = L.latLng(lineUpCoords);
      const point = mapRef.current.latLngToContainerPoint(markerPosition);
      const position: [number, number] = [point.x, point.y - 40];
      setPopupData({ description, videoUrl, position, vidType });
    }
  };

  const getCloudImageBy = (nade: Nade) => {
    switch (nade?.type) {
      case 'smoke':
        return nade.side === 'ct' ? cloudIconCT : cloudIconT;
      case 'fire':
        return fireCloud;
      case 'flash':
        return flashBang;
      case 'he':
        return heBang;
      default:
        return cloudIconT;
    }
  };

  const mobile = useIsMobile()
  
  return (
    <>
      <MapContainer
        ref={mapRef}
        crs={CRS.Simple}
        bounds={bounds}
        className="w-full h-auto aspect-square transition-all duration-300 z-10 lg:max-w-[800px] lg:max-h-[800px] lg:min-w-[650px]"
        minZoom={mobile ? 2 : 3}
        maxZoom={mobile ? 2 : 3}
        zoom={mobile ? 2 : 3}
        zoomControl={false}
        attributionControl={false}
        doubleClickZoom={false}
        dragging={false}
      >
        <ImageOverlay className='w-full h-full' url={mapImage} bounds={bounds} />
        {mapData?.spawns?.map((s, index) => (
          <Marker
            key={index}
            icon={
              new L.Icon({
                iconUrl: s.icon,
                iconRetinaUrl: s.icon,
                popupAnchor: [0, -0],
                iconSize: [25, 25],
              })
            }
            position={s.coords}
          />
        ))}
        {mapData?.nades.map(nade => (
          <Marker
            key={nade.id}
            icon={getCloudImageBy(nade)}
            position={nade.coords.cloud}
            eventHandlers={{
              click: () =>
                handleCloudClick(
                  nade.id,
                  nade.coords.cloud,
                  nade.coords.lineUps,
                  nade.description,
                  nade.videoUrl
                ),
            }}
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            //@ts-expect-error
            ref={el => (markerRefs.current[nade.id] = el)}
          />
        ))}
        {lineUpsById &&
          mapData?.nades.map(nade => {
            if (nade.id === lineUpsById) {
              return (
                <Marker
                  key={`lineup-${nade.id}`}
                  position={nade.coords.lineUps}
                  icon={getIcon(nade.type)}
                  eventHandlers={{
                    mouseover: () => {
                      handleNadeMouseOver(
                        nade.coords.lineUps,
                        nade.description,
                        nade.videoUrl,
                        nade?.vidType
                      );
                    },
                  }}
                  zIndexOffset={1000}
                />
              );
            }
            return null;
          })}

        {lineCoordinates && lineUpsById && (
          <Polyline
            positions={[
              lineCoordinates,
              mapData?.nades?.find?.(nade => nade.id === lineUpsById)?.coords
                ?.lineUps || [0, 0],
            ]}
            color="white"
            dashArray="5, 5"
          />
        )}

        {popupData && (
          <CustomPopup
            description={popupData.description}
            videoUrl={popupData.videoUrl}
            type={popupData.vidType}
            position={popupData.position}
            onClose={() => setPopupData(null)}
          />
        )}
      </MapContainer>
    </>
  );
};

export default NadeMap;
