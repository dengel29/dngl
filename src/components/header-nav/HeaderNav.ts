import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";
import { data } from "./header-data";
import { rootStyles } from "../../styles/index";

@customElement("header-nav")
export class HeaderNav extends LitElement {
  private navData;
  constructor() {
    super();
    this.navData = data;
  }

  render() {
    const navItems = [];
    for (const i of this.navData) {
      navItems.push(html`<li><a href=${i.path}>${i.displayName}</a></li>`);
    }
    return html`
      <header>
        <div class="nav-content">
          <nav>
            <p class="name-heading">DAN ENGEL</p>
            <ul>
              ${navItems}
            </ul>
          </nav>
        </div>
      </header>
    `;
  }

  static get styles() {
    return [
      rootStyles,
      css`
        :host {
          --start-padding: 1.3rem;
        }
        a,
        p {
          font-family: var(--font-1);
        }
        .name-heading {
          padding-inline-start: var(--start-padding);
          font-size: var(--size-6);
          font-weight: 500;
        }
        ul {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
        }
        li {
          list-style: none;
          margin-inline-end: 1.3em;
        }
        nav {
          background-position: 5cm 5cm;
          background-size: 15px 15px;
          background-blend-mode: soft-light;
          background-image: linear-gradient(
              to top right,
              var(--surface-2) 10px,
              transparent 5px
            ),
            linear-gradient(to right, var(--surface-1) 1px, transparent 10px);
          overflow-x: hidden;
          min-height: 7vh;
          & ul {
            max-width: 40vw;
            min-width: 35vw;
            padding-inline-start: var(--start-padding);
          }
        }
      `,
    ];
  }
}
