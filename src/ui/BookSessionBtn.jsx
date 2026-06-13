import React from "react";
import styled from "styled-components";

const BookSessionBtn = ({ children }) => {
  return (
    <StyledWrapper>
      <button className="button">
        {children}
        <svg className="icon" viewBox="0 0 24 24" fill="currentColor">
          <path
            fillRule="evenodd"
            d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .button {
    position: relative;
    overflow: hidden;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 6px;

    padding: 0.45rem 1rem;
    font-size: 0.8rem;
    font-weight: 700;
    color: #fff;
    background-color: #2563eb;
    border: 2px solid rgba(255, 255, 255, 0.25);
    border-radius: 9999px;
    cursor: pointer;
    white-space: nowrap;

    box-shadow: 0 4px 14px rgba(37, 99, 235, 0.4);
    transition:
      transform 0.2s ease,
      box-shadow 0.2s ease,
      border-color 0.2s ease;
  }

  .icon {
    width: 16px;
    height: 16px;
    flex-shrink: 0;
    transition: transform 0.25s ease;
  }

  /* Shine sweep */
  .button::before {
    content: "";
    position: absolute;
    width: 80px;
    height: 100%;
    background-image: linear-gradient(
      120deg,
      rgba(255, 255, 255, 0) 20%,
      rgba(255, 255, 255, 0.7),
      rgba(255, 255, 255, 0) 80%
    );
    top: 0;
    left: -80px;
    opacity: 0;
  }

  .button:hover {
    transform: scale(1.04);
    border-color: rgba(255, 255, 255, 0.55);
    box-shadow: 0 6px 20px rgba(37, 99, 235, 0.5);
  }

  .button:hover .icon {
    transform: translateX(3px);
  }

  .button:hover::before {
    animation: shine 1.4s ease-out infinite;
    opacity: 0.6;
  }

  .button:active {
    transform: scale(0.97);
  }

  @keyframes shine {
    0% {
      left: -80px;
    }
    60% {
      left: 100%;
    }
    100% {
      left: 100%;
    }
  }
`;

export default BookSessionBtn;
