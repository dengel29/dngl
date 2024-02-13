import { LitElement, html, css } from "lit";
import { customElement, query, queryAll, property } from "lit/decorators.js";
import { data } from "./header-data";
import { ppStyles, rootStyles } from "../../styles/index.js";
import { StoreController } from "@nanostores/lit";
import { $hasVisited } from "../../stores/visit-store.js";
import { classMap } from "lit/directives/class-map.js";

@customElement("header-nav")
export class HeaderNav extends LitElement {
  private navData;
  visitController = new StoreController(this, $hasVisited);
  constructor() {
    super();
    this.navData = data;
  }

  @property({ type: Boolean })
  _isOpen = false;

  @query("header")
  _header!: HTMLElement;

  @queryAll("span")
  _motionLetters!: NodeListOf<HTMLSpanElement>;

  @query("p")
  _replacedName!: HTMLParagraphElement;

  connectedCallback() {
    $hasVisited.set("true");
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

    const classes = { collapsed: this.isCollapsed };
    return html`
      <header class=${classMap(classes)}>
        <div class="nav-content">
          <label
            id="open-nav"
            style="color: white; padding-inline-start: 2.6vw"
          >
            <span style="font-size: 1.6em;">▦</span>
            <input type="checkbox" style="transform: scale(0,0)" />
          </label>
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
        header {
          height: 4.8em;
          overflow-y: hidden;
        }
        .nav-items {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          max-width: 45vw;
        }
        label {
          display: none;
        }
        @media (width < 768px) {
          label {
            display: grid;
            place-items: center;
            align-self: flex-start;
            margin-top: 0.5em;
            span {
              cursor: pointer;
              transform: rotate(45deg) translateY(-2px);
              transition: transform 0.5s;
              transform-origin: center center;
              width: fit-content;
              height: fit-content;
            }
          }
          span:hover {
            transform-origin: center center;
            transform: rotate(45deg) translateY(0px) translateX(3px);
          }
          .nav-content {
            display: flex;
            flex-direction: row;
            align-items: center;
            max-width: fit-content;
          }
          .nav-items {
            display: flex;
            flex-direction: column;
          }
          .nav-content:has(input[type="checkbox"]:not(:checked)) {
            color: var(--surface-1);
            nav-items {
              height: 0vh;
              overflow-y: hidden;
            }
          }
          .nav-content:has(input[type="checkbox"]:checked) {
            position: absolute;
            top: 0;
            left: 0;
            background: var(--surface-1);
            color: var(--text-1);
            border-right: 4px solid var(--surface-1);
            border-bottom: 5px solid var(--surface-1);
            box-shadow: 6px 3px 40px rgba(0, 0, 0, 0.61);
            z-index: 2;
            padding-block-end: 1em;
            .nav-items {
              color: white;
              overflow-y: initial;
              height: fit-content;
              opacity: 1;
              justify-content: initial;
            }
          }
        }

        nav {
          overflow-x: hidden;
          min-height: 7vh;
          padding-inline-start: var(--start-padding);
          @media (width > 768) {
            .nav-items {
              min-width: 40vw;
            }
          }
          @media (width < 768) {
            .nav-items {
              max-width: 50px;
            }
          }
        }
        .collapsed {
          height: 2rem;
        }
        .hidden-name {
          display: none;
        }
        .nav-content {
          box-sizing: content-box;
          border-radius: 4px;
          width: 95vw;
          margin-bottom: 0.6rem;
        }
        a {
          margin-inline-end: 1em;
          font-weight: 600;
          text-decoration: none;
          &:visited {
            color: unset;
          }
          &:hover {
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
          width: fit-content;
          &:visited {
            color: var(--text-1);
          }
        }
      `,
    ];
  }
}
