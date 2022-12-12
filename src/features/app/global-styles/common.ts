import { createGlobalStyle } from 'styled-components';

export const Common = createGlobalStyle`
    html {
        font-family: 'Space Grotesk', sans-serif;
        font-size: 16px;
    }

    body {
        overflow-x: hidden;
        overflow-y: auto;
        background-color: #fff;
        color: #1c1526;
        line-height: 1.15;
    }

    /* Chrome, Safari, Edge, Opera */
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    /* Firefox */
    input[type=number] {
        -moz-appearance: textfield;
    }


    .modal-enter .modalContent {
        opacity: 0;
        transform: scale(0.9);
      }
      .modal-enter-active .modalContent {
        opacity: 1;
        transform: translateX(0);
        transition: all 0.2s;
      }
      .modal-exit .modalContent {
        opacity: 1;
      }
      .modal-exit-active .modalContent {
        opacity: 0;
        transform: scale(0.9);
        transition: all 0.2s;
      }

`;
