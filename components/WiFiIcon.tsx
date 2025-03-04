'use client';
import { useEffect, useState } from 'react';
import {
  MdSignalWifiConnectedNoInternet0,
  MdSignalWifiStatusbar1Bar,
  MdSignalWifiStatusbar2Bar,
  MdSignalWifiStatusbar3Bar,
} from 'react-icons/md';
import { MdSignalWifiStatusbar4Bar } from "react-icons/md";

export function WiFiIcon() {
  const [stage, setStage] = useState<number>(4);

  useEffect(() => {
    const timer = setInterval(() => {
      setStage(prev => (prev <= 0 ? 4 : prev - 1));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  switch (stage) {
    case 4:
      return <MdSignalWifiStatusbar4Bar className="w-8 h-8" />;
    case 3:
      return <MdSignalWifiStatusbar3Bar className="w-8 h-8" />;
    case 2:
      return <MdSignalWifiStatusbar2Bar className="w-8 h-8" />;
    case 1:
      return <MdSignalWifiStatusbar1Bar className="w-8 h-8" />;
    default:
      return <MdSignalWifiConnectedNoInternet0 className="w-8 h-8" />;
  }
}
