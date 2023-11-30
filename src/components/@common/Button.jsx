import styled, { css } from "styled-components";
import { device } from "../../utils/media";

export default function Button({ size, text, $primary }) {
  return (
    <StButton size={size} $primary={$primary}>
      {text}
    </StButton>
  );
}

const StButton = styled.button`
  ${(props) =>
    props.size === "medium" &&
    css`
      width: 160px;
      height: 58px;
      border: none;
      border-radius: 8px;
      outline: none;
      font-size: 1.25rem;
      font-weight: 300;
      font-family: "Jua";
      color: #fff;
      background: #ffa500;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;

      @media ${device.mobile} {
        width: 100%;
      }
    `}

  ${(props) =>
    props.$primary === "true" &&
    css`
      border: 3px solid #ffa500;
      color: #ffa500;
      background: #fff;
    `}
`;
