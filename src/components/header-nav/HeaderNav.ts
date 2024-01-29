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
      navItems.push(html`<li><a href=${i.path}>${i.displayName}</a></li>`);
    }
    return html`
      <header>
        <div class="nav-content">
          <nav>
            <a href="/" class="name-heading">DAN ENGEL</a>
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
      css`
        :host {
          --start-padding: 1.3rem;
        }
        .nav-content {
          box-sizing: content-box;
          border-radius: 4px;
          margin: 0 auto;
          max-width: 100vw;
          border-bottom: 2px solid rebeccapurple;
          box-shadow: 2px 1px;
        }
        a,
        p {
          font-family: var(--font-1);
        }
        .name-heading {
          padding-inline-start: var(--start-padding);
          font-size: var(--size-6);
          font-weight: 500;
          text-decoration: none;
          &:visited {
            color: black;
          }
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
