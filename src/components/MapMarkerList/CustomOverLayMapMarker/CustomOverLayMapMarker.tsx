import * as S from "./CustomOverlayMapMarker.style";
import { RiCommunityLine } from "react-icons/ri";
import usePanTo from "hooks/usePanTo";
import useSelectCompany from "hooks/useSelectCompany";

interface props {
  name: string;
  address: string;
  idx: number;
}

const CustomOverLayMapMarker = ({
  idx,
  name,
  address,
}: props) => {

  const { movePanTo } = usePanTo(address);
  const { getUserData } = useSelectCompany();

  return (
    <S.CustomOverlayContainar onClick={() => {
      movePanTo();
      getUserData(idx);
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
