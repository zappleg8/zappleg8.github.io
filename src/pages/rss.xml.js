import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const articles = await getCollection('writing', ({ data }) => !data.draft);
  return rss({
    title: 'Zach Applegate — Writing',
    description:
      'Essays on agentic system design and the harnesses that make agents work.',
    site: context.site,
    items: articles
      .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf())
      .map((article) => ({
        title: article.data.title,
        description: article.data.description,
        pubDate: article.data.date,
        link: `/writing/${article.id}/`,
      })),
  });
}
