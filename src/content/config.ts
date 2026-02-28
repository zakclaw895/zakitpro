import { defineCollection, z } from 'astro:content';

const articles = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishedAt: z.string(),
    updatedAt: z.string().optional(),
    pillar: z.enum(['troubleshooting', 'scripting', 'deployment', 'security', 'packaging', 'career']),
    difficulty: z.enum(['junior', 'mid', 'senior']),
    type: z.enum(['war-story', 'deep-dive', 'how-to', 'script-drop', 'error-reference', 'opinion', 'career-guide']),
    tags: z.array(z.string()).default([]),
    seriesId: z.string().optional(),
    seriesPart: z.number().optional(),
    draft: z.boolean().default(false)
  })
});

const scripts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    language: z.enum(['powershell', 'cmd', 'batch', 'registry']),
    pillar: z.enum(['troubleshooting', 'scripting', 'deployment', 'security', 'packaging', 'career']),
    publishedAt: z.string(),
    draft: z.boolean().default(false)
  })
});

export const collections = {
  articles,
  scripts
};
