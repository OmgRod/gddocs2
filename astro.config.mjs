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
				{
					label: 'Introduction',
					link: '/'
				},
				{
					label: 'Reference',
					// autogenerate: { directory: 'reference' },
					items: [
						{ label: 'Official Songs', slug: 'reference/songs' },
						{ label: 'Secrets', slug: 'reference/secrets' },
						{ label: 'Keys', slug: 'reference/keys' },
						{ label: 'Salts', slug: 'reference/salts' }
					],
				},
				{
					label: 'Request',
					link: 'endpoints/generic'
				},
				{
					label: 'Credits',
					link: 'credits'
				},
				{
					label: 'Server',
					items: [
						{ label: 'Comment', slug: 'resources/server/comment' },
						{ label: 'Friend Request', slug: 'resources/server/friendrequest' },
						{ label: 'Gauntlet', slug: 'resources/server/gauntlet' },
						{ label: 'Hashes', slug: 'resources/server/hashes' },
						{ label: 'Leaderboard Score', slug: 'resources/server/leaderboardscore' },
						{ label: 'Level', slug: 'resources/server/level' },
						{ label: 'List', slug: 'resources/server/list' },
						{ label: 'Map Pack', slug: 'resources/server/mappack' },
						{ label: 'Message', slug: 'resources/server/message' },
						{ label: 'Song', slug: 'resources/server/song' },
						{ label: 'User', slug: 'resources/server/user' },
						{ label: 'Restore', slug: 'resources/server/restore' }
					]
				}
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
		}), mdx()],
	vite: {
        resolve: {
            alias: {
                '@': '/src',
            },
        },
    },
});