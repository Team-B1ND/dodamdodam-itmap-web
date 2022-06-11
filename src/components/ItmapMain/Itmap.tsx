import { useEffect } from "react";
import * as S from "./Itmap.style";
import useItMapContainer from "../../hooks/useItMapContainer/useItMapContainer";
import styled from "styled-components";


const Itmap = () => {

  const { MapSingleton } = useItMapContainer();

  useEffect(() => {
    MapSingleton.getInstance().initMap();
  }, [MapSingleton]);

  return (
    <MapWrapper>
      <div id="map" style={{ width: "100%", height: "100%" }}></div>
    </MapWrapper>
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
