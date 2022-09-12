import { useEffect, useState } from "react";
import itmapRepository from "repository/itmap.repository";
import { CompanyInfoList } from "types/user/userData.type";

const useCompanyData = () => {
  // 회사 목록
  const [companyData, setCompanyData] = useState<CompanyInfoList[]>([]);

  useEffect(() => {
    const getCompanyData = async () => {
      try {
        const { data } = await itmapRepository.GetCompanyData();
        setCompanyData(data);
      } catch (error) {
        window.alert("오류...");
      }
    };
    getCompanyData();
  }, []);

  return {
    companyData,
    setCompanyData,
  };
};

export default useCompanyData;
