import * as S from "./CustomOverlayMapMarker.style";
import { useDispatch } from "react-redux";
import { isUserToggleAndUserIndex } from "store/reducers";
import useCoord from "hooks/useCoord";
import { useMap } from "react-kakao-maps-sdk";
import { RiCommunityLine } from "react-icons/ri";

interface props {
  companyName: string;
  companyLocation: string;
  idx: number;
}

const CustomOverLayMapMarker = ({
  companyName,
  companyLocation,
  idx
}: props) => {


  const map = useMap();

  const dispatch = useDispatch();

  const [lat, lng] = useCoord(map, companyLocation);

  const movePanTo = (lat: number, lng: number) => {
    const moveCoord = new kakao.maps.LatLng(lat, lng);
    map.panTo(moveCoord);
    dispatch(isUserToggleAndUserIndex(true, idx));
  }

  return (
    <S.CustomOverlayContainar onClick={() => {
      if (lat && lng) {
        movePanTo(lat, lng);
      }
    }}>

      <RiCommunityLine style={{ "fontSize": "30px" }} />
      <S.UserCompanyNameContanier>
        {companyName}
      </S.UserCompanyNameContanier>
      <S.BoxTail />
    </S.CustomOverlayContainar>
  );
};

export default CustomOverLayMapMarker;
