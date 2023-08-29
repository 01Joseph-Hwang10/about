import { keyframes } from "@emotion/react";

const dropIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-50px);
  }

  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

export default {
  dropIn,
};
