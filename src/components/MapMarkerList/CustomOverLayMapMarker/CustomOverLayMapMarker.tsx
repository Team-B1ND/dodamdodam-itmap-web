import * as S from "./CustomOverlayMapMarker.style";
import { RiCommunityLine } from "react-icons/ri";
import usePanTo from "hooks/usePanTo";

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


  const { movePanTo } = usePanTo(companyLocation, idx);

  return (
    <S.CustomOverlayContainar onClick={() => {
      movePanTo();
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
