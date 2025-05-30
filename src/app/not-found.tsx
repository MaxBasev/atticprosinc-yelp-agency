import Link from 'next/link';

export default function NotFound() {
	return (
		<div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex items-center justify-center px-4">
			<div className="max-w-3xl mx-auto text-center">
				{/* 404 Number */}
				<h1 className="text-9xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-8">
					404
				</h1>

				{/* Message */}
				<h2 className="text-4xl font-bold text-gray-900 mb-4">
					Page Not Found
				</h2>
				<p className="text-xl text-gray-600 mb-8">
					Sorry, the page you are looking for doesn&apos;t exist or has been moved.
				</p>

				{/* Navigation Links */}
				<div className="flex flex-col sm:flex-row gap-4 justify-center">
					<Link
						href="/"
						className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-xl"
					>
						<svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
						</svg>
						<span>Back Home</span>
					</Link>
					<Link
						href="/portfolio"
						className="inline-flex items-center bg-white text-gray-800 px-8 py-4 rounded-full font-semibold hover:bg-gray-50 transition-all transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-xl border border-gray-200"
					>
						<svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
						</svg>
						<span>View Portfolio</span>
					</Link>
				</div>

				{/* Decorative Elements */}
				<div className="mt-16 flex justify-center space-x-8 text-gray-400">
					<div className="w-16 h-16 border-t-4 border-l-4 border-gray-200 rounded-tl-3xl" />
					<div className="w-16 h-16 border-t-4 border-r-4 border-gray-200 rounded-tr-3xl" />
				</div>
			</div>
		</div>
	);
} 