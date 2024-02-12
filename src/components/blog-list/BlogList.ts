import { LitElement, css, html } from "lit";
import { Task } from "@lit/task";
import { repeat } from "lit/directives/repeat.js";
import { customElement } from "lit/decorators.js";
import { getCollection } from "astro:content";
import "./BlogCard";
import { listStyles } from "../../styles/lists";

@customElement("blog-list")
export class BlogList extends LitElement {
  private getBlogs = new Task(this, {
    task: async ([], {}) => {
      // return await getCollection("blog");
      const blogs = await getCollection("blog");
      const sortedBlogs = blogs.sort(
        (a, b) => b.data.date.valueOf() - a.data.date.valueOf()
      );
      console.log(sortedBlogs[0].data.date);
      return sortedBlogs;
    },
    args: () => [],
  });

  render() {
    return html`
      <div class="post-list__container">
        ${this.getBlogs.render({
          pending: () => html`<p>Running task...</p>`,
          complete: (blogs) =>
            html`${repeat(
              blogs,
              (blog) => blog.data.date,
              (blog, index) => html`<blog-card .blog=${blog}></blog-card>`
            )}`,
          error: (error) => html`<p>Oops, something went wrong: ${error}</p>`,
        })}
      </div>
    `;
  }

  static get styles() {
    return [listStyles];
  }
}
