// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	components: false,
	app: {
		head: {
			htmlAttrs: {
				lang: "en",
			},
		},
	},
	css: ["~/assets/scss/main.scss"],
	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {},
		},
	},
	modules: ["@pinia/nuxt", "@nuxtjs/apollo"],
	pinia: {
		autoImports: [
			// automatically imports `defineStore`
			"defineStore", // import { defineStore } from 'pinia'
			// automatically imports `defineStore` as `definePiniaStore`
			["defineStore", "definePiniaStore"], // import { defineStore as definePiniaStore } from 'pinia'
		],
	},
	apollo: {
		autoImports: true,
		clients: {
			default: {
				httpEndpoint: "https://graphql.anilist.co",
			},
		},
	},
	runtimeConfig: {
		public: {},
	},
});
