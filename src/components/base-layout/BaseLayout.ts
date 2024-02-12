// note: no longer using this file, in favor of a .astro layout so as not to make the entire page an 'island'
// keeping it here for reference on :host

import { LitElement, html, css } from "lit";
import { customElement, state } from "lit/decorators.js";
import { rootStyles } from "../../styles/index.js";
import "../../styles/index.css";
import "../header-nav/HeaderNav";

@customElement("base-layout")
export class BaseLayout extends LitElement {
  protected render() {
    return html`
      <div class="bg">
        <div class="full-screen">
          <header-nav></header-nav>
          <div class="main-content-border">
            <div class="main-content-container">
              <slot name="main-content">
                <p>
                  Main content served here (hint: the root element of the main
                  content element should have the following attribute
                  <code>slot="main-content")</code>
                </p>
              </slot>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  static get styles() {
    return [
      rootStyles,
      css`
        :host {
          --h: 86vh;
          --w: 95vw;
          --border-size: 10px;
          --border-radius: 4px;
          --dark-gradient-border: linear-gradient(
            49.9deg,
            rgba(40, 91, 212, 1) -3%,
            rgba(171, 53, 163, 1) 49.3%,
            rgba(255, 204, 112, 1) 97.7%
          );
          --light-gradient-border: linear-gradient(
            49.9deg,
            rgb(208, 246, 255) 0.1%,
            rgb(255, 237, 237) 47.9%,
            rgb(255, 255, 231) 100.2%
          );
        }
        .bg {
          background-image: radial-gradient(
            circle at 0.9px 0.9px,
            var(--text-1) 0.6px,
            var(--surface-1) 0
          );
          box-shadow: inset 15px 15px 400px 80px var(--surface-1);
          background-size: 5px 5px;
          height: 100lvh;
          width: 100vw;
          margin: 0;
          padding: 0;
        }
        .full-screen {
          width: 100%;
          height: 92vh;
        }
        .main-content-border {
          width: var(--w);
          height: var(--h);
          border-radius: var(--border-radius);
          margin: 0 auto;
          background-image: var(--dark-gradient-border);
          display: grid;
          place-items: center;
        }
        .main-content-container {
          @media (width < 768px) {
            padding-inline: unset;
          }
          color: var(--text-1);
          background-color: var(--surface-1);
          border-radius: calc(var(--border-size) - var(--border-radius) + 5px);
          box-sizing: border-box;
          margin: 0 auto;
          width: 100%;
          height: 98.5%;
          max-height: calc(var(--h) - var(--border-size));
          max-width: calc(var(--w) - var(--border-size));
          overflow-y: scroll;
          padding-inline: 1em;
        }
      `,
    ];
  }
}
