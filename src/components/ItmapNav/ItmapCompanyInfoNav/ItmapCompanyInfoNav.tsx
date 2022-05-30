import { CompanyInfoListWrapper } from "./ItmapCompanyInfoNav.style";
import { ItMapData } from "types/itmap/itmap.type";

import useSelectShowCompany from "hooks/useSelectShowCompany";

const ItmapCompanyInfoNav = ({ props }: any) => {

  return (
    <>
      <CompanyInfoListWrapper>
        {props.companyName}
      </CompanyInfoListWrapper>

    </>
  );
};

export default ItmapCompanyInfoNav;
