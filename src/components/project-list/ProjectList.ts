import { LitElement, html } from "lit";
import { Task } from "@lit/task";
import { customElement } from "lit/decorators.js";
import { getCollection } from "astro:content";
import "./ProjectCard";

@customElement("project-list")
export class ProjectList extends LitElement {
  private _getProjects = new Task(this, {
    task: async ([], {}) => {
      const projects = await getCollection("projects");

      const sortedProjects = projects
        .filter((p) => p.data.draft != true)
        .sort((a, b) => b.data.endDate.valueOf() - a.data.startDate.valueOf());
      return sortedProjects;
    },
    args: () => [],
  });

  render() {
    return html`
      ${this._getProjects.render({
        pending: () => html`<p>Running task...</p>`,
        complete: (sortedProjects) =>
          html`${sortedProjects.map((p) => {
            return html`<project-card .project=${p}></project-card>`;
          })} `,
        error: (error) => html`<p>Oops, something went wrong: ${error}</p>`,
      })}
    `;
  }
}
