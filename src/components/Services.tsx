import Link from 'next/link';

export default function Services() {
	const services = [
		{
			title: "Google Local Services Ads",
			description: "Get featured at the top of Google for local service searches. Our certified approach includes profile verification, review optimization, and lead management to help you win more local customers through Google's trusted platform.",
			icon: "📍",
			gradient: "from-blue-600 to-purple-600"
		},
		{
			title: "SEO (Local & Technical)",
			description: "Dominate local search results with proven SEO strategies. Comprehensive local SEO optimization including Google My Business enhancement, local citation building, schema markup implementation, and technical website improvements.",
			icon: "🔍",
			gradient: "from-purple-600 to-pink-600"
		},
		{
			title: "PPC Campaigns (Google/Bing)",
			description: "High-converting paid search campaigns across major platforms. Strategic pay-per-click advertising with compelling ad copy, optimized landing pages, and continuous performance monitoring to maximize your advertising investment.",
			icon: "💡",
			gradient: "from-pink-600 to-orange-600"
		}
	]

	return (
		<section className="py-16 relative">
			<div className="py-16 relative">
				{/* Blobs */}
				<div className="absolute -inset-32 z-20">
					<div className="absolute top-0 left-1/3 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
					<div className="absolute -top-20 right-1/3 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
					<div className="absolute top-10 right-1/4 w-60 h-60 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />
				</div>

				<div className="container mx-auto px-4 relative z-30">
					{/* Section heading */}
					<div className="max-w-3xl mx-auto text-center mb-16">
						<h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
							Core Digital Marketing Services
						</h2>
						<p className="text-gray-600 text-lg md:text-xl">
							Our flagship services designed to maximize your local business visibility and drive qualified leads through proven digital strategies.
						</p>
					</div>

					{/* Service cards */}
					<div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
						{services.map((service, index) => (
							<div
								key={index}
								className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 animate-fade-in-up"
								style={{ animationDelay: `${index * 150}ms` }}
							>
								{/* Gradient background on hover */}
								<div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-all duration-500`} />

								<div className="relative">
									{/* Icon */}
									<div className="text-4xl mb-6 transform group-hover:scale-110 transition-transform duration-500">
										{service.icon}
									</div>

									{/* Title */}
									<h3 className="text-2xl font-semibold mb-4 text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
										{service.title}
									</h3>

									{/* Description */}
									<p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
										{service.description}
									</p>
								</div>
							</div>
						))}
					</div>

					{/* See All Services Button */}
					<div className="text-center mt-12">
						<Link
							href="/services"
							className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-xl"
						>
							<span>See All Services</span>
							<svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
							</svg>
						</Link>
					</div>
				</div>
			</div>
		</section>
	)
} 