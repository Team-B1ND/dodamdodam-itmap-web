import styled from "styled-components";
import MapContanier from "../components/ItmapMain/index";
import NavContainer from "../components/ItmapNav/index";


const App = () => {
    return (
        <AppSection>
            <NavContainer />
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
    width: 100%;
    height: 100%;
  }
`;

export default App;