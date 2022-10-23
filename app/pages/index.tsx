import type { NextPage } from "next";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import bp from "styles/breakpoint";
import CardUser from "components/card-user";

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

  @media screen and (max-width: ${bp.sm}) {
    width: 100%;
    max-width: 500px;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
  }
`;

// ========

const CardActivitiesContainer = styled.div`
  &:nth-child(2) {
    background: var(--light-orange);
    background-image: url("images/icon-work.svg");
    background-repeat: no-repeat;
    background-position-x: 9.95rem;
    background-position-y: -0.68rem;
  }

  &:nth-child(3) {
    background: var(--soft-blue);
    background-image: url("images/icon-play.svg");
    background-repeat: no-repeat;
    background-position-x: 9.9rem;
    background-position-y: -0.3rem;
  }

  &:nth-child(4) {
    background: var(--light-red);
    background-image: url("images/icon-study.svg");
    background-repeat: no-repeat;
    background-position-x: 9.95rem;
    background-position-y: -0.4rem;
  }

  &:nth-child(5) {
    background-color: var(--lime-green);
    background-image: url(images/icon-exercise.svg);
    background-repeat: no-repeat;
    background-position-x: 9.8rem;
    background-position-y: -0.05rem;
  }

  &:nth-child(6) {
    background: var(--violet);
    background-image: url(images/icon-social.svg);
    background-repeat: no-repeat;
    background-position-x: 10.45rem;
    background-position-y: -0.9rem;
  }

  &:nth-child(7) {
    background: var(--soft-orange);
    background-image: url(images/icon-self-care.svg);
    background-repeat: no-repeat;
    background-position-x: 10.8rem;
    background-position-y: -0.65rem;
  }

  width: 255px;
  height: 244px;
  border-radius: 1rem 1rem 1.25rem 1.25rem;
  display: flex;
  align-items: flex-end;

  @media screen and (max-width: ${bp.sm}) {
    width: 90vw;
    height: 160px;

    &:nth-child(n) {
      background-position-x: 93%;
    }
  }
`;

const CardActivitiesData = styled.div`
  width: 100%;
  height: 199px;
  border-radius: 1rem;
  background: var(--dark-blue);
  padding: 1.8rem 1.9rem;

  &:hover {
    cursor: pointer;
    background: var(--card-hover-blue);
  }

  @media screen and (max-width: ${bp.sm}) {
    height: 120px;
    padding: 1.5rem;
  }
`;

const CardActivitiesDataHeader = styled.section`
  width: 100%;
  margin-bottom: 1.45rem;
  display: flex;
  justify-content: space-between;
`;

const CardActivitiesDataHeaderTitle = styled.h2`
  font-size: 1.1rem;
  font-weight: 400;
  letter-spacing: 0.03rem;
`;

const CardActivitiesDataContent = styled.section`
  @media screen and (max-width: ${bp.sm}){
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`

const CardActivitiesDataContentHour = styled.h2`
  margin-bottom: 0.45rem;
  font-size: 3.48rem;
  font-weight: 300;

  @media screen and (max-width: ${bp.sm}) {
    font-size: 2rem;
  }
`
const CardActivitiiesDataContentWeek = styled.p`
  font-size: 0.95rem;
  font-weight: 300;
  color: var(--pale-blue);
`;

// ========

// =======

const Home: NextPage = () => {
  return (
    <>
      <Container>
        <CardUser />
        {[...new Array(6)].map((_, i) => (
          <CardActivitiesContainer key={i}>
            <CardActivitiesData>
              <CardActivitiesDataHeader>
                <CardActivitiesDataHeaderTitle>
                  Work
                </CardActivitiesDataHeaderTitle>
                <figure>
                  <img src="images/icon-ellipsis.svg" />
                </figure>
              </CardActivitiesDataHeader>
              <CardActivitiesDataContent>
                <CardActivitiesDataContentHour>32hrs</CardActivitiesDataContentHour>
                <CardActivitiiesDataContentWeek>Last Week - 36hrs</CardActivitiiesDataContentWeek>
              </CardActivitiesDataContent>
            </CardActivitiesData>
          </CardActivitiesContainer>
        ))}
      </Container>
    </>
  );
};

export default Home;
