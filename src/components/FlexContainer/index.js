import React from 'react'
import styled from 'styled-components';

const FlexContainerDiv = styled.div`
  width: 100%;
  height: 100%;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: baseline;

  & > div {
    width: 100%;
    padding: 10px;
  }
`;


export default function FlexContainer({ children }) {
  return <FlexContainerDiv>{ children }</FlexContainerDiv>;
};
