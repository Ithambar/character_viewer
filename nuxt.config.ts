export default {
	/*
	 ** Headers of the page
	 */
	head: {
		title: process.env.npm_package_name || "",
		meta: [
			{ charset: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial- scale=1",
			},
			{
				hid: "description",
				name: "description",
				content: process.env.npm_package_description || "",
			},
		],
		link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
	},
	/*
	 ** Customize the progress-bar color
	 */
	loading: { color: "#fff" },
	/*
	 ** Global CSS
	 */
	css: ["@/assets/styles.scss"],
	/*
	 ** Plugins to load before mounting the App
	 */
	plugins: [],
	/*
	 ** Nuxt.js dev-modules
	 */
	buildModules: [
		"@nuxt/typescript-build",
		// Doc: https://github.com/nuxt-community/stylelint-module
		"@nuxtjs/stylelint-module",
		"nuxt-typed-vuex",
	],
	/*
	 ** Nuxt.js modules
	 */
	modules: [
		// Doc: https://buefy.github.io/#/documentation
		"nuxt-buefy",
		// Doc: https://axios.nuxtjs.org/usage
		"@nuxtjs/axios",
		"@nuxtjs/pwa",
		// Doc: https://github.com/nuxt-community/dotenv-module
		"@nuxtjs/dotenv",
		// "nuxt-i18n",
	],
	/*
	 ** Axios module configuration
	 ** See https://axios.nuxtjs.org/options
	 */
	axios: {},
	// i18n: {
	// 	locales: [
	// 		{ code: "en", file: "en.json" },
	// 		{ code: "de", file: "de.json" },
	// 	],
	// 	strategy: "prefix",
	// 	defaultLocale: "en",
	// 	langDir: "i18n/",
	// 	lazy: true,
	// 	vueI18n: {
	// 		fallbackLocale: "en",
	// 	},
	// },
	/*
	 ** Build configuration
	 */
	// build: {
	// 	/*
	// 	 ** You can extend webpack config here
	// 	 */
	// 	extend(_config: any, _ctx: any) {},
	// },
	dotenv: {
		filename: process.env.NODE_ENV === "prod" ? "prod.env" : "dev.env",
	},
	serverMiddleware: {
		"/loadCollection": "~/api/loadCollection.ts",
		"/saveCollection": "~/api/saveCollection.ts",
	},
};