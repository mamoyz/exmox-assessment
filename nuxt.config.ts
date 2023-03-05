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
	modules: ["@pinia/nuxt", "@nuxtjs/apollo", "@nuxt/image-edge"],
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
	image: {
		screens: {
			xs: 320,
			sm: 640,
			md: 768,
			lg: 1024,
			xl: 1280,
			xxl: 1536,
			"2xl": 1536,
		},
	},
	runtimeConfig: {
		public: {},
	},
});
