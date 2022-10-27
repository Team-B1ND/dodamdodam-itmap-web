import { useCallback } from "react";
import { useDispatch } from "react-redux";
import companyRepository from "repository/company/company.repository";
import { user } from "store/user";

const useSelectCompany = () => {
  const dispatch = useDispatch();
  const getUserData = useCallback(async (id: number) => {
    try {
      const { data } = await companyRepository.GetCompanyUserData(id);
      dispatch(user(data));
    } catch (error) {
      window.alert(error);
    }
  }, []);

  return {
    getUserData,
  };
};

export default useSelectCompany;
