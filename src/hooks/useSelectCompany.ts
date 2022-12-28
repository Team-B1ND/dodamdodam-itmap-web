import { useCallback } from "react";
import { useDispatch } from "react-redux";
import companyRepository from "repository/company/company.repository";
import { logo } from "store/Logo";
import { user } from "store/user";

const useSelectCompany = () => {
  const dispatch = useDispatch();
  const getUserData = useCallback(async (id: number, textLogo: string) => {
    try {
      const { data } = await companyRepository.GetCompanyUserData(id);
      data.map((item) => {
        return (item["isModifyid"] = false);
      });
      dispatch(user(data));
      dispatch(logo({ textLogo: textLogo }));
    } catch (error) {
      window.alert(error);
    }
  }, []);

  return {
    getUserData,
  };
};

export default useSelectCompany;
