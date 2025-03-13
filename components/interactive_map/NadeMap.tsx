'use client';

import dynamic from 'next/dynamic';
import 'leaflet/dist/leaflet.css';
import { useRef, useState, useEffect } from 'react';
import { Polyline } from 'react-leaflet';
import { MapData, Nade } from '@/data/types';
import CustomPopup from './CustomPopup';
import { useIsMobile } from '@/hooks/use-mobile';
import { Marker as LeafletMarker, Icon as LeafletIcon } from 'leaflet';

// Define a type for the icons
interface Icons {
  cloudIconT: LeafletIcon;
  cloudIconCT: LeafletIcon;
  fireCloud: LeafletIcon;
  flashBang: LeafletIcon;
  heBang: LeafletIcon;
  smokeIcon: LeafletIcon;
  fireIcon: LeafletIcon;
  flashIcon: LeafletIcon;
  heIcon: LeafletIcon;
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

const initializeIcons = async (): Promise<Icons> => {
  const L = await import('leaflet');

  return {
    cloudIconT: new L.Icon({
      iconUrl: '/images/smoke-cloud-t.svg',
      iconRetinaUrl: '/images/smoke-cloud-t.svg',
      popupAnchor: [0, -0],
      iconSize: [40, 40],
    }),
    cloudIconCT: new L.Icon({
      iconUrl: '/images/smoke-cloud-ct.svg',
      iconRetinaUrl: '/images/smoke-cloud-ct.svg',
      popupAnchor: [0, -0],
      iconSize: [40, 40],
    }),
    fireCloud: new L.Icon({
      iconUrl: '/images/fire-cloud.svg',
      iconRetinaUrl: '/images/fire-cloud.svg',
      popupAnchor: [0, -0],
      iconSize: [40, 40],
    }),
    flashBang: new L.Icon({
      iconUrl: '/images/flash-bang.svg',
      iconRetinaUrl: '/images/flash-bang.svg',
      popupAnchor: [0, -0],
      iconSize: [40, 40],
    }),
    heBang: new L.Icon({
      iconUrl: '/images/he-bang.svg',
      iconRetinaUrl: '/images/he-bang.svg',
      popupAnchor: [0, -0],
      iconSize: [40, 40],
    }),
    smokeIcon: new L.Icon({
      iconUrl: '/images/smoke.png',
      iconRetinaUrl: '/images/smoke.png',
      popupAnchor: [0, -0],
      iconSize: [25, 25],
    }),
    fireIcon: new L.Icon({
      iconUrl: '/images/fire.png',
      iconRetinaUrl: '/images/fire.png',
      popupAnchor: [0, -0],
      iconSize: [25, 25],
    }),
    flashIcon: new L.Icon({
      iconUrl: '/images/flash.png',
      iconRetinaUrl: '/images/flash.png',
      popupAnchor: [0, -0],
      iconSize: [25, 25],
    }),
    heIcon: new L.Icon({
      iconUrl: '/images/he.png',
      iconRetinaUrl: '/images/he.png',
      popupAnchor: [0, -0],
      iconSize: [25, 25],
    }),
  };
};

const getIcon = (
  nade: 'smoke' | 'fire' | 'flash' | 'he',
  icons: Icons
): LeafletIcon | undefined => {
  switch (nade) {
    case 'smoke':
      return icons.smokeIcon;
    case 'fire':
      return icons.fireIcon;
    case 'flash':
      return icons.flashIcon;
    case 'he':
      return icons.heIcon;
    default:
      return undefined;
  }
};

const bounds: [[number, number], [number, number]] = [
  [0, 0],
  [100, 100],
];

interface NadeMapProps {
  mapImage: string;
  mapData?: MapData;
}

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
  const [icons, setIcons] = useState<Icons>();
  const [leaflet, setLeaflet] = useState<typeof import('leaflet') | null>(null);
  const mapRef = useRef<L.Map | null>(null);
  const markerRefs = useRef<{ [key: number]: LeafletMarker | null }>({});

  useEffect(() => {
    Promise.all([
      import('leaflet').then(mod => {
        setLeaflet(mod);
        return mod;
      }),
      initializeIcons().then(loadedIcons => {
        setIcons(loadedIcons);
      }),
    ]).catch(error => console.error('Failed to load Leaflet or icons:', error));
  }, []);

  const handleCloudClick = (
    id: number,
    cloudCoords: [number, number],
    lineUpCoords: [number, number],
    description: string,
    videoUrl: string
  ) => {
    setLineUpId(id);
    setLineCoordinates(cloudCoords);

    if (mapRef.current && leaflet) {
      const markerPosition = leaflet.latLng(lineUpCoords);
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
    if (mapRef.current && leaflet) {
      const markerPosition = leaflet.latLng(lineUpCoords);
      const point = mapRef.current.latLngToContainerPoint(markerPosition);
      const position: [number, number] = [point.x, point.y - 40];
      setPopupData({ description, videoUrl, position, vidType });
    }
  };

  const getCloudImageByNadeType = (nade: Nade): LeafletIcon | undefined => {
    if (!icons) return undefined;
    switch (nade?.type) {
      case 'smoke':
        return nade.side === 'ct' ? icons.cloudIconCT : icons.cloudIconT;
      case 'fire':
        return icons.fireCloud;
      case 'flash':
        return icons.flashBang;
      case 'he':
        return icons.heBang;
      default:
        return icons.cloudIconT;
    }
  };

  const mobile = useIsMobile();

  if (!leaflet || !icons) return null;

  return (
    <>
      <MapContainer
        ref={mapRef}
        crs={leaflet.CRS.Simple}
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
        <ImageOverlay url={mapImage} bounds={bounds} />
        {mapData?.spawns?.map((s, index) => (
          <Marker
            key={index}
            icon={
              new leaflet.Icon({
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
            icon={getCloudImageByNadeType(nade)}
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
            ref={el => {
              markerRefs.current[nade.id] = el;
            }}
          />
        ))}
        {lineUpsById &&
          mapData?.nades.map(nade => {
            if (nade.id === lineUpsById) {
              return (
                <Marker
                  key={`lineup-${nade.id}`}
                  position={nade.coords.lineUps}
                  icon={getIcon(nade.type, icons) || undefined}
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
                .lineUps || [0, 0],
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
