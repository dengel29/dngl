import type { CollectionEntry } from "astro:content";
import type { MarkdownLayoutProps } from "astro";

export type Blog = CollectionEntry<"blog">;
export type BlogData = Blog["data"];
export type BlogFrontMatter = MarkdownLayoutProps<{
  title: string;
  date: string;
}>;
