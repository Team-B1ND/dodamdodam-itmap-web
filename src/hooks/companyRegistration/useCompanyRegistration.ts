import React, { useState } from "react";
import companyRepository from "repository/company/company.repository";
import { CompanyDataProps } from "types/user/userData.type";
import useUserData from "hooks/useCompanyData";

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
      generation: "",
      githubId: "",
      companyName: "",
      companyAddress: "",
      pw: "",
    });

  const devPositionArray: string[] = [
    "개발 분야",
    "FRONTEND",
    "BACKEND",
    "IOS",
    "ANDROID",
    "DEVOPS",
    "AI",
    "DB",
    "ETC",
  ];

  /** 사용자의 정보를 저장하는 함수에요! */
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCompanyRegistrationData({ ...companyRegistrationData, [name]: value });
  };

  /** 사용자를 등록하는 함수에요! */
  const postUserData = async () => {
    // 등록할때 입력을 잘 입력했는지 걸러야함
    try {
      await companyRepository.PostCompanyRegistration(companyRegistrationData);
    } catch (error) {
      window.alert("등록실패");
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
    devPositionArray,
    postUserData,
  };
};

export default useCompanyRegistration;
