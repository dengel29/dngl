import type { CollectionEntry } from "astro:content";
import type { MarkdownLayoutProps } from "astro";

export type Project = CollectionEntry<"projects">;
export type ProjectData = Project["data"];
export type ProjectFrontMatter = MarkdownLayoutProps<{
  title: string;
  indexImage: string;
  indexAlt: string;
  heroImage: string | null;
  heroAlt: string;
  projectDescription: string;
  order: number;
  projectBrief: string;
  skills: string[];
  tech: string[];
  role: string;
  startDate: Date;
  endDate: Date;
  visible: boolean;
  inActionVideo?: string | undefined;
  draft: boolean;
}>;
