/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		unoptimized: true,
		domains: ['localhost'],
		remotePatterns: [
			{
				protocol: 'https',
				hostname: '**',
			},
		],
	},
	async redirects() {
		return [
			{
				source: '/favicon.ico',
				destination: '/images/eagle.ico',
				permanent: true,
			},
		]
	},
}

module.exports = nextConfig 