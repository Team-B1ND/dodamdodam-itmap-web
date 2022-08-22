import useMapLevel from 'hooks/useMapLevel';
import {
  CustomOverlayMap,
  MapMarker,
  MarkerClusterer,
  useMap,
} from 'react-kakao-maps-sdk';
import CustomOverlayMapMarker from "components/MapMarkerList/CustomOverlayMapMarker/index";
import { isUserToggleAndUserIndex } from 'store/reducers';
import { useDispatch } from 'react-redux';
import { ItMapData } from 'types/itmap/itmap.type';

interface Props {
  markers: ItMapData[];
}

const MarkerListComponent = ({
  markers,
}: Props) => {
  const map = useMap();
  const level = useMapLevel(map);
  const dispatch = useDispatch();


  const MoveMarker = (lat: number, lng: number, idx: number) => {
    if (map) {
      const moveCoord = new kakao.maps.LatLng(lat, lng);
      map.setLevel(4);
      map.panTo(moveCoord);
      dispatch(isUserToggleAndUserIndex(true, true, idx));
    }
  };

  return (
    <MarkerClusterer
      averageCenter={true} // 클러스터에 포함된 마커들의 평균 위치를 클러스터 마커 위치로 설정
      minLevel={10} // 클러스터 할 최소 지도 레벨
    >
      {markers.map((item, idx) => // 레벨이 4보다 작을 경우 customoverlay를 보여준다
        level > 4 ?
          (
            <MapMarker
              key={idx}
              position={item.position}
              onClick={() => MoveMarker(item.position.lat, item.position.lng, idx)}
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
                companyName={item.companyName}
                companyLocation={item.companyLocation}
                idx={idx}
              />
            </CustomOverlayMap>
          )
      )}
    </MarkerClusterer>
  );
};

export default MarkerListComponent;
