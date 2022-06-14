import { useCallback, useEffect, useState } from "react";
import { ItMapData, ItMapDataState } from "types/itmap/itmap.type";
import useData from "./useData";

const useSelectShowCompany = () => {
  const [selectUserData, setSelectUserData] = useState<ItMapData | null>();
  const [isToggle, setIsToggle] = useState<boolean>(false);
  const { testData } = useData();

  const getUserData = (idx: number) => {
    setSelectUserData(testData[idx]);
    setIsToggle(true);
  };

  return {
    getUserData,
    selectUserData,
    setSelectUserData,
    setIsToggle,
    isToggle,
  };
};

export default useSelectShowCompany;
