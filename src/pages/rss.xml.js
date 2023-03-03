import rss from '@astrojs/rss';
import { site } from '../config';

export const get = () =>
	rss({
		title: site.title,
		description: site.description,
		site: import.meta.env.SITE,
		items: import.meta.glob('./blog/**/*.md'),
	});
