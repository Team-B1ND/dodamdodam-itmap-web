import { useEffect } from "react";
import * as S from "./Itmap.style";
// import useItMapContainer from "../../hooks/useItMapContainer/useItMapContainer";
import styled from "styled-components";
import useData from "hooks/useData";


const Itmap = () => {

  // const { MapSingleton } = useItMapContainer();
  const { testData } = useData();

  // useEffect(() => {
  //   MapSingleton.getInstance().initMap({ testData });
  // }, [MapSingleton, testData]);

  return (
    <></>



  );
};

const MapWrapper = styled.div`
  width: 85%;
  height: 100%;

  @media screen and (max-width: 500px) {
    height: 60vh;
  }
`;

export default Itmap;
