import { useEffect, useState } from "react";

interface coordsProps {
  lat: number;
  lng: number;
}

const useCoord = (map: kakao.maps.Map | undefined, location: string) => {
  const [coord, setCoord] = useState<coordsProps>();

  useEffect(() => {
    if (!map) return;

    const gc = new kakao.maps.services.Geocoder();

    gc.addressSearch(location, (result, status) => {
      if (status === kakao.maps.services.Status.OK) {
        setCoord({
          lat: Number(result[0].y),
          lng: Number(result[0].x),
        });
      }
    });
  }, [location, map]);

  return [coord?.lat, coord?.lng];
};

export default useCoord;
