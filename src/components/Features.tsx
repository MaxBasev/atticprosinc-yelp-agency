export default function Features() {
	const features = [
		{
			title: "Increase Customer Trust",
			description: "Lean into Yelp's credibility to highlight what sets you apart. Connect with a receptive audience in your area.",
			icon: "🌟",
			gradient: "from-blue-50 to-blue-100"
		},
		{
			title: "Business Highlights",
			description: "Expertly crafted highlights can win over new customers and reassure existing ones. We transform your Yelp listing into a persuasive selling tool.",
			icon: "📈",
			gradient: "from-purple-50 to-purple-100"
		},
		{
			title: "Imagery",
			description: "Captivate potential customers with visuals that resonate. Our design specialists create impactful, brand-centric imagery that sparks curiosity.",
			icon: "🎨",
			gradient: "from-pink-50 to-pink-100"
		},
		{
			title: "Portfolios",
			description: "Show off the quality and creativity behind your services. We'll help you curate your best examples so prospects can immediately understand your value.",
			icon: "💼",
			gradient: "from-indigo-50 to-indigo-100"
		}
	]

	return (
		<section className="py-16 relative">
			<div className="relative">
				<div className="absolute inset-0 bg-gray-50 z-10" />

				<div className="absolute -inset-32 z-20">
					<div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
					<div className="absolute -top-10 left-1/2 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
					<div className="absolute top-20 right-1/4 w-60 h-60 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />

					<div className="absolute top-1/3 left-10 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-3000" />
					<div className="absolute top-1/2 left-1/3 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
					<div className="absolute top-1/2 right-1/4 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />

					<div className="absolute -bottom-10 left-1/4 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />
					<div className="absolute bottom-20 left-1/2 w-68 h-68 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-1000" />
					<div className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-3000" />
				</div>

				<div className="container mx-auto px-4 relative z-30">
					<h2 className="text-4xl md:text-5xl font-bold text-center mb-8 text-gray-900 animate-slide-down">
						Why Choose Our Service
					</h2>
					<p className="text-gray-600 text-center max-w-2xl mx-auto mb-16 animate-slide-up">
						Transform your Yelp presence into a powerful lead generation machine with our expert services
					</p>

					<div className="grid md:grid-cols-2 gap-8">
						{features.map((feature, index) => (
							<div
								key={index}
								className="group relative bg-white p-8 rounded-2xl border border-gray-100 hover:border-transparent hover:shadow-2xl transition-all duration-500 animate-fade-in-up"
								style={{ animationDelay: `${index * 150}ms` }}
							>
								<div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500`} />

								<div className="relative z-10">
									<div className="text-4xl mb-6 transform group-hover:scale-110 transition-transform duration-500">
										{feature.icon}
									</div>

									<h3 className="text-2xl font-semibold mb-4 text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
										{feature.title}
									</h3>

									<p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
										{feature.description}
									</p>

									<div className="mt-6 opacity-0 group-hover:opacity-100 transform group-hover:translate-y-0 translate-y-2 transition-all duration-300">
										<button className="text-blue-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all">
											Learn More
											<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
											</svg>
										</button>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}