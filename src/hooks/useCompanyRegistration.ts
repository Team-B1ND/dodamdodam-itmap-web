import React, { useState } from "react";
import { arrayBuffer } from "stream/consumers";
import { ItMapData } from "types/itmap/itmap.type";
import useData from "./useData";

type positionType = {
  lat: number;
  lng: number;
};

interface Props {
  id: number;
  name: string;
  explanation: string;
  devPosition: string;
  generation: string;
  profileImg: string;
  tagImg: string;
  companyName: string;
  companyLocation: string;
  position: positionType;
}

const useCompanyRegistration = () => {
  const [isCompanyRegistrationToggleOpen, setIsCompanyRegistrationToggleOpen] =
    useState<boolean>(false);
  const [isDaumPostOpen, setIsDaumPostOpen] = useState<boolean>(false);
  const [daumSearchResultValue, setDaumSearchResultValue] =
    useState<string>("");
  const [companyRegistrationData, setCompanyRegistrationData] = useState<Props>(
    {
      id: 0,
      name: "",
      explanation: "",
      devPosition: "",
      generation: "",
      profileImg: "",
      tagImg: "",
      companyName: "",
      companyLocation: "",
      position: {
        lat: 0,
        lng: 0,
      },
    }
  );
  const { testData } = useData();

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
