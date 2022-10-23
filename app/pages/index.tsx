import type { NextPage } from "next";
import styled from "@emotion/styled";
import bp from "styles/breakpoint";

const Container = styled.div`
  width: 100%;
  max-width: 1143px;
  height: fit-content;
  min-height: 520px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(0, 255px));
  grid-template-rows: repeat(auto-fit, 244px);
  justify-content: center;
  gap: 1.875rem;
  padding: 1rem;
  margin: auto;

  @media screen and (max-width: ${bp.md}) {
    width: 100%;
    max-width: 500px;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
  }
`;

const CardUser = styled.div`
  height: 518px;
  grid-column: 1 / 2;
  grid-row: 1 / 3;
  //
  border: solid 1px white;

  @media screen and (max-width: ${bp.md}) {
    width: 90vw;
    height: 200px;
  }
`;

const CardContainer = styled.div`
  width: 255px;
  height: 244px;
  //
  border: solid 1px white;

  @media screen and (max-width: ${bp.md}) {
    width: 90vw;
  }
`;

const Home: NextPage = () => {
  return (
    <>
      <Container>
        <CardUser />
        {[...new Array(6)].map((_, i) => (
          <CardContainer key={i}>{i}</CardContainer>
        ))}
      </Container>
    </>
  );
};

export default Home;
