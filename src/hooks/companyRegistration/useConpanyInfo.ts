import { useEffect, useState } from "react";

interface Props {
  address_name: string;
  category_group_code: string;
  category_group_name: string;
  category_name: string;
  distance: string;
  id: string;
  phone: string;
  place_name: string;
  place_url: string;
  road_address_name: string;
  x: string;
  y: string;
}

const useCompanyInfo = () => {
  const [companyInfo, setCompanyInfo] = useState<any>();
  /**
   * 회사의 정보를 가져오는 함수에요!
   * @param {string} location
   */
  const getCompanyInfo = (location: string | null) => {
    const ps = new kakao.maps.services.Places();
    ps.keywordSearch(location, (data, status) => {
      if (status === kakao.maps.services.Status.OK) {
        setCompanyInfo(data);
      }
    });
  };

  return {
    getCompanyInfo,
    companyInfo,
  };
};

export default useCompanyInfo;
