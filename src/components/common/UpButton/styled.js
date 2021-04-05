import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled, { css } from "styled-components";

export const StyledUpButton = styled.div`
  position: fixed;
  right: 40px;
  bottom: 40px;
  z-index: 100;
  cursor: pointer;
  color: ${({ theme }) => theme.color.primaryColor};
  animation: up 2s infinite linear;
  @keyframes up {
    0% {
      bottom: 40px;
      opacity: 1;
    }
    100% {
      bottom: 70px;
      opacity: 0;
    }
  }
  ${({ hide }) =>
    hide &&
    css`
      display: none;
    `}
`;
export const StyledText = styled.h3`
  margin: 0;
  text-align: center;
`;
export const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  font-size: 80px;
  font-weight: 600;
`;
