import React from 'react'
import styled from '@emotion/styled'
import bp from 'styles/breakpoint'

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

export default Container
