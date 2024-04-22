import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import "../../styles/index.css";

@customElement("d-grid")
export class DGrid extends LitElement {
  // @property({ type: String, attribute: "todo-text" })
  // public todoText = "";

  // @property({ type: Boolean, attribute: "is-checked" })
  // public isChecked = false;

  static get styles() {
    return [
      css`
        .home {
          display: grid;
          height: 100%;
          width: 100vw;
          place-items: center;
        }
        .grid {
          --max-w: 70vmin;
          --max-h: 70vmin;
          --total-rows: 7;
          --row-size: calc(var(--max-h) / var(--total-rows));
          padding: 20px 20px;
          grid-template-rows:
            var(--row-size) var(--row-size) var(--row-size) var(--row-size)
            var(--row-size) var(--row-size) var(--row-size);
          --total-cols: 9;
          --col-size: calc(var(--max-w) / var(--total-cols));
          grid-template-columns:
            var(--col-size) var(--col-size) var(--col-size) var(--col-size)
            var(--col-size) var(--col-size) var(--col-size) var(--col-size) var(--col-size);
          display: grid;
          grid-gap: 2px 2px;
          background-color: rgba(40, 91, 212, 1);
          transition: all 750ms;
          --total-rows: 7;
          --squish-size: 2;
          --squish-vmin: calc(1vmin * var(--squish-size));
          --rows-squished: 0;
          --remainder-after-squish: calc(
            var(--max-h) - (var(--squish-vmin) * var(--rows-squished))
          );
          --rows-grow: calc(var(--total-rows) - var(--rows-squished));
          --grow-row: calc(var(--remainder-after-squish) / var(--rows-grow));
          --max-w: 70vmin;
          --remainder-after-squish: calc(
            var(--max-w) - (var(--squish-vmin) * var(--cols-squished))
          );
          --cols-grow: calc(var(--total-cols) - var(--cols-squished));
          --grow-col: calc(var(--remainder-after-squish) / var(--cols-grow));
          --squish-col: var(--squish-vmin);
          --squish-row: var(--squish-vmin);
          &:has(:is([data-q="1"]):hover) {
            border: 10x solid currentColor;
            [data-q="1"],
            [data-q="2"],
            [data-q="3"],
            [data-q="c"],
            [data-q="rc"],
            [data-q="r"],
            [data-q="4"] {
              border-radius: 10px;
              transform: skew(0deg);
            }
            [data-q="4"] {
              background-color: rgba(171, 53, 163, 1);
            }
            --squish-size: 2;
            --cols-squished: 5;
            transition-timing-function: cubic-bezier(0.5, 0.8, 0.19, 1.8);
            grid-template-columns:
              var(--grow-col) var(--grow-col) var(--grow-col) var(--squish-col)
              var(--squish-col) var(--squish-col) var(--squish-col) var(
                --squish-col
              )
              var(--grow-col);
            --rows-squished: 3;
            grid-template-rows:
              var(--grow-row) var(--grow-row) var(--grow-row) var(--grow-row)
              var(--squish-row) var(--squish-row) var(--squish-row);
          }
          &:has(:is([data-q="2"]):hover) {
            [data-q="1"],
            [data-q="2"],
            [data-q="3"],
            [data-q="c"],
            [data-q="rc"],
            [data-q="r"],
            [data-q="4"] {
              border-radius: 10px;
              transform: skew(0deg);
            }
            background: rgb(205, 219, 222) 0.1%;
            --squish-size: 2;
            --cols-squished: 5;
            transition-timing-function: cubic-bezier(0.5, 0.8, 0.19, 1.8);
            transition-delay: 50ms;
            grid-template-columns:
              var(--squish-col) var(--squish-col) var(--squish-col) var(
                --squish-col
              )
              var(--squish-col) var(--grow-col) var(--grow-col) var(--grow-col) var(--grow-col);
            --rows-squished: 4;
            grid-template-rows:
              var(--grow-row) var(--grow-row) var(--grow-row) var(--squish-row)
              var(--squish-row) var(--squish-row) var(--squish-row);
          }
          &:has(:is([data-q="3"]):hover) {
            border: 10x solid currentColor;
            [data-q="1"],
            [data-q="2"],
            [data-q="3"],
            [data-q="c"],
            [data-q="r"],
            [data-q="4"] {
              border-radius: 10px;
              transform: skew(0deg);
            }
            [data-q="2"] {
              border-radius: 10px;
              background-color: magenta;
            }
            background: rgb(77, 72, 72);
            --squish-size: 2;
            --cols-squished: 6;
            --rows-squished: 4;
            transition-timing-function: cubic-bezier(0.5, 0.8, 0.19, 1.8);
            grid-template-columns:
              var(--grow-col) var(--grow-col) var(--grow-col)
              var(--squish-col) var(--squish-col) var(--squish-col) var(
                --squish-col
              )
              var(--squish-col) var(--squish-col);
            grid-template-rows:
              var(--squish-row) var(--squish-row) var(--squish-row) var(
                --squish-row
              )
              var(--grow-row) var(--grow-row) var(--grow-row);
          }
          &:has(:is([data-q="4"]):hover) {
            border: 10x solid currentColor;
            [data-q="1"] {
              border-radius: 10px;
              background-color: rgba(40, 91, 212, 1);
            }
            [data-q="1"],
            [data-q="2"],
            [data-q="3"],
            [data-q="c"],
            [data-q="r"],
            [data-q="4"] {
              transform: skew(0deg);
            }
            background: rgba(171, 53, 163, 1);
            --squish-size: 2;
            --cols-squished: 7;
            --rows-squished: 4;
            transition-timing-function: cubic-bezier(0.5, 0.8, 0.19, 1.8);
            grid-template-columns:
              var(--squish-col) var(--squish-col) var(--squish-col)
              var(--squish-col) var(--squish-col) var(--squish-col) var(
                --squish-col
              )
              var(--grow-col) var(--grow-col);
            grid-template-rows:
              var(--squish-row) var(--squish-row) var(--squish-row) var(
                --squish-row
              )
              var(--grow-row) var(--grow-row) var(--grow-row);
          }
          &:has(:is([data-q="rc"]):hover) {
            border: 10x solid currentColor;
            background: rgba(171, 53, 163, 1);
            [data-q="1"],
            [data-q="2"],
            [data-q="3"],
            [data-q="4"] {
              border-radius: calc(1px * var(--y));
              background-color: rgb(77, 72, 72);
            }
            [data-q="1"],
            [data-q="2"],
            [data-q="3"],
            [data-q="c"],
            [data-q="r"],
            [data-q="rc"],
            [data-q="4"] {
              transform: skew(0deg);
            }
            --squish-size: 2;
            --cols-squished: 8;
            --rows-squished: 6;
            transition-timing-function: cubic-bezier(0.5, 0.8, 0.19, 1.8);
            grid-template-columns:
              var(--squish-col) var(--squish-col) var(--squish-col)
              var(--squish-col) var(--grow-col) var(--squish-col) var(
                --squish-col
              )
              var(--squish-col) var(--squish-col);
            grid-template-rows:
              var(--squish-row) var(--squish-row) var(--squish-row) var(
                --grow-row
              )
              var(--squish-row) var(--squish-row) var(--squish-row);
          }
          &:has(:is([data-q="r"]):hover) {
            border: 10x solid currentColor;
            background: rgba(171, 53, 163, 1);
            [data-q="c"] {
              background-color: rgb(77, 72, 72);
            }
            [data-q="1"],
            [data-q="2"],
            [data-q="3"],
            [data-q="c"],
            [data-q="r"],
            [data-q="rc"],
            [data-q="4"] {
              border-radius: 10px;
              transform: skew(0deg);
            }
            --squish-size: 2;
            --cols-squished: 0;
            --rows-squished: 6;
            --remainder-after-squish: calc(
              var(--max-h) - (var(--squish-vmin) * var(--rows-squished))
            );
            --rows-grow: calc(var(--total-rows) - var(--rows-squished));
            --grow-row: calc(var(--remainder-after-squish) / var(--rows-grow));
            transition-timing-function: cubic-bezier(0.5, 0.8, 0.19, 1.8);
            grid-template-rows:
              var(--squish-row) var(--squish-row) var(--squish-row) var(
                --grow-row
              )
              var(--squish-row) var(--squish-row) var(--squish-row);
          }
          &:has(:is([data-q="c"]):hover) {
            [data-q="1"],
            [data-q="2"],
            [data-q="3"],
            [data-q="c"],
            [data-q="r"],
            [data-q="rc"],
            [data-q="4"] {
              transform: skew(0deg);
            }
            border: 10x solid currentColor;
            background: rgba(171, 53, 163, 1);
            --squish-size: 2;
            --cols-squished: 8;
            --rows-squished: 1;
            transition-timing-function: cubic-bezier(0.5, 0.8, 0.19, 1.8);
            grid-template-columns:
              var(--squish-col) var(--squish-col) var(--squish-col)
              var(--squish-col) var(--grow-col) var(--squish-col) var(
                --squish-col
              )
              var(--squish-col) var(--squish-col);
            grid-template-rows:
              var(--row-size) var(--row-size) var(--row-size) var(--row-size)
              var(--row-size) var(--row-size) var(--row-size);
          }
          > * {
            width: 100%;
            transform: skew(calc(var(--x) * -12deg + var(--y)));
            transition: all 250ms;
            background: rgba(255, 204, 112, 1) 97.7%;
            transition-delay: calc(50ms * var(--x));
            border-radius: 7px;
          }
        }

        @keyframes shuffle {
        }

        @keyframes all-col {
          0%,
          15% {
            --max-w: 70vmin;
            --max-h: 70vmin;
            --total-cols: 9;
            --squish-size: 2;
            --squish-vmin: calc(1vmin * var(--squish-size));
            --cols-squished: 5;
            --remainder-after-squish: calc(
              var(--max-w) - (var(--squish-vmin) * var(--cols-squished))
            );
            --cols-grow: calc(var(--total-cols) - var(--cols-squished));
            --grow-vmin: calc(var(--remainder-after-squish) / var(--cols-grow));
            --squish-col: var(--squish-vmin);
            --grow-col: var(--grow-vmin);
            grid-template-columns:
              var(--squish-col) var(--grow-col) var(--squish-col) var(
                --grow-col
              )
              var(--squish-col) var(--grow-col) var(--squish-col) var(
                --grow-col
              )
              var(--squish-col);
          }
          20%,
          25% {
            --max-w: 70vmin;
            --max-h: 70vmin;
            --total-cols: 9;
            --squish-size: 2;
            --squish-vmin: calc(1vmin * var(--squish-size));
            --cols-squished: 1;
            --remainder-after-squish: calc(
              var(--max-w) - (var(--squish-vmin) * var(--cols-squished))
            );
            --cols-grow: calc(var(--total-cols) - var(--cols-squished));
            --grow-vmin: calc(var(--remainder-after-squish) / var(--cols-grow));
            --squish-col: var(--squish-vmin);
            --grow-col: var(--grow-vmin);
            grid-template-columns:
              var(--squish-col) var(--grow-col) var(--grow-col) var(--grow-col)
              var(--grow-col) var(--grow-col) var(--grow-col) var(--grow-col) var(--grow-col);
          }
          30%,
          35% {
            --max-w: 70vmin;
            --max-h: 70vmin;
            --total-cols: 9;
            --squish-size: 2;
            --squish-vmin: calc(1vmin * var(--squish-size));
            --cols-squished: 1;
            --remainder-after-squish: calc(
              var(--max-w) - (var(--squish-vmin) * var(--cols-squished))
            );
            --cols-grow: calc(var(--total-cols) - var(--cols-squished));
            --grow-vmin: calc(var(--remainder-after-squish) / var(--cols-grow));
            --squish-col: var(--squish-vmin);
            --grow-col: var(--grow-vmin);
            grid-template-columns:
              var(--grow-col) var(--grow-col) var(--grow-col) var(--grow-col)
              var(--grow-col) var(--grow-col) var(--grow-col) var(--grow-col) var(--squish-col);
          }
          40%,
          45% {
            --max-w: 70vmin;
            --max-h: 70vmin;
            --total-cols: 9;
            --squish-size: 2;
            --squish-vmin: calc(1vmin * var(--squish-size));
            --cols-squished: 2;
            --remainder-after-squish: calc(
              var(--max-w) - (var(--squish-vmin) * var(--cols-squished))
            );
            --cols-grow: calc(var(--total-cols) - var(--cols-squished));
            --grow-vmin: calc(var(--remainder-after-squish) / var(--cols-grow));
            --squish-col: var(--squish-vmin);
            --grow-col: var(--grow-vmin);
            grid-template-columns:
              var(--grow-col) var(--grow-col) var(--grow-col) var(--grow-col)
              var(--grow-col) var(--squish-col) var(--squish-col) var(
                --grow-col
              )
              var(--grow-col);
          }
          50%,
          55% {
            --max-w: 70vmin;
            --max-h: 70vmin;
            --total-cols: 9;
            --squish-size: 2;
            --squish-vmin: calc(1vmin * var(--squish-size));
            --cols-squished: 2;
            --remainder-after-squish: calc(
              var(--max-w) - (var(--squish-vmin) * var(--cols-squished))
            );
            --cols-grow: calc(var(--total-cols) - var(--cols-squished));
            --grow-vmin: calc(var(--remainder-after-squish) / var(--cols-grow));
            --squish-col: var(--squish-vmin);
            --grow-col: var(--grow-vmin);
            grid-template-columns:
              var(--grow-col) var(--squish-col) var(--squish-col) var(
                --grow-col
              )
              var(--grow-col) var(--grow-col) var(--grow-col) var(--grow-col) var(--grow-col);
          }
          60%,
          65% {
            --max-w: 70vmin;
            --max-h: 70vmin;
            --total-cols: 9;
            --squish-size: 3;
            --squish-vmin: calc(1vmin * var(--squish-size));
            --cols-squished: 3;
            --remainder-after-squish: calc(
              var(--max-w) - (var(--squish-vmin) * var(--cols-squished))
            );
            --cols-grow: calc(var(--total-cols) - var(--cols-squished));
            --grow-vmin: calc(var(--remainder-after-squish) / var(--cols-grow));
            --squish-col: var(--squish-vmin);
            --grow-col: var(--grow-vmin);
            grid-template-columns:
              var(--squish-col) var(--grow-col) var(--grow-col) var(--grow-col)
              var(--squish-col) var(--grow-col) var(--grow-col) var(--grow-col) var(--squish-col);
          }
          70%,
          75% {
            --max-w: 70vmin;
            --max-h: 70vmin;
            --total-cols: 9;
            --squish-size: 3;
            --squish-vmin: calc(1vmin * var(--squish-size));
            --cols-squished: 8;
            --remainder-after-squish: calc(
              var(--max-w) - (var(--squish-vmin) * var(--cols-squished))
            );
            --cols-grow: calc(var(--total-cols) - var(--cols-squished));
            --grow-vmin: calc(var(--remainder-after-squish) / var(--cols-grow));
            --squish-col: var(--squish-vmin);
            --grow-col: var(--grow-vmin);
            grid-template-columns:
              var(--squish-col) var(--squish-col) var(--squish-col) var(
                --grow-col
              )
              var(--squish-col) var(--squish-col) var(--squish-col) var(
                --squish-col
              )
              var(--squish-col);
          }
          80%,
          85% {
            --max-w: 70vmin;
            --max-h: 70vmin;
            --total-cols: 9;
            --squish-size: 3;
            --squish-vmin: calc(1vmin * var(--squish-size));
            --cols-squished: 0;
            --remainder-after-squish: calc(
              var(--max-w) - (var(--squish-vmin) * var(--cols-squished))
            );
            --cols-grow: calc(var(--total-cols) - var(--cols-squished));
            --grow-vmin: calc(var(--remainder-after-squish) / var(--cols-grow));
            --squish-col: var(--squish-vmin);
            --grow-col: var(--grow-vmin);
            grid-template-columns:
              var(--grow-col) var(--grow-col) var(--grow-col) var(--grow-col)
              var(--grow-col) var(--grow-col) var(--grow-col) var(--grow-col) var(--grow-col);
          }
          95%,
          100% {
            --max-w: 70vmin;
            --max-h: 70vmin;
            --total-cols: 9;
            --squish-size: 2;
            --squish-vmin: calc(1vmin * var(--squish-size));
            --cols-squished: 5;
            --remainder-after-squish: calc(
              var(--max-w) - (var(--squish-vmin) * var(--cols-squished))
            );
            --cols-grow: calc(var(--total-cols) - var(--cols-squished));
            --grow-vmin: calc(var(--remainder-after-squish) / var(--cols-grow));
            --squish-col: var(--squish-vmin);
            --grow-col: var(--grow-vmin);
            grid-template-columns:
              var(--squish-col) var(--grow-col) var(--squish-col) var(
                --grow-col
              )
              var(--squish-col) var(--grow-col) var(--squish-col) var(
                --grow-col
              )
              var(--squish-col);
          }
        }

        @keyframes all-row {
          0%,
          15% {
            --max-h: 70vmin;
            --total-rows: 7;
            --squish-size: 2;
            --squish-vmin: calc(1vmin * var(--squish-size));
            --rows-squished: 1;
            --remainder-after-squish: calc(
              var(--max-h) - (var(--squish-vmin) * var(--rows-squished))
            );
            --rows-grow: calc(var(--total-rows) - var(--rows-squished));
            --grow-vmin: calc(var(--remainder-after-squish) / var(--rows-grow));
            --row-1: var(--squish-vmin);
            --row-2: var(--grow-vmin);
            --row-3: var(--grow-vmin);
            --row-4: var(--grow-vmin);
            --row-5: var(--grow-vmin);
            --row-6: var(--grow-vmin);
            --row-7: var(--grow-vmin);
            grid-template-rows:
              var(--row-1) var(--row-2) var(--row-3) var(--row-4)
              var(--row-5) var(--row-6) var(--row-7);
            background: rgb(205, 219, 222) 0.1%;
          }
          20%,
          25% {
            --max-h: 70vmin;
            --total-rows: 7;
            --squish-size: 2;
            --squish-vmin: calc(1vmin * var(--squish-size));
            --rows-squished: 1;
            --remainder-after-squish: calc(
              var(--max-h) - (var(--squish-vmin) * var(--rows-squished))
            );
            --rows-grow: calc(var(--total-rows) - var(--rows-squished));
            --grow-vmin: calc(var(--remainder-after-squish) / var(--rows-grow));
            --row-1: var(--grow-vmin);
            --row-2: var(--squish-vmin);
            --row-3: var(--grow-vmin);
            --row-4: var(--grow-vmin);
            --row-5: var(--grow-vmin);
            --row-6: var(--grow-vmin);
            --row-7: var(--grow-vmin);
            grid-template-rows:
              var(--row-1) var(--row-2) var(--row-3) var(--row-4)
              var(--row-5) var(--row-6) var(--row-7);
            background: rgb(205, 219, 222) 0.1%;
          }
          30%,
          35% {
            --max-w: 70vmin;
            --max-h: 70vmin;
            --total-rows: 7;
            --squish-size: 2;
            --rows-squished: 1;
            --squish-vmin: calc(1vmin * var(--squish-size));
            --remainder-after-squish: calc(
              var(--max-h) - (var(--squish-vmin) * var(--rows-squished))
            );
            --rows-grow: calc(var(--total-rows) - var(--rows-squished));
            --grow-vmin: calc(var(--remainder-after-squish) / var(--rows-grow));
            --row-1: var(--grow-vmin);
            --row-2: var(--grow-vmin);
            --row-3: var(--squish-vmin);
            --row-4: var(--grow-vmin);
            --row-5: var(--grow-vmin);
            --row-6: var(--grow-vmin);
            --row-7: var(--grow-vmin);
            grid-template-rows:
              var(--row-1) var(--row-2) var(--row-3) var(--row-4)
              var(--row-5) var(--row-6) var(--row-7);
            background: rgba(171, 53, 163, 1) 49.3%;
          }
          40%,
          45% {
            --max-h: 70vmin;
            --total-rows: 7;
            --squish-size: 8;
            --rows-squished: 1;
            --squish-vmin: calc(1vmin * var(--squish-size));
            --remainder-after-squish: calc(
              var(--max-h) - (var(--squish-vmin) * var(--rows-squished))
            );
            --rows-grow: calc(var(--total-rows) - var(--rows-squished));
            --grow-vmin: calc(var(--remainder-after-squish) / var(--rows-grow));
            --row-1: var(--grow-vmin);
            --row-2: var(--grow-vmin);
            --row-3: var(--grow-vmin);
            --row-4: var(--squish-vmin);
            --row-5: var(--grow-vmin);
            --row-6: var(--grow-vmin);
            --row-7: var(--grow-vmin);
            grid-template-rows:
              var(--row-1) var(--row-2) var(--row-3) var(--row-4)
              var(--row-5) var(--row-6) var(--row-7);
            background: pink;
          }
          50%,
          55% {
            --max-h: 70vmin;
            --total-rows: 7;
            --squish-size: 3;
            --rows-squished: 2;
            --squish-vmin: calc(1vmin * var(--squish-size));
            --remainder-after-squish: calc(
              var(--max-h) - (var(--squish-vmin) * var(--rows-squished))
            );
            --rows-grow: calc(var(--total-rows) - var(--rows-squished));
            --grow-vmin: calc(var(--remainder-after-squish) / var(--rows-grow));
            --row-1: var(--grow-vmin);
            --row-2: var(--squish-vmin);
            --row-3: var(--squish-vmin);
            --row-5: var(--grow-vmin);
            --row-6: var(--grow-vmin);
            --row-7: var(--grow-vmin);
            grid-template-rows:
              var(--row-1) var(--row-2) var(--row-3) var(--row-4)
              var(--row-5) var(--row-6) var(--row-7);
            background: rgb(77, 72, 72);
          }
          60%,
          65% {
            --max-h: 70vmin;
            --total-rows: 7;
            --squish-size: 4;
            --rows-squished: 2;
            --squish-vmin: calc(1vmin * var(--squish-size));
            --remainder-after-squish: calc(
              var(--max-h) - (var(--squish-vmin) * var(--rows-squished))
            );
            --rows-grow: calc(var(--total-rows) - var(--rows-squished));
            --grow-vmin: calc(var(--remainder-after-squish) / var(--rows-grow));
            --row-1: var(--squish-vmin);
            --row-2: var(--grow-vmin);
            --row-3: var(--grow-vmin);
            --row-4: var(--squish-vmin);
            grid-template-rows: var(--row-1) var(--row-2) var(--row-3) var(
                --row-4
              );
            background: gray;
          }
          70%,
          75% {
            --max-h: 70vmin;
            --squish-size: 9;
            --rows-squished: 2;
            --squish-vmin: calc(1vmin * var(--squish-size));
            --remainder-after-squish: calc(
              var(--max-h) - (var(--squish-vmin) * var(--rows-squished))
            );
            --rows-grow: calc(var(--total-rows) - var(--rows-squished));
            --grow-vmin: calc(var(--remainder-after-squish) / var(--rows-grow));
            --row-1: var(--grow-vmin);
            --row-2: var(--squish-vmin);
            --row-3: var(--grow-vmin);
            --row-4: var(--squish-vmin);
            --row-5: var(--grow-vmin);
            --row-6: var(--grow-vmin);
            --row-7: var(--grow-vmin);
            grid-template-rows:
              var(--row-1) var(--row-2) var(--row-3) var(--row-4)
              var(--row-5) var(--row-6) var(--row-7);
            background: gray;
          }
          80%,
          85% {
            --max-h: 70vmin;
            --squish-size: 6;
            --rows-squished: 1;
            --squish-vmin: calc(1vmin * var(--squish-size));
            --remainder-after-squish: calc(
              var(--max-h) - (var(--squish-vmin) * var(--rows-squished))
            );
            --rows-grow: calc(var(--total-rows) - var(--rows-squished));
            --grow-vmin: calc(var(--remainder-after-squish) / var(--rows-grow));
            --row-1: var(--grow-vmin);
            --row-2: var(--squish-vmin);
            --row-3: var(--grow-vmin);
            --row-5: var(--grow-vmin);
            --row-6: var(--grow-vmin);
            --row-7: var(--grow-vmin);
            grid-template-rows:
              var(--row-1) var(--row-2) var(--row-3) var(--row-4)
              var(--row-5) var(--row-6) var(--row-7);
            background: rgba(171, 53, 163, 1);
          }
          95%,
          100% {
            --max-h: 70vmin;
            --squish-size: 9;
            --rows-squished: 1;
            --squish-vmin: calc(1vmin * var(--squish-size));
            --remainder-after-squish: calc(
              var(--max-h) - (var(--squish-vmin) * var(--rows-squished))
            );
            --rows-grow: calc(var(--total-rows) - var(--rows-squished));
            --grow-vmin: calc(var(--remainder-after-squish) / var(--rows-grow));
            --row-1: var(--grow-vmin);
            --row-2: var(--squish-vmin);
            --row-3: var(--grow-vmin);
            --row-4: var(--grow-vmin);
            --row-5: var(--grow-vmin);
            --row-6: var(--grow-vmin);
            --row-7: var(--grow-vmin);
            grid-template-rows:
              var(--row-1) var(--row-2) var(--row-3) var(--row-4)
              var(--row-5) var(--row-6) var(--row-7);
            background: black;
          }
        }

        @keyframes inner-row-big {
          0% {
          }
          100% {
            --max-w: 70vmin;
            --max-h: 70vmin;
            --squish-h1: calc(var(--max-h) / 10); /* 6 */
            --number-squished: 2;
            --remainder: calc(
              var(--max-h) - var(--squish-h1) * var(--number-squished)
            );
            --row-1: var(--squish-h1);
            --row-2: calc(var(--remainder) / var(--number-squished));
            --row-3: calc(var(--remainder) / var(--number-squished));
            --row-4: var(--squish-h1);
            grid-template-rows: var(--row-1) var(--row-2) var(--row-3) var(
                --row-4
              );
          }
        }

        @keyframes outer-row-big {
          0% {
          }
          100% {
            --max-w: 70vmin;
            --max-h: 70vmin;
            --squish-h1: calc(var(--max-h) / 10); /* 6 */
            --number-squished: 2;
            --remainder: calc(
              var(--max-h) - var(--squish-h1) * var(--number-squished)
            );
            --row-1: calc(var(--remainder) / var(--number-squished));
            --row-2: var(--squish-h1);
            --row-3: var(--squish-h1);
            --row-4: calc(var(--remainder) / var(--number-squished));
            grid-template-rows: var(--row-1) var(--row-2) var(--row-3) var(
                --row-4
              );
          }
        }

        @keyframes outer-col-big {
          0% {
          }
          100% {
            --max-w: 70vmin;
            --max-h: 70vmin;
            --squish-w1: calc(var(--max-w) / 18); /* 5 */
            --number-squished: 6;
            --remainder: calc(
              var(--max-w) - var(--squish-w1) * var(--number-squished)
            );
            --col-1: calc(var(--remainder) / 3);
            --col-2: var(--squish-w1);
            --col-3: var(--squish-w1);
            --col-4: var(--squish-w1);
            --col-5: calc(var(--remainder) / 3);
            --col-6: var(--squish-w1);
            --col-7: var(--squish-w1);
            --col-8: var(--squish-w1);
            --col-9: calc(var(--remainder) / 3);
            --cols: var(--col-1) var(--col-2) var(--col-3) var(--col-4)
              var(--col-5) var(--col-6) var(--col-7) var(--col-8) var(--col-9);
            grid-template-columns: var(--cols);
          }
        }

        @keyframes inner-col-big {
          0% {
          }
          100% {
            --max-w: 70vmin;
            --max-h: 70vmin;
            --squish-w1: calc(var(--max-w) / 18); /* 5 */
            --number-squished: 5;
            --remainder: calc(
              var(--max-w) - var(--squish-w1) * var(--number-squished)
            );
            --col-1: var(--squish-w1);
            --col-2: calc(var(--remainder) / 4);
            --col-3: var(--squish-w1);
            --col-4: calc(var(--remainder) / 4);
            --col-5: var(--squish-w1);
            --col-6: calc(var(--remainder) / 4);
            --col-7: var(--squish-w1);
            --col-8: calc(var(--remainder) / 4);
            --col-9: var(--squish-w1);
            --cols: var(--col-1) var(--col-2) var(--col-3) var(--col-4)
              var(--col-5) var(--col-6) var(--col-7) var(--col-8) var(--col-9);
            grid-template-columns: var(--cols);
          }
        }
      `,
    ];
  }

  // _toggleChecked() {
  //   this.isChecked = !this.isChecked;
  // }

  render() {
    // const classes = { checked: this.isChecked };
    return html`
      <div class="home">
        <div class="grid">
          <div class="grid-item" style="--x:1; --y:1" data-q="1"></div>
          <div class="grid-item" style="--x:2; --y:1" data-q="1"></div>
          <div class="grid-item" style="--x:3; --y:1" data-q="1"></div>
          <div class="grid-item" style="--x:4; --y:1" data-q="1"></div>
          <div class="grid-item" style="--x:5; --y:1" data-q="c"></div>
          <div class="grid-item" style="--x:4; --y:1" data-q="2"></div>
          <div class="grid-item" style="--x:3; --y:1" data-q="2"></div>
          <div class="grid-item" style="--x:2; --y:1" data-q="2"></div>
          <div class="grid-item" style="--x:1; --y:1" data-q="2"></div>
          <!--    first-->
          <div class="grid-item" style="--x:1; --y:2" data-q="1"></div>
          <div class="grid-item" style="--x:2; --y:2" data-q="1"></div>
          <div class="grid-item" style="--x:3; --y:2" data-q="1"></div>
          <div class="grid-item" style="--x:4; --y:2" data-q="1"></div>
          <div class="grid-item" style="--x:5; --y:2" data-q="c"></div>
          <div class="grid-item" style="--x:4; --y:2" data-q="2"></div>
          <div class="grid-item" style="--x:3; --y:2" data-q="2"></div>
          <div class="grid-item" style="--x:2; --y:2" data-q="2"></div>
          <div class="grid-item" style="--x:1; --y:2" data-q="2"></div>
          <!-- end second   -->
          <div class="grid-item" style="--x:1; --y:3" data-q="1"></div>
          <div class="grid-item" style="--x:2; --y:3" data-q="1"></div>
          <div class="grid-item" style="--x:3; --y:3" data-q="1"></div>
          <div class="grid-item" style="--x:4; --y:3" data-q="1"></div>
          <div class="grid-item" style="--x:5; --y:3" data-q="c"></div>
          <div class="grid-item" style="--x:4; --y:3" data-q="2"></div>
          <div class="grid-item" style="--x:3; --y:3" data-q="2"></div>
          <div class="grid-item" style="--x:2; --y:3" data-q="2"></div>
          <div class="grid-item" style="--x:1; --y:3" data-q="2"></div>
          <!--    end third-->
          <div class="grid-item" style="--x:1; --y:4" data-q="r"></div>
          <div class="grid-item" style="--x:2; --y:4" data-q="r"></div>
          <div class="grid-item" style="--x:3; --y:4" data-q="r"></div>
          <div class="grid-item" style="--x:4; --y:4" data-q="r"></div>
          <div class="grid-item" style="--x:5; --y:4" data-q="rc"></div>
          <div class="grid-item" style="--x:4; --y:4" data-q="r"></div>
          <div class="grid-item" style="--x:3; --y:4" data-q="r"></div>
          <div class="grid-item" style="--x:2; --y:4" data-q="r"></div>
          <div class="grid-item" style="--x:1; --y:4" data-q="r"></div>
          <!--    end four-->
          <div class="grid-item" style="--x:1; --y:5" data-q="3"></div>
          <div class="grid-item" style="--x:2; --y:5" data-q="3"></div>
          <div class="grid-item" style="--x:3; --y:5" data-q="3"></div>
          <div class="grid-item" style="--x:4; --y:5" data-q="3"></div>
          <div class="grid-item" style="--x:5; --y:5" data-q="c"></div>
          <div class="grid-item" style="--x:4; --y:5" data-q="4"></div>
          <div class="grid-item" style="--x:3; --y:5" data-q="4"></div>
          <div class="grid-item" style="--x:2; --y:5" data-q="4"></div>
          <div class="grid-item" style="--x:1; --y:5" data-q="4"></div>
          <!--    end five-->
          <div class="grid-item" style="--x:1; --y:6" data-q="3"></div>
          <div class="grid-item" style="--x:2; --y:6" data-q="3"></div>
          <div class="grid-item" style="--x:3; --y:6" data-q="3"></div>
          <div class="grid-item" style="--x:4; --y:6" data-q="3"></div>
          <div class="grid-item" style="--x:5; --y:6" data-q="c"></div>
          <div class="grid-item" style="--x:4; --y:6" data-q="4"></div>
          <div class="grid-item" style="--x:3; --y:6" data-q="4"></div>
          <div class="grid-item" style="--x:2; --y:6" data-q="4"></div>
          <div class="grid-item" style="--x:1; --y:6" data-q="4"></div>
          <!--    end six-->
          <div class="grid-item" style="--x:1; --y:7" data-q="3"></div>
          <div class="grid-item" style="--x:2; --y:7" data-q="3"></div>
          <div class="grid-item" style="--x:3; --y:7" data-q="3"></div>
          <div class="grid-item" style="--x:4; --y:7" data-q="3"></div>
          <div class="grid-item" style="--x:5; --y:7" data-q="c"></div>
          <div class="grid-item" style="--x:4; --y:7" data-q="4"></div>
          <div class="grid-item" style="--x:3; --y:7" data-q="4"></div>
          <div class="grid-item" style="--x:2; --y:7" data-q="4"></div>
          <div class="grid-item" style="--x:1; --y:7" data-q="4"></div>
        </div>
      </div>
    `;
  }
}
