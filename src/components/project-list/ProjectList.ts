import { LitElement, css, html } from "lit";
import { Task } from "@lit/task";
import { customElement } from "lit/decorators.js";
import { getCollection } from "astro:content";
import "./ProjectCard";
import { listStyles } from "../../styles/lists";
import { repeat } from "lit/directives/repeat.js";

@customElement("project-list")
export class ProjectList extends LitElement {
  private _getProjects = new Task(this, {
    task: async ([], {}) => {
      const projects = await getCollection("projects");

      const sortedProjects = projects
        .filter((p) => p.data.draft !== true)
        .sort((a, b) => b.data.endDate.valueOf() - a.data.endDate.valueOf());
      console.log(sortedProjects);
      return sortedProjects;
    },
    args: () => [],
  });

  render() {
    return html`
      ${this._getProjects.render({
        pending: () => html`<p>Running task...</p>`,
        complete: (sortedProjects) =>
          html`${repeat(
            sortedProjects,
            (project) => project.data.startDate.valueOf,
            (project, index) =>
              html`<project-card .project=${project}></project-card>`
          )}`,
        error: (error) => html`<p>Oops, something went wrong: ${error}</p>`,
      })}
    `;
  }

  static get styles() {
    return [listStyles];
  }
}
