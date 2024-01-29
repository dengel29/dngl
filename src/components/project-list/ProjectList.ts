import { LitElement, html } from "lit";
import { Task } from "@lit/task";
import { customElement } from "lit/decorators.js";
import { getCollection } from "astro:content";
import "./ProjectCard";

@customElement("project-list")
export class ProjectList extends LitElement {
  private _getProjects = new Task(this, {
    task: async ([], {}) => {
      return await getCollection("projects");
    },
    args: () => [],
  });

  render() {
    return html`
      ${this._getProjects.render({
        pending: () => html`<p>Running task...</p>`,
        complete: (projects) =>
          html`${projects.map((p) => {
            return html`<project-card .project=${p}></project-card>`;
          })} `,
        error: (error) => html`<p>Oops, something went wrong: ${error}</p>`,
      })}
    `;
  }
}
