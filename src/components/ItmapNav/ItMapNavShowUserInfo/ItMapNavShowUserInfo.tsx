import * as S from "./ItMapNavShowUserInfo.style";
import useCoord from "hooks/useCoord";
import { useMap } from "react-kakao-maps-sdk";
import useSelectShowCompany from "hooks/useSelectShowCompany";
import { useDispatch } from "react-redux";
import { isCompanyInUserToggle } from "home/reducers";

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
  const { getUserData } = useSelectShowCompany();
  const dispatch = useDispatch();



  const movePanTo = (lat: number, lng: number) => {
    const moveCoord = new kakao.maps.LatLng(lat, lng);
    map.panTo(moveCoord);
    dispatch(isCompanyInUserToggle(true));
  }

  return (
    <S.ShowUserListContainer key={idx} onClick={() => {
      if (lat && lng) {
        movePanTo(lat, lng);
      }
      getUserData(idx);

    }}>
      <S.UserCompanyNameContainer>
        {companyName}
      </S.UserCompanyNameContainer>
      <S.UserCompanyLocationContainer>
        {companyLocation}
      </S.UserCompanyLocationContainer>
    </S.ShowUserListContainer>
  );
};

export default ItMapShowUserInfo;
