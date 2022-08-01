import useMapLevel from 'hooks/useMapLevel';
import {
  CustomOverlayMap,
  MapMarker,
  MarkerClusterer,
  useMap,
} from 'react-kakao-maps-sdk';
import CustomOverLatMapMarker from "components/MapMarkerList/CustomOverLayMapMarker/index";
import useSelectShowCompany from 'hooks/useSelectShowCompany';
import useData from 'hooks/useData';
import useCooder from 'hooks/useCoord';
import { isUserToggleAndUserIndex } from 'store/reducers';
import { useDispatch } from 'react-redux';

interface MarkerListComponentProps {
  markers: any[];
}

const MarkerListComponent: React.FC<MarkerListComponentProps> = ({
  markers,
}) => {
  const map = useMap();
  const level = useMapLevel(map);
  const dispatch = useDispatch();


  const MoveMarker = (lat: number, lng: number, idx: number) => {
    if (map) {
      const moveCoord = new kakao.maps.LatLng(lat, lng);
      map.setLevel(4);
      map.panTo(moveCoord);
      dispatch(isUserToggleAndUserIndex(true, idx));
    }
  };

  return (
    <MarkerClusterer
      averageCenter={true} // 클러스터에 포함된 마커들의 평균 위치를 클러스터 마커 위치로 설정
      minLevel={10} // 클러스터 할 최소 지도 레벨
    >
      {markers.map((item, idx) => // 레벨이 3보다 작을 경우 마커가 있는 위치에 회사 정보를 보여준다
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
              <CustomOverLatMapMarker
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
