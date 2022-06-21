import useMapLevel from 'hooks/useMapLevel';
import {
  CustomOverlayMap,
  MapMarker,
  MarkerClusterer,
  useMap,
} from 'react-kakao-maps-sdk';

interface MarkerListComponentProps {
  markers: any[];
}

const MarkerListComponent: React.FC<MarkerListComponentProps> = ({
  markers,
}) => {
  const map = useMap();
  const level = useMapLevel(map);

  const panTo = (lat: number, lng: number) => {
    if (map) {
      const moveCoord = new kakao.maps.LatLng(lat, lng);

      map.setLevel(3);
      map.panTo(moveCoord);
    }
  };

  return (
    <MarkerClusterer
      averageCenter={true} // 클러스터에 포함된 마커들의 평균 위치를 클러스터 마커 위치로 설정
      minLevel={10} // 클러스터 할 최소 지도 레벨
    >
      {markers.map(item =>

        level > 3 ?
          (

            <MapMarker
              key={`${item.position.lat}-${item.position.lng}`}
              position={item.position}
              onClick={() => panTo(item.position.lat, item.position.lng)}
            />
          )
          :
          (

            <CustomOverlayMap
              key={`${item.position.lat}-${item.position.lng}`}
              position={item.position}
            />
          )
      )}
    </MarkerClusterer>
  );
};

export default MarkerListComponent;
