import React from 'react'
import styled from 'styled-components';

const TextSpan = styled.span`
  color: #2c97d1;
  font-size: clamp(16px, 6vw, 80px);
  line-height: 20px;
`;

export default function WelcomePrimaryText({ baseLabel, companyName }) {
  return (
    <div>
      <TextSpan>{baseLabel} <strong>{companyName}</strong></TextSpan>
    </div>
  );
};
