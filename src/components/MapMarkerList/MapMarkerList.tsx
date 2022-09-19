import useMapLevel from 'hooks/useMapLevel';
import {
  CustomOverlayMap,
  MapMarker,
  MarkerClusterer,
  useMap,
} from 'react-kakao-maps-sdk';
import CustomOverlayMapMarker from "components/MapMarkerList/CustomOverlayMapMarker/index";
import { useDispatch } from 'react-redux';
import { CompanyInfoList } from 'types/user/userData.type';
import { nav } from "store/nav";
import usePanTo from 'hooks/usePanTo';
import useSelectCompany from 'hooks/useSelectCompany';

interface Props {
  markers: CompanyInfoList[];
}

const MarkerListComponent = ({
  markers,
}: Props) => {
  const map = useMap();
  const level = useMapLevel(map);
  const dispatch = useDispatch()
  const { getUserData } = useSelectCompany();

  const MoveMarker = (lat: number, lng: number, id: string) => {
    if (!map) {
      return;
    }
    const moveCoord = new kakao.maps.LatLng(lat, lng);
    map.setLevel(4);
    map.panTo(moveCoord);
    dispatch(nav({ isNavToggle: true, isSubNavToggle: true }));
    getUserData(id);
  };

  return (
    <MarkerClusterer
      averageCenter={true} // 클러스터에 포함된 마커들의 평균 위치를 클러스터 마커 위치로 설정
      minLevel={10} // 클러스터 할 최소 지도 레벨
    >
      {markers && markers.map((item, idx) => // 레벨이 4보다 작을 경우 customoverlay를 보여준다
        level > 4 ?
          (
            <MapMarker
              key={idx}
              position={item.position}
              onClick={() => MoveMarker(item.position.lat, item.position.lng, item.id)}
            />
          )
          :
          (
            <CustomOverlayMap
              key={idx}
              position={item.position}
              yAnchor={1.4}
            >
              <CustomOverlayMapMarker
                idx={item.id}
                name={item.name}
                address={item.address}
              />
            </CustomOverlayMap>
          )
      )}
    </MarkerClusterer>
  );
};

export default MarkerListComponent;
