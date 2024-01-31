import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";
import { data } from "./header-data";

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
      navItems.push(html`<a href=${i.path}>${i.displayName}</a> `);
    }
    return html`
      <header>
        <div class="nav-content">
          <nav>
            <a href="/" class="name-heading">DAN ENGEL</a>
            <div class="nav-items">${navItems}</div>
          </nav>
        </div>
      </header>
    `;
  }

  static get styles() {
    return [
      css`
        :host {
          --start-padding: 2.6vw;
        }
        header {
          background: transparent;
        }
        .nav-content {
          box-sizing: content-box;
          border-radius: 4px;
          width: 95vw;
        }
        a,
        p {
          font-family: var(--font-0);
        }
        .name-heading {
          font-size: var(--size-6);
          font-weight: 500;
          text-decoration: none;
          &:visited {
            color: black;
          }
        }
        .nav-items {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
        }
        nav {
          overflow-x: hidden;
          min-height: 7vh;
          padding-inline-start: var(--start-padding);
          & .nav-items {
            max-width: 40vw;
            min-width: 35vw;
          }
        }
      `,
    ];
  }
}
