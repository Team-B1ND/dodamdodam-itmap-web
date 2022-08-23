import { Map, MapTypeControl } from "react-kakao-maps-sdk";
import useMarker from "hooks/useMarker";
import MapMarkerList from "components/MapMarkerList";
import NavContainer from "components/ItmapNav/index";
import CompanyRegistration from "components/CompanyRegistration/index";
import { useEffect } from "react";
import itMapRepository from "repository/itmap.repository";


declare global {
  interface Window {
    kakao: any;
  }
}

const { kakao } = window;

const Itmap = () => {

  const markers = useMarker();

  useEffect(() => {
    itMapRepository.getItMapData();
  }, [])

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
        }}
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


