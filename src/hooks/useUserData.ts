import { useCallback, useEffect, useState } from "react";
import itmapRepository from "repository/itmap.repository";

const useUserData = () => {
  const [userData, setUserData] = useState<any[]>([]);

  const getUserData = useCallback(async () => {
    try {
      const { data } = await itmapRepository.getUserData();
      setUserData(data);
      console.log("렌더링.....");
    } catch (error) {
      window.alert("오류...");
    }
  }, []);

  return {
    getUserData,
    userData,
  };
};

export default useUserData;
