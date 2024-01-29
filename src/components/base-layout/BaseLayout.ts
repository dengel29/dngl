import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";
import { rootStyles } from "../../styles/index.js";
import "../header-nav/HeaderNav";

@customElement("base-layout")
export class BaseLayout extends LitElement {
  protected render() {
    return html`
      <div class="full-screen">
        <header-nav></header-nav>
        <div class="main-content-container">
          <slot name="main-content">
            <p>Main content served here</p>
          </slot>
        </div>
      </div>
    `;
  }

  static get styles() {
    return [
      rootStyles,
      css`
        .full-screen {
          width: 100%;
          min-height: 100vh;
          background-color: hsla(200, 50%, 95%, 0.9);
        }
        .main-content-container {
          width: 90%;
          padding-inline: 2%;
          margin: 0 auto;
          background-color: hsla(633, 100%, 80%, 0.1);
          min-height: 100vh;
        }
      `,
    ];
  }
}
