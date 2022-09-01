import * as S from "./CustomOverlayMapMarker.style";
import { RiCommunityLine } from "react-icons/ri";
import usePanTo from "hooks/usePanTo";

interface props {
  name: string;
  address: string;
}

const CustomOverLayMapMarker = ({
  name,
  address,
}: props) => {

  const { movePanTo } = usePanTo(address);

  return (
    <S.CustomOverlayContainar onClick={() => {
      movePanTo();
    }}>
      <RiCommunityLine style={{ "fontSize": "30px" }} />
      <S.UserCompanyNameContanier>
        {name}
      </S.UserCompanyNameContanier>
      <S.BoxTail />
    </S.CustomOverlayContainar>
  );
};

export default CustomOverLayMapMarker;
