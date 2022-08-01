import { Map, ZoomControl, MapTypeControl } from "react-kakao-maps-sdk";
import { useState } from "react";
import useMarker from "hooks/useMarker";
import MapMarkerList from "components/MapMarkerList";
import NavContainer from "components/ItmapNav/index";
import CompanyRegistration from "components/CompanyRegistration/index";



declare global {
  interface Window {
    kakao: any;
  }
}

const { kakao } = window;

const Itmap = () => {
  const [map, setMap] = useState<kakao.maps.Map | undefined>();
  const markers = useMarker(map);

  return (
    <>
      <Map
        center={
          {
            lat: 36.5,
            lng: 127.5
          }
        }
        isPanto={true}
        style={{
          position: 'fixed',
          width: '100%',
          height: '100%',
          right: '0px',
        }}
        onCreate={setMap}
        level={12}
      >
        <NavContainer />
        <MapMarkerList markers={markers} />
        <MapTypeControl position={kakao.maps.ControlPosition.TOPRIGHT} />
      </Map>
      <CompanyRegistration />
    </>
  );
};

export default Itmap;


