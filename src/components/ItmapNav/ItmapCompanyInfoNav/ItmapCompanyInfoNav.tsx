import * as S from "./ItmapCompanyInfoNav.style";
import { ItMapData } from "types/itmap/itmap.type";

import useSelectShowCompany from "hooks/useSelectShowCompany";

const ItmapCompanyInfoNav = ({ props }: any) => {


  const { getUserData, selectUserData, setIsToggle, isToggle } = useSelectShowCompany();



  return ( //나중에 서버 데이터 가져왔을 때 map돌려서 같은 회사에 다니는 사람들을 표시
    <></>
  );
};

export default ItmapCompanyInfoNav;
