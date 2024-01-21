import { LitElement, html } from "lit";
import { customElement, property, eventOptions } from "lit/decorators.js";

@customElement("my-counter")
export class Counter extends LitElement {
  @property({ type: Number }) count = 0;
  protected render() {
    return html`
      <p><button onclick="${this._increment}">Click Me!</button></p>
      <p>Click count: ${this.count}</p>
    `;
  }

  _increment(e: Event) {
    this.count++;
  }
}
