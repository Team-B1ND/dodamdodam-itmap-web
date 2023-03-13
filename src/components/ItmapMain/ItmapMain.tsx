import { Map, MapTypeControl } from "react-kakao-maps-sdk";
import MapMarkerList from "components/MapMarkerList";
import NavContainer from "components/ItmapNav/index";
import CompanyRegistration from "components/CompanyRegistration/index";
import { useSelector } from "react-redux";
import { RootState } from "store/reducers";
import useCompanyData from "hooks/useCompanyData";
import UserInfoModifyModal from "components/UserInfoModifyModal";
import UserInfoDeleteModal from "components/UserInfoDeleteModal";
import { ToastContainer } from "react-toastify";

declare global {
  interface Window {
    kakao: any;
  }
}

const { kakao } = window;

const Itmap = () => {
  const { nav, modify, delete: userInfoDelete } = useSelector((state: RootState) => state);

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
          width: `${nav.isNavToggle ? "calc(100% - 350px)" : "100%"}`,
          height: '100%',
          transition: "0.4s",
        }}
        level={12}
      >
        {modify.ModifyModal && <UserInfoModifyModal userId={modify.UserId} />}
        {userInfoDelete.DeleteModal && <UserInfoDeleteModal userId={userInfoDelete.UserId} />}
        <NavContainer />
        <MapMarkerList companyData={companyData} />
        <MapTypeControl position={kakao.maps.ControlPosition.TOPRIGHT} />
        <ToastContainer />
      </Map>
      <CompanyRegistration />
    </>
  );
};

export default Itmap;


