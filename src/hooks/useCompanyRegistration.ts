import React, { useState } from "react";

interface Props {
  userName: string;
  IntroduceMent: string;
  devPosition: string;
}

const useCompanyRegistration = () => {
  const [isCompanyRegistrationToggleOpen, setIsCompanyRegistrationToggleOpen] =
    useState<boolean>(false);
  const [isDaumPostOpen, setIsDaumPostOpen] = useState<boolean>(false);
  const [daumSearchResultValue, setDaumSearchResultValue] =
    useState<string>("");
  const [companyRegistrationData, setCompanyRegistrationData] = useState<Props>(
    {
      userName: "",
      IntroduceMent: "",
      devPosition: "",
    }
  );

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCompanyRegistrationData({ ...companyRegistrationData, [name]: value });
  };

  return {
    isCompanyRegistrationToggleOpen,
    setIsCompanyRegistrationToggleOpen,
    isDaumPostOpen,
    setIsDaumPostOpen,
    daumSearchResultValue,
    setDaumSearchResultValue,
    companyRegistrationData,
    setCompanyRegistrationData,
    onChange,
  };
};

export default useCompanyRegistration;
