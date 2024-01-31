import type { CollectionEntry } from "astro:content";
import type { MarkdownLayoutProps } from "astro";

export type Project = CollectionEntry<"projects">;
export type ProjectData = Project["data"];
export type ProjectFrontMatter = MarkdownLayoutProps<{
  title: string;
  indexImage: string;
  indexImageAlt: string;
  heroImage: string | null;
  heroImageAlt: string;
  projectDescription: string;
  order: number;
  projectBrief: string;
  skills: string[];
  tech: string[];
  role: string;
  startDate: string;
  endDate: string;
  visible: boolean;
  inActionVideo?: string | undefined;
}>;
