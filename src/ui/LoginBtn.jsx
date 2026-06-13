import React from "react";
import styled from "styled-components";

const LoginBtn = ({ children, variant = "solid" }) => {
  return (
    <StyledWrapper $variant={variant} className="text-sm">
      <button className="text-sm">
        {children}
        <div className="arrow-wrapper font-normal -size-4">
          <div className="arrow" />
        </div>
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  button {
    --arrow-width: 6px;
    --arrow-stroke: 1px;
    box-sizing: border-box;
    border: none;
    border-radius: 10px;
    padding: 0;
    display: flex;
    align-items: center;
    gap: 0.5em;
    font-weight: 400;
    font-size: 0.675rem;
    cursor: pointer;
    transition:
      background 0.2s,
      color 0.2s,
      border-color 0.2s;

    /* Solid (Signup) */
    background: ${({ $variant }) =>
      $variant === "outline" ? "transparent" : "#2563eb"};
    color: ${({ $variant }) =>
      $variant === "outline" ? "#2563eb" : "#ffffff"};
    border: 1.5px solid #2563eb;
  }

  button .arrow-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  button .arrow {
    margin-top: 1px;
    width: var(--arrow-width);
    height: var(--arrow-stroke);
    position: relative;
    transition: 0.2s;
    background: ${({ $variant }) =>
      $variant === "outline" ? "#2563eb" : "#2563eb"};
  }

  button .arrow::before {
    content: "";
    box-sizing: border-box;
    position: absolute;
    border: solid;
    border-color: ${({ $variant }) =>
      $variant === "outline" ? "#2563eb" : "#ffffff"};
    border-width: 0 var(--arrow-stroke) var(--arrow-stroke) 0;
    display: inline-block;
    top: -3px;
    right: 3px;
    transition: 0.2s;
    padding: 1px;
    transform: rotate(-45deg);
  }

  /* Solid hover */
  button:hover {
    background: ${({ $variant }) =>
      $variant === "outline" ? "#eff6ff" : "#1d4ed8"};
    border-color: ${({ $variant }) =>
      $variant === "outline" ? "#2563eb" : "#1d4ed8"};
    color: ${({ $variant }) =>
      $variant === "outline" ? "#1d4ed8" : "#ffffff"};
  }

  button:hover .arrow {
    background: ${({ $variant }) =>
      $variant === "outline" ? "#1d4ed8" : "#ffffff"};
  }

  button:hover .arrow::before {
    right: 0;
    border-color: ${({ $variant }) =>
      $variant === "outline" ? "#1d4ed8" : "#ffffff"};
  }

  /* Dark mode */
  @media (prefers-color-scheme: dark) {
    button {
      background: ${({ $variant }) =>
        $variant === "outline" ? "transparent" : "#2563eb"};
      color: ${({ $variant }) =>
        $variant === "outline" ? "#60a5fa" : "#ffffff"};
      border-color: ${({ $variant }) =>
        $variant === "outline" ? "#3b82f6" : "#2563eb"};
    }

    button .arrow {
      background: ${({ $variant }) =>
        $variant === "outline" ? "#60a5fa" : "#ffffff"};
    }

    button .arrow::before {
      border-color: ${({ $variant }) =>
        $variant === "outline" ? "#60a5fa" : "#ffffff"};
    }

    button:hover {
      background: ${({ $variant }) =>
        $variant === "outline" ? "rgba(59,130,246,0.15)" : "#1d4ed8"};
    }
  }
`;

export default LoginBtn;
