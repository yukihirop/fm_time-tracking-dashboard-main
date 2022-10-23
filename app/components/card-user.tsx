import { useState } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import bp from "styles/breakpoint";

const CardUserContainer = styled.div`
  height: 518px;
  grid-column: 1 / 2;
  grid-row: 1 / 3;
  background: var(--dark-blue);
  border-radius: 1rem;

  @media screen and (max-width: ${bp.sm}) {
    width: 90vw;
    height: fit-content;
  }
`;

const CardUserAvatar = styled.div`
  width: 100%;
  height: 354px;
  border-radius: 1rem;
  background: var(--blue);
  display: flex;
  flex-direction: column;
  padding: 2.35rem 2rem;
  margin: auto;

  transition: all 0.3s ease-in-out;

  @media screen and (max-width: ${bp.sm}) {
    width: 100%;
    height: fit-content;
    flex-direction: row;
    align-items: center;
  }
`;

const CardUserAvatarImg = styled.img`
  width: 78px;
  height: 78px;
  margin-bottom: 2.35rem;
  border-radius: 50%;
  outline: 3px solid white;
  transition: all 0.3s ease-in-out;

  @media screen and (max-width: ${bp.sm}) {
    width: 65px;
    height: 65px;
    margin: 0 1rem 0 0;
  }
`;

const CardUserAvatarInfo = styled.section`
  display: block;
`;
const CardUserAvatarReport = styled.h2`
  margin-bottom: 0.15rem;
  font-size: 0.95rem;
  font-weight: 300;
`;
const CardUserAvatarName = styled.h3`
  font-size: 2.5rem;
  font-weight: 300;
  color: white;
  opacity: 0.95;

  @media screen and (max-width: ${bp.sm}) {
    font-size: 1.5rem;
  }
`;

const CardUserPeriod = styled.ul`
  padding: 1.6rem;
  border-radius: 0 0 1rem 1rem;

  @media screen and (max-width: ${bp.sm}) {
    padding: 1.5rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const CardUserPeriodItem = styled.li`
  color: var(--desaturated-blue);
  list-style: none;
  font-weight: 300;
  font-size: 1.15rem;
  margin-bottom: 1.2rem;

  &:hover {
    cursor: pointer;
  }

  @media screen and (max-width: ${bp.sm}) {
    margin-bottom: 0;
  }
`;

const CardUser = () => {
  const [active, setActive] = useState("Daily");

  return (
    <CardUserContainer>
      <CardUserAvatar>
        <figure>
          <CardUserAvatarImg src="/images/image-jeremy.png" alt="user photo" />
        </figure>
        <CardUserAvatarInfo>
          <CardUserAvatarReport>Report for</CardUserAvatarReport>
          <CardUserAvatarName>Jeremy Robson</CardUserAvatarName>
        </CardUserAvatarInfo>
      </CardUserAvatar>
      <CardUserPeriod>
        <CardUserPeriodItem
          css={active === "Daily" ? CardUserPeriodItemActive : undefined}
          onClick={(e) => setActive("Daily")}
        >
          <a href="#">Daily</a>
        </CardUserPeriodItem>
        <CardUserPeriodItem
          css={active === "Weekly" ? CardUserPeriodItemActive : undefined}
          onClick={(e) => setActive("Weekly")}
        >
          <a href="#">Weekly</a>
        </CardUserPeriodItem>
        <CardUserPeriodItem
          css={active === "Monthly" ? CardUserPeriodItemActive : undefined}
          onClick={(e) => setActive("Monthly")}
        >
          <a href="#">Monthly</a>
        </CardUserPeriodItem>
      </CardUserPeriod>
    </CardUserContainer>
  );
};

export default CardUser;

const CardUserPeriodItemActive = css`
  color: white;
`;
