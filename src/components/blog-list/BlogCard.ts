import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { type Blog } from "../../types/Blog";
import { listStyles } from "../../styles/lists";

@customElement("blog-card")
export class BlogCard extends LitElement {
  @property({ type: Object }) blog: Blog;

  constructor(blog: Blog) {
    super();
    this.blog = blog;
  }

  private _formatDate() {
    return Intl.DateTimeFormat("en-US", {
      dateStyle: "medium",
    }).format(this.blog.data.date);
  }

  protected render() {
    return html`
      <div class="blog-card__container">
        <a .href="/blog/${this.blog.slug}" class="blog-card__inner">
          <h2 class="blog-card__title">${this.blog.data.title}</h2>
          <div class="blog-card__details">
            <span>${this._formatDate()}</span>
          </div>
        </a>
      </div>
    `;
  }

  static get styles() {
    return [listStyles, css``];
  }
}
