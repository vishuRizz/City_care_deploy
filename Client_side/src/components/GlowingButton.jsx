import React from "react";
import styled from "styled-components";

const GlowingButton = () => {
  return (
    <StyledWrapper>
      <button className="shadow__btn">Emergency</button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .shadow__btn {
    padding: 10px 20px;
    border: none;
    font-size: 17px;
    color: #fff;
    border-radius: 7px;
    letter-spacing: 4px;
    font-weight: 700;
    text-transform: uppercase;
    transition: 0.5s;
    transition-property: box-shadow;
  }

  .shadow__btn {
    background: rgba(240,78,47,255);
    box-shadow: 0 0 25px rgba(240,78,47,255);
  }

  .shadow__btn:hover {
    box-shadow: 0 0 5px rgba(240,78,47,255), 0 0 25px rgba(240,78,47,255),
      0 0 50px rgba(240,78,47,255), 0 0 100px rgba(240,78,47,255);
  }
`;

export default GlowingButton;
