import * as S from "./CustomOverlayMapMarker.style";
import usePanTo from "hooks/usePanTo";
import useSelectCompany from "hooks/useSelectCompany";
import COMPANY_IMAGE from "assets/companyLogoImg/basics.png";

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
      <img src={COMPANY_IMAGE} style={{ "width": "30px" }} alt="회사이미지" />
      <S.UserCompanyNameContanier>
        {name}
      </S.UserCompanyNameContanier>
      <S.BoxTail />
    </S.CustomOverlayContainar>
  );
};

export default CustomOverLayMapMarker;
