'use client';

import { createPortal } from 'react-dom';
import { useEffect, useRef } from 'react';
import { Card } from '../ui/card';
import { getYouTubeEmbedUrl } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

interface CustomPopupProps {
  description: string;
  videoUrl: string;
  position: [number, number];
  type?: string;
  onClose: () => void;
}

const CustomPopup: React.FC<CustomPopupProps> = ({
  description,
  videoUrl,
  position,
  type,
  onClose,
}) => {
  const isMobile = useIsMobile();
  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside, {
      capture: true,
    });
    return () => {
      document.removeEventListener('mousedown', handleClickOutside, {
        capture: true,
      });
    };
  }, [onClose]);

  const handlePopupClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return createPortal(
    <div
      style={{
        position: isMobile ? 'fixed' : 'absolute',
        left: isMobile ? 0 : position[0],
        top: isMobile ? 0 : position[1],
        width: isMobile ? '100%' : 'auto',
        height: isMobile ? '100%' : 'auto',
        zIndex: 1000,
        backgroundColor: isMobile ? 'rgba(0, 0, 0, 0.8)' : 'transparent',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      onClick={onClose}
    >
      <div ref={popupRef} onClick={handlePopupClick}>
        <Card className="flex flex-col gap-2 rounded-md p-2 md:w-full w-[95vw]">
          <b className="text-lg">{description}</b>
          <iframe
            className="aspect-video w-full md:w-[500px]"
            src={getYouTubeEmbedUrl(videoUrl, type)}
            allowFullScreen
          />
        </Card>
      </div>
    </div>,
    document.body
  );
};

export default CustomPopup;
