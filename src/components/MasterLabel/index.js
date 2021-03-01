import React from 'react'
import styled from 'styled-components';

const TextSpan = styled.span`
  color: ${props => props.textColor};
  font-size: 24px;
`;

const Container = styled.div`
  order: ${props => props.order};
`;

export default function MasterLabel({ baseLabel, masterName, order, textColor }) {
  return (
    <Container order={ order }>
      <TextSpan textColor={ textColor }>{ baseLabel } <strong>{ masterName }</strong></TextSpan>
    </Container>
  );
};
