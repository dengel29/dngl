import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("my-element")
export class MyElement extends LitElement {
  render() {
    return html`
      <label>
        Copy over header styles and navigation
        <input type="checkbox" />
      </label>
    `;
  }
}
