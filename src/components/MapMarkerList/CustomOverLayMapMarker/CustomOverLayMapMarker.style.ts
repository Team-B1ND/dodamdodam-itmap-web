import { palette } from "style/palette";
import styled from "styled-components";

export const CustomOverlayContainar = styled.div`
  background-color: ${palette.main};
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  padding: 12px;
  border-radius: 4px;
`;

export const UserCompanyNameContanier = styled.div`
  padding: 8px;
`;

export const BoxTail = styled.div`
  position: absolute;
  bottom: -9px;
  left: 50%;
  transform: translate(-50%) rotate(45deg);
  width: 20px;
  height: 20px;
  background-color: ${palette.main};
  z-index: -1;
`;
