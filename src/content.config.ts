import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const writing = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/writing' }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    kicker: z.string().default('Essay'),
    date: z.coerce.date(),
    description: z.string(),
    heroImage: z.string().optional(),
    xUrl: z.url().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { writing };
