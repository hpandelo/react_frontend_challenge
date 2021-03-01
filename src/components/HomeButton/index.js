import React from 'react'
import styled from 'styled-components';

const Button = styled.button`
  color: #fff;
  text-align: center;
  background-color: #2c97d1;

  width: 150px;
  height: 52px;
  cursor: pointer;
  font-size: 24px;
  font-weight: bold;
  border: 1px solid;
  border-radius: 8px;

  margin-top: 32px;
`;

export default function HomeButton({ label, handleClick }) {
  return (
    <div>
      <Button onClick={ handleClick }>{label}</Button>
    </div>
  );
};
