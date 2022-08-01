import { useEffect, useState } from "react";

const useMapLevel = (map: kakao.maps.Map | undefined) => {
  const [level, setLevel] = useState<number>(12);

  useEffect(() => {
    if (!map) return;

    const getCurrentMapLevel = () => {
      if (map) {
        setLevel(map.getLevel());
      }
    };

    kakao.maps.event.addListener(map, "zoom_changed", getCurrentMapLevel);

    return () => {
      kakao.maps.event.removeListener(map, "zoom_changed", getCurrentMapLevel);
    };
  }, [map]);

  return level;
};

export default useMapLevel;
