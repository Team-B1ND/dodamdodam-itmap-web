import { useEffect, useState } from "react";
import { ItMapData } from "types/itmap/itmap.type";
import useCompanyList from "./useData";

const useMarker = () => {
  const [markerTemp, setMarkerTemp] = useState<ItMapData[]>([]);

  const { testData } = useCompanyList();

  useEffect(() => {
    const gc = new kakao.maps.services.Geocoder();

    setMarkerTemp([]);

    testData.forEach((item) => {
      gc.addressSearch(item.companyLocation, (result, status) => {
        if (status === kakao.maps.services.Status.OK) {
          const coords = {
            ...item,
            position: {
              lat: Number(result[0].y),
              lng: Number(result[0].x),
            },
          };

          if (markerTemp === []) {
            setMarkerTemp([coords]);
          } else {
            setMarkerTemp((prevState) => [...prevState, coords]);
          }
        }
      });
    });
  }, []);

  return markerTemp;
};

export default useMarker;
