// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'GDDocs',
			social: {
				github: 'https://github.com/withastro/starlight',
			},
			sidebar: [
				// {
				// 	label: 'Guides',
				// 	items: [
				// 		{ label: 'Example Guide', slug: 'guides/example' },
				// 	],
				// },
				// {
				// 	label: 'Reference',
				// 	autogenerate: { directory: 'reference' },
				// },
			],
			defaultLocale: 'en',
			locales: {
				en: {
				  label: 'English',
				  lang: 'en',
				},
				pt: {
				  label: 'Português',
				  lang: 'pt',
				},
			},
		}),
	, mdx()],
	vite: {
        resolve: {
            alias: {
                '@': '/src',
            },
        },
    },
});