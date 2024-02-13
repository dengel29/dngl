import {css} from 'lit'

export const rootStyles = css`
  :host {
    --font-1: Work Sans
    --font-2: Outfit
  }
`;

export const ppStyles= (visited) => {
  if (visited) {
    return css`
    .letter:is(:nth-of-type(2), :nth-of-type(3), :nth-of-type(4), :nth-of-type(7)) {
      display:none;
    }
    `
  } else {
    return css`
    .letter:nth-of-type(2) {
      animation: fadeInUp 1s forwards;
      animation-delay: 1s;
    }
    .letter:nth-of-type(3) {
      animation: travelLeft 1s forwards;
      animation-delay: 1.2s;
    }
    .letter:nth-of-type(4) {
      animation: fadeInUp 1s forwards;
      animation-delay: 1.3s;
    }
    .letter:nth-of-type(5) {
      animation: fadeInUp 1s forwards;
      animation-delay: 1.7s;
    }
    .letter:nth-of-type(6) {
      animation: travelLeftMore 1s forwards;
      animation-delay: 2s;
    }
    .letter:nth-of-type(7) {
      animation: fadeInUp 1s forwards;
      animation-delay: 2.2s;
    }
    .letter:nth-of-type(8) {
      animation: travelLeftMost 1s forwards;
      animation-delay: 2.6s;
    }
    @keyframes fadeInUp {
      0% {
        transform: translateY(0px);
        opacity: 1;
      }
      50% {
        opacity: 0;
      }
      100% {
        opacity: 0;
        display: none;
        transform: translateY(-50px);
      }
    }
    @keyframes travelLeft {
      0% {
        transform: translate(0px, 0px);
      }
      100% {
        transform: translate(-20px, 0px);
      }
    }
    @keyframes travelLeftMore {
      0% {
        transform: translate(0px, 0px);
      }
      100% {
        transform: translate(-60px, 0px);
      }
    }
    @keyframes travelLeftMost {
      0% {
        transform: translate(0px, 0px);
      }
      90% {
        transform: translate(-75px, 0px);
      }
      100% {
        transform: translate(-80px, 0px);
      }
    }
    `
  }
}