import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import "../../styles/index.css";

@customElement("x-checkbox")
export class XCheckbox extends LitElement {
  @property({ type: String, attribute: "todo-text" })
  public todoText = "";

  @property({ type: Boolean, attribute: "is-checked" })
  public isChecked = false;

  static get styles() {
    return [
      css`
        label {
          display: flex;
          flex-direction: row;
          align-items: center;
          box-sizing: content-box;
          border: 1px dashed var(--surface-1);
          padding: 2px 2px;
          &:has(input:focus) {
            border: 1px dashed var(--text-1);
            border-radius: 3px;
          }
        }

        input {
          margin-inline-end: 1em;
        }
        .checked {
          text-decoration: line-through;
          filter: blur(1px);
          opacity: 0.8;
        }
      `,
    ];
  }

  _toggleChecked() {
    this.isChecked = !this.isChecked;
  }

  render() {
    const classes = { checked: this.isChecked };
    return html`
      <label>
        <input
          type="checkbox"
          .checked=${this.isChecked}
          @click=${this._toggleChecked}
        />
        <p class=${classMap(classes)}>${this.todoText}</p>
      </label>
    `;
  }
}
