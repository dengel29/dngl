// 1. Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";
// import { Project } from "../components/project-list/Project";
// 2. Define your collection(s)
const projectCollection = defineCollection({
  type: "content", // v2.5.0 and later
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()).optional(),
    indexImage: z.string(),
    indexImageAlt: z.string(),
    heroImage: z.string().nullable(),
    heroImageAlt: z.string(),
    projectDescription: z.string(),
    order: z.number(),
    projectBrief: z.string(),
    skills: z.array(z.string()),
    tech: z.array(z.string()),
    role: z.string(),
    inActionVideo: z.string().optional(),
    startDate: z.string().transform((str) => new Date(str)),
    endDate: z.string().transform((str) => new Date(str)),
    visible: z.boolean().default(true),
    draft: z.boolean().default(false),
  }),
});

const blogCollection = defineCollection({
  type: "content", // v2.5.0 and later
  schema: z.object({
    title: z.string(),
    date: z.string().transform((str) => new Date(str)),
    draft: z.boolean().default(false),
  }),
});
// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  projects: projectCollection,
  blog: blogCollection,
};
