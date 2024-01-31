import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";

@customElement("x-checkbox")
export class XCheckbox extends LitElement {
  @property({ type: String, attribute: "todo-text" })
  public todoText = "";

  @property({ type: Boolean })
  isChecked = false;

  static get styles() {
    return [
      css`
        label {
          display: flex;
          flex-direction: row;
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
