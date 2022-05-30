import * as S from "./ItmapCompanyListNav.style";
import useData from "hooks/useData";
import useSelectShowCompany from "hooks/useSelectShowCompany";
import ItmapCompanyInfoNav from "../ItmapCompanyInfoNav";
const ItmapNav = () => {

  const { testData } = useData();
  const { getUserNavData, selectUserData } = useSelectShowCompany();

  return (
    <S.NavWrapper>
      <S.NavContainer>
        {testData.map((item, idx) => {
          return (
            <S.ShowUserListContainer key={idx} onClick={() => { getUserNavData(idx) }}>
              <S.UserCompanyNameContainer>
                {item.companyName}
              </S.UserCompanyNameContainer>
              <S.UserCompanyLocationContainer>
                {item.companyLocation}
              </S.UserCompanyLocationContainer>
            </S.ShowUserListContainer>
          );
        }
        )}
      </S.NavContainer>
      {selectUserData && <ItmapCompanyInfoNav props={selectUserData} />}
    </S.NavWrapper >
  );
};



export default ItmapNav;
