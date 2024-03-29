import useMapLevel from 'hooks/useMapLevel';
import * as MapMarkerListStyle from "./MapMarkerList.style";
import {
  CustomOverlayMap,
  MapMarker,
  MarkerClusterer,
  useMap,
} from 'react-kakao-maps-sdk';
import CustomOverlayMapMarker from "components/MapMarkerList/CustomOverlayMapMarker/index";
import { useDispatch } from 'react-redux';
import { nav } from "store/nav";
import useSelectCompany from 'hooks/useSelectCompany';
import { CompanyInfoList } from 'types/user/userData.type';

const MarkerListComponent = ({
  companyData
}: { companyData: CompanyInfoList[] }) => {
  const map = useMap();
  const level = useMapLevel(map);
  const dispatch = useDispatch()
  const { getUserData } = useSelectCompany();

  const MoveMarker = (lat: number, lng: number, id: number, textLogo: string) => {
    const moveCoord = new kakao.maps.LatLng(lat, lng);
    map.setLevel(3);
    map.panTo(moveCoord);
    dispatch(nav({ isNavToggle: true, isSubNavToggle: true }));
    getUserData(id, textLogo);
  };

  return (
    <MarkerClusterer
      averageCenter={true} // 클러스터에 포함된 마커들의 평균 위치를 클러스터 마커 위치로 설정
      minLevel={10} // 클러스터 할 최소 지도 레벨
    >
      {companyData && companyData.map((item, idx) => {
        const position = {
          lat: item.latitude,
          lng: item.longitude
        }

        return (
          level > 3 ?
            (
              <CustomOverlayMap
                key={idx}
                position={position}
              >
                <MapMarkerListStyle.OneMarkerContainer
                  onClick={() => MoveMarker(item.latitude, item.longitude, item.id, item.textLogo)}
                >
                  <MapMarkerListStyle.OneMarker>
                    1
                  </MapMarkerListStyle.OneMarker>
                </MapMarkerListStyle.OneMarkerContainer>
              </CustomOverlayMap>
            )
            :
            (
              <CustomOverlayMap
                key={idx}
                position={position}
                yAnchor={1.4}
              >
                <CustomOverlayMapMarker
                  idx={item.id}
                  textLogo={item.textLogo}
                  name={item.name}
                  address={item.address}
                />
              </CustomOverlayMap>
            )
        )
      }
      )}
    </MarkerClusterer>
  );
};

export default MarkerListComponent;
