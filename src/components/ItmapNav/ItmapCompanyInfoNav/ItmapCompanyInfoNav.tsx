import { CompanyInfoListWrapper, Button } from "./ItmapCompanyInfoNav.style";
import { ItMapData } from "types/itmap/itmap.type";

import useSelectShowCompany from "hooks/useSelectShowCompany";

const ItmapCompanyInfoNav = ({ props }: any) => {

  const { selectUserData, setSelectUserData } = useSelectShowCompany();


  return (
    <CompanyInfoListWrapper>
      <Button onClick={() => {
        setSelectUserData(false);

      }}>close</Button>


    </CompanyInfoListWrapper>

  );
};

export default ItmapCompanyInfoNav;
