import React from "react";
import styled from "@emotion/styled";
import bp from "styles/breakpoint";

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
  @media screen and (max-width: ${bp.sm}) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const CardActivitiesDataContentHour = styled.h2`
  margin-bottom: 0.45rem;
  font-size: 3.48rem;
  font-weight: 300;

  @media screen and (max-width: ${bp.sm}) {
    font-size: 2rem;
  }
`;
const CardActivitiiesDataContentWeek = styled.p`
  font-size: 0.95rem;
  font-weight: 300;
  color: var(--pale-blue);
`;

type Props = {
  title: string;
  period: string;
  timeframesCurrent: number;
  timeframesPrevious: number;
};

const CardActivities = ({
  title,
  period,
  timeframesCurrent,
  timeframesPrevious,
}: React.PropsWithChildren<Props>) => {
  const formattedPeriod = () => {
    if (period === "daily") return "Day";
    if (period === "weekly") return "Weekly";
    if (period === "monthly") return "Monthly";
  };
  return (
    <CardActivitiesContainer>
      <CardActivitiesData>
        <CardActivitiesDataHeader>
          <CardActivitiesDataHeaderTitle>{title}</CardActivitiesDataHeaderTitle>
          <figure>
            <img src="images/icon-ellipsis.svg" />
          </figure>
        </CardActivitiesDataHeader>
        <CardActivitiesDataContent>
          <CardActivitiesDataContentHour>
            {timeframesCurrent}hrs
          </CardActivitiesDataContentHour>
          <CardActivitiiesDataContentWeek>
            Last {formattedPeriod()} - {timeframesPrevious}hrs
          </CardActivitiiesDataContentWeek>
        </CardActivitiesDataContent>
      </CardActivitiesData>
    </CardActivitiesContainer>
  );
};

export default CardActivities;
