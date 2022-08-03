import { useCallback } from "react";
import useData from "./useData";

const useSelectShowCompany = () => {
  const { testData } = useData();

  const getUserData = useCallback(
    (idx: number) => {
      return testData[idx];
    },
    [testData]
  );

  return {
    getUserData,
  };
};

export default useSelectShowCompany;
