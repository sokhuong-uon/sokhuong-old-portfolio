/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	output: 'standalone',
	i18n: {
		locales: ['en'],
		defaultLocale: 'en'
	},
	images: {
		formats: ['image/webp']
	}
}

module.exports = nextConfig
