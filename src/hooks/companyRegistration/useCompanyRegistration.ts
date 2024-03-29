import React, { useState } from "react";
import { toast } from "react-toastify";
import companyRepository from "repository/company/company.repository";
import { CompanyDataProps } from "types/user/userData.type";

const useCompanyRegistration = () => {
  const [isCompanyRegistrationToggleOpen, setIsCompanyRegistrationToggleOpen] =
    useState<boolean>(false);
  const [isCompanySerach, setIsCompanySerach] = useState<boolean>(true);
  const [companyRegistrationData, setCompanyRegistrationData] =
    useState<CompanyDataProps>({
      companyPlaceId: "",
      name: "",
      info: "",
      field: "",
      generation: 0,
      githubId: "",
      companyName: "",
      companyLatitude: 0,
      companyLongitude: 0,
      companyAddress: "",
      pw: "",
    });

  /** 사용자의 정보를 저장하는 함수에요! */
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCompanyRegistrationData({ ...companyRegistrationData, [name]: value });
  };

  /** 사용자를 등록하는 함수에요! */
  const postUserData = async () => {
    // 등록할때 입력을 잘 입력했는지 걸러야함
    try {
      const { status } = await companyRepository.PostCompanyRegistration(
        companyRegistrationData
      );

      if (status === 200) {
        toast.success("등록을 성공 하였습니다!");
      }
    } catch (error) {
      toast.error(
        "오류가 났습니다 다시 해 주세요. (다시 해도 안된다면 관리자에게 문의하세요)"
      );
    }
  };

  return {
    isCompanyRegistrationToggleOpen,
    setIsCompanyRegistrationToggleOpen,
    isCompanySerach,
    setIsCompanySerach,
    companyRegistrationData,
    setCompanyRegistrationData,
    onChange,
    postUserData,
  };
};

export default useCompanyRegistration;
