import { Map, MapTypeControl } from "react-kakao-maps-sdk";
import MapMarkerList from "components/MapMarkerList";
import NavContainer from "components/ItmapNav/index";
import CompanyRegistration from "components/CompanyRegistration/index";
import { useSelector } from "react-redux";
import { RootState } from "store/reducers";
import useCompanyData from "hooks/useCompanyData";

declare global {
  interface Window {
    kakao: any;
  }
}

const { kakao } = window;

const Itmap = () => {
  const { isNavToggle } = useSelector((state: RootState) => state.nav);
  const { companyData } = useCompanyData();

  return (
    <>
      <Map
        center={
          {
            lat: 36.5,
            lng: 128
          }
        }
        isPanto={true}
        style={{
          position: 'fixed',
          right: "0px",
          width: `${isNavToggle ? "calc(100% - 350px)" : "100%"}`,
          height: '100%',
          transition: "0.4s",
        }}
        level={12}
      >
        <NavContainer />
        <MapMarkerList companyData={companyData} />
        <MapTypeControl position={kakao.maps.ControlPosition.TOPRIGHT} />
      </Map>
      <CompanyRegistration />
    </>
  );
};

export default Itmap;


