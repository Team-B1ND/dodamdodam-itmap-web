import { useState } from "react";

const useCompanyInfo = () => {
  const [companyInfo, setCompanyInfo] = useState<any>();
  /**
   * 회사의 정보를 가져오는 함수에요!
   * @param {string} location
   */
  const getCompanyInfo = (location: string | null) => {
    const ps = new kakao.maps.services.Places();
    ps.keywordSearch(location, (data, status) => {
      if (status === kakao.maps.services.Status.OK || data.length > 0) {
        setCompanyInfo(data);
      } else {
        // toast
      }
    });
  };

  return {
    getCompanyInfo,
    companyInfo,
  };
};

export default useCompanyInfo;
