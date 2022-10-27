import { useEffect, useState } from "react";
import itmapRepository from "repository/itmap.repository";
import { CompanyInfoList } from "types/user/userData.type";

const useCompanyData = () => {
  // 회사 목록
  const [companyData, setCompanyData] = useState<CompanyInfoList[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await itmapRepository.GetCompanyData();
        setCompanyData(data);
      } catch (error) {
        window.alert("회사 정보 가져오기가 실패했습니다.");
      }
    })();
  }, []);

  return {
    companyData,
    setCompanyData,
  };
};

export default useCompanyData;
