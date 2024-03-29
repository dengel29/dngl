import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { type Project } from "../../types/Project";
import { listStyles } from "../../styles/lists";

@customElement("project-card")
export class ProjectCard extends LitElement {
  @property({ type: Object }) project: Project;

  constructor(project: Project) {
    super();
    this.project = project;
  }

  private _formatDate(date: Date) {
    return Intl.DateTimeFormat("en-US", {
      month: "long",
      year: "numeric",
    }).format(date);
  }

  protected render() {
    return html`
      <div class="project-card__container">
        <a .href="/projects/${this.project.slug}">
          <h2 class="project-card__title">${this.project.data.title}</h2>
          <div class="project-card__details">
            <span
              >${this._formatDate(this.project.data.startDate)} to
              ${this._formatDate(this.project.data.endDate)}</span
            >
          </div>
        </a>
      </div>
    `;
  }

  static get styles() {
    return [listStyles];
  }
}
