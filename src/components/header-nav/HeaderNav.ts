import { LitElement, html, css, type PropertyValueMap } from "lit";
import { customElement, query, queryAll } from "lit/decorators.js";
import { cache } from "lit/directives/cache.js";
import { data } from "./header-data";
import { ppStyles, rootStyles } from "../../styles/index.js";
import { StoreController } from "@nanostores/lit";
import { $hasVisited } from "../../stores/visit-store.js";

@customElement("header-nav")
export class HeaderNav extends LitElement {
  private navData;
  visitController = new StoreController(this, $hasVisited);
  constructor() {
    super();
    this.navData = data;
  }

  @queryAll("span")
  _motionLetters!: NodeListOf<HTMLSpanElement>;

  @query("p")
  _replacedName!: HTMLParagraphElement;

  connectedCallback(): void {
    $hasVisited.set("true");
  }
  firstUpdated(
    _changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>
  ): void {
    // $hasVisited.set("true");
  }

  getTitleLook() {
    return html` <span class="letter">d</span>
      <span class="letter">a</span>
      <span class="letter">n</span>
      <span class="letter">e</span>
      <span class="letter">n</span>
      <span class="letter">g</span>
      <span class="letter">e</span>
      <span class="letter">l.cc</span>`;
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
            <a href="/" class="name-heading"> ${this.getTitleLook()} </a>
            <div class="nav-items">${navItems}</div>
          </nav>
        </div>
      </header>
    `;
  }

  static get styles() {
    return [
      rootStyles,
      ppStyles($hasVisited.get()),
      css`
        :host {
          --start-padding: 2.6vw;
          text-transform: lowercase;
          color: transparent;
        }
        .hidden-name {
          display: none;
        }
        .nav-content {
          box-sizing: content-box;
          border-radius: 4px;
          width: 95vw;
        }
        a {
          margin-inline-end: 1em;
          text-decoration: none;
          &:visited {
            color: unset;
          }
          &:hover {
            filter: saturate(200);
            text-decoration: revert;
            text-decoration-thickness: 10px;
            text-decoration-color: currentColor;
            text-decoration-skip-ink: none;
            text-underline-offset: 1px;
          }
        }
        .name-heading {
          font-family: var(--font-2);
          font-size: var(--font--sz-500);
          text-decoration: none;
          display: flex;
          flex-direction: row;
          &:visited {
            color: var(--text-1);
          }
        }
        .nav-items {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          max-width: 45vw;
        }
        nav {
          overflow-x: hidden;
          min-height: 7vh;
          padding-inline-start: var(--start-padding);
          @media (width > 768) {
            & .nav-items {
              min-width: 40vw;
            }
          }
          @media (width < 768) {
            & .nav-items {
              max-width: 50px;
            }
          }
        }
      `,
    ];
  }
}
