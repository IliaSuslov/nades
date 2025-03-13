'use client';

import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import { getYouTubeEmbedUrl } from '../LineUps';
import { Card } from '../ui/card';

interface CustomPopupProps {
  description: string;
  videoUrl: string;
  position: [number, number]; 
  type?: string
  onClose: () => void;
}

const CustomPopup: React.FC<CustomPopupProps> = ({
  description,
  videoUrl,
  position,
  type,
  onClose,
}) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if ((event.target as HTMLElement).closest('.popup-content') === null) {
        onClose();
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return createPortal(
    <div
      className="popup-content"
      style={{
        position: 'absolute',
        left: position[0],
        top: position[1],
        zIndex: 1000,
      }}
    >
      <Card className="flex flex-col gap-2 rounded-md p-2">
        <b>{description}</b>
        <iframe
          width="400"
          height="200"
          src={getYouTubeEmbedUrl(videoUrl, type)}
          allowFullScreen
        />
      </Card>
    </div>,
    document.body
  );
};

export default CustomPopup;
