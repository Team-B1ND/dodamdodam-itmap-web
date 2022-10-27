import { useState } from "react";
import { CompanyInfoList } from "types/user/userData.type";

const useMarker = () => {
  const [markerTemp, setMarkerTemp] = useState<CompanyInfoList[]>([]); //회사들의 마커 위치 좌표를 저장할 배열

  const gc = new kakao.maps.services.Geocoder();
  const coordConversion = (item: CompanyInfoList) => {
    gc.addressSearch(item.address, (result, status) => {
      if (status === kakao.maps.services.Status.OK) {
        const coords = {
          ...item,
          position: {
            lat: Number(result[0].y),
            lng: Number(result[0].x),
          },
        };
        setMarkerTemp([coords]);
      }
    });
  };

  return { coordConversion, markerTemp };
};

export default useMarker;
