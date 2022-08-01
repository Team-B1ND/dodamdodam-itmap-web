import { useEffect, useState } from "react";
import useCompanyList from "./useData";

const useMarker = (map: kakao.maps.Map | undefined) => {
  const [markerTemp, setMarkerTemp] = useState<any[]>([]);

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
              lat: result[0].y,
              lng: result[0].x,
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
