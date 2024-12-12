import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
	title: 'docs.meru.moe',
	description: 'Simple REST APIs Documentation',
	themeConfig: {
		// https://vitepress.dev/reference/default-theme-config
		nav: [
			{ text: 'Home', link: '/' },
			{ text: 'Examples', link: '/examples' },
		],

		sidebar: [
			{
				text: 'ガイド',
				items: [
					{ text: '始める', link: '/getting-started' },
					{ text: '例(Examples)', link: '/examples' },
				],
			},
			{
				text: 'API',
				items: [
					{ text: 'Make It a Quote', link: '/miq-api' },
					{ text: 'Discord Watcher', link: '/dc-watcher' },
				],
			},
		],

		socialLinks: [{ icon: 'github', link: 'https://github.com/vuejs/vitepress' }],
	},
});
