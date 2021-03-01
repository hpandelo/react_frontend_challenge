import React from "react";
import styled from "styled-components";

const Button = styled.button`
  color: ${(props) => props.textColor};
  text-align: center;
  background-color: ${(props) => props.bgColor};

  width: 350px;
  height: 52px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  border: 1px solid;
  border-radius: 8px;

  margin-top: 32px;
`;

const Container = styled.div`
  order: ${(props) => props.order};
`;

export default function DestinyButton({
  label,
  order,
  bgColor,
  textColor,
  handleClick,
}) {

  return (
    <Container order={order}>
      <Button bgColor={bgColor} textColor={textColor} onClick={handleClick}>
        {label}
      </Button>
    </Container>
  );
}
