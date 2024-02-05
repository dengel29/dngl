import { LitElement, html } from "lit";
import { Task } from "@lit/task";
import { customElement } from "lit/decorators.js";
import { getCollection } from "astro:content";
import "./BlogCard";

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
      ${this.getBlogs.render({
        pending: () => html`<p>Running task...</p>`,
        complete: (blogs) =>
          html`${blogs.map((b) => {
            return html`<blog-card .blog=${b}></blog-card>`;
          })} `,
        error: (error) => html`<p>Oops, something went wrong: ${error}</p>`,
      })}
    `;
  }
}
