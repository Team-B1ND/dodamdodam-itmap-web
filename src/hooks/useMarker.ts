import { useMemo, useState } from "react";
import { CompanyInfoList } from "types/user/userData.type";
import useCompanyData from "./useCompanyData";

const useMarker = () => {
  const [markerTemp, setMarkerTemp] = useState<CompanyInfoList[]>([]); //회사들의 마커 위치 좌표를 저장할 배열

  const { companyData } = useCompanyData(); //웹 페이지를 들어 오게 되면 서버에서 저장 되있는 회사 정보를 전달해 줌

  useMemo(() => {
    const gc = new kakao.maps.services.Geocoder();
    companyData.forEach((item: CompanyInfoList) => {
      gc.addressSearch(item.address, (result, status) => {
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
  }, [companyData]);

  return markerTemp;
};

export default useMarker;
