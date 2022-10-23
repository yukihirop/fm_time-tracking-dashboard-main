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

// ==========

const CardUser = styled.div`
  height: 518px;
  grid-column: 1 / 2;
  grid-row: 1 / 3;
  //
  border: solid 1px white;

  @media screen and (max-width: ${bp.md}) {
    width: 90vw;
    height: fit-content;
  }
`;

const CardUserAvatarContainer = styled.div`
  width: 255px;
  height: 70%;
  border-radius: 18px;
  background: var(--blue);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2.35rem 2rem;
  margin: auto;

  //
  border: solid 1px white;
`;

const CardUserAvatarImg = styled.img`
  width: 78px;
  height: 78px;
  margin-bottom: 2.35rem;
  border-radius: 100%;
  border: solid 4px white;
`;

const CardUserAvatarSection = styled.section`
  display: block;
`;
const CardUserAvatarReport = styled.h2`
  margin-bottom: 0.15rem;
  font-size: .95rem;
  font-weight: 300;
`;
const CardUserAvatarname = styled.h3`
  font-size: 2.5rem;
  font-weight: 300;
  color: white;
  opacity: .95;
`;

// ========

const CardContainer = styled.div`
  width: 255px;
  height: 244px;
  //
  border: solid 1px white;

  @media screen and (max-width: ${bp.md}) {
    width: 90vw;
  }
`;

// ========

const Home: NextPage = () => {
  return (
    <>
      <Container>
        <CardUser>
          <CardUserAvatarContainer>
            <figure>
              <CardUserAvatarImg
                src="/images/image-jeremy.png"
                alt="user photo"
              />
            </figure>
            <CardUserAvatarSection>
              <CardUserAvatarReport>Report for</CardUserAvatarReport>
              <CardUserAvatarname>Jeremy Robson</CardUserAvatarname>
            </CardUserAvatarSection>
          </CardUserAvatarContainer>
        </CardUser>
        {[...new Array(6)].map((_, i) => (
          <CardContainer key={i}>{i}</CardContainer>
        ))}
      </Container>
    </>
  );
};

export default Home;
