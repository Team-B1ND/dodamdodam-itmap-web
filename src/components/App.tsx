import styled from "styled-components";
import MapContanier from "./ItmapMain/index";


const App = () => {

  return (
    <AppSection>
      <MapContanier />
    </AppSection>
  );
};

const AppSection = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;

  @media screen and (max-width: 500px) {
    flex-direction: column-reverse;
    display: grid;
    width: 100%;
    height: 100%;
  }
`;

export default App;