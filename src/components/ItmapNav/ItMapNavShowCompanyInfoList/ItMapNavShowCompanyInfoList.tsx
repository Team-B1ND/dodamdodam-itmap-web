import * as S from "./ItMapNavShowCompanyInfoList.style";
import useCoord from "hooks/useCoord";
import { useMap } from "react-kakao-maps-sdk";
import { useDispatch } from "react-redux";
import { isUserToggleAndUserIndex } from "store/reducers";

interface ItMapShowUserInfoProps {
  companyLocation: string,
  idx: number,
  companyName: string,
}

const ItMapShowUserInfo = ({
  companyLocation,
  idx,
  companyName,
}: ItMapShowUserInfoProps) => {

  const map = useMap();
  const [lat, lng] = useCoord(map, companyLocation);
  const dispatch = useDispatch();



  const movePanTo = (lat: number, lng: number) => {
    const moveCoord = new kakao.maps.LatLng(lat, lng);
    map.setLevel(3);
    map.panTo(moveCoord);
    dispatch(isUserToggleAndUserIndex(true, idx));
  }

  return (
    <S.ShowCompanyInfoListContanier onClick={() => {
      if (lat && lng) {
        movePanTo(lat, lng);
      }
    }}>
      <S.UserCompanyNameContainer>
        {companyName}
      </S.UserCompanyNameContainer>
      <S.UserCompanyLocationContainer>
        {companyLocation}
      </S.UserCompanyLocationContainer>
    </S.ShowCompanyInfoListContanier>
  );
};

export default ItMapShowUserInfo;
