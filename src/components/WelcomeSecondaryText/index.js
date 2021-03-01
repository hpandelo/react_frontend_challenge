import React from 'react'
import styled from 'styled-components';

const TextSpan = styled.span`
  color: #2c97d1;
  font-size: clamp(10px, 2vw, 24px);
`;

export default function WelcomeSecondaryText({ text }) {
  return (
    <div>
      <TextSpan>{text.toUpperCase()}</TextSpan>
    </div>
  );
};
