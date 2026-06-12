import React from "react";
import styled from "styled-components";

const LogoutBtn = ({ children }) => {
  return (
    <StyledWrapper>
      <button className="Btn">
        <div className="sign">
          <svg viewBox="0 0 512 512">
            <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z" />
          </svg>
        </div>
        <div className="text">{children}</div>
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .Btn {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 36px;
    height: 36px;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition:
      width 0.3s ease,
      border-radius 0.3s ease;
    box-shadow: 0 2px 8px rgba(239, 68, 68, 0.35);
    background-color: #ef4444;
    flex-shrink: 0;
  }

  .sign {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    transition:
      width 0.3s ease,
      padding 0.3s ease;
  }

  .sign svg {
    width: 14px;
    height: 14px;
    flex-shrink: 0;
  }

  .sign svg path {
    fill: white;
  }

  .text {
    position: absolute;
    right: 0%;
    width: 0%;
    opacity: 0;
    color: white;
    font-size: 0.8rem;
    font-weight: 600;
    white-space: nowrap;
    transition:
      opacity 0.3s ease,
      width 0.3s ease;
  }

  .Btn:hover {
    width: 110px;
    border-radius: 20px;
  }

  .Btn:hover .sign {
    width: 32%;
    padding-left: 14px;
  }

  .Btn:hover .text {
    opacity: 1;
    width: 68%;
    padding-right: 10px;
  }

  .Btn:active {
    transform: scale(0.97);
  }
`;

export default LogoutBtn;
