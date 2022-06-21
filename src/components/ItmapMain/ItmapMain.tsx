import * as S from "./ItmapMain.style";
// import useItMapContainer from "../../hooks/useItMapContainer/useItMapContainer";
import styled from "styled-components";
import useData from "hooks/useData";
import { Map, ZoomControl, MapTypeControl, MapMarker } from "react-kakao-maps-sdk";
import { useEffect, useState } from "react";
import useMarker from "hooks/useMarker";
import MapMarkerList from "components/MapMarkerList";


declare global {
  interface Window {
    kakao: any;
  }
}

const { kakao } = window;

const Itmap = () => {

  // const { MapSingleton } = useItMapContainer();
  const { testData } = useData();



  const geocoder = new kakao.maps.services.Geocoder();
  const [map, setMap] = useState<kakao.maps.Map | undefined>();



  // useEffect(() => {
  //   MapSingleton.getInstance().initMap({ testData });
  // }, [MapSingleton, testData]);


  const [position, setPosition] = useState({
    lat: 36.5,
    lng: 127.5
  });

  interface props {
    result: any;
    status: number;
  }

  const markers = useMarker(map);

  return (
    <MapWrapper>
      <Map
        center={
          {
            lat: 36.5,
            lng: 127.5
          }
        }
        isPanto={true}
        style={{
          // 지도의 크기
          width: "100%",
          height: "100%",
        }}
        level={12}
        onCreate={setMap}
      >
        <MapMarkerList markers={markers}></MapMarkerList>
        <ZoomControl position={kakao.maps.ControlPosition.TOPRIGHT} />
        <MapTypeControl position={kakao.maps.ControlPosition.TOPRIGHT} />
      </Map>

    </MapWrapper >


  );
};

const MapWrapper = styled.div`
  width: 85%;
  height: 100%;

  @media screen and (max-width: 500px) {
    height: 60vh;
  }
`;

export default Itmap;


