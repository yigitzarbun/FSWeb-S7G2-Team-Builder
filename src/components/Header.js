import React from "react";
import styled from "styled-components";
export default function Header() {
  const StyledHeader = styled.div`
    background-color: #222831;
    color: white;
    margin-bottom: 2vh;
  `;
  const StyledTitle = styled.h1`
    font-size: 2.5rem;
  `;
  return (
    <StyledHeader>
      <StyledTitle>The Errors</StyledTitle>
    </StyledHeader>
  );
}
