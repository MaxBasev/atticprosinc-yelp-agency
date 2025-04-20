export default function Process() {
	const steps = [
		{
			title: "Full Profile Audit",
			description: "We begin by analyzing your business listing, assessing reviews, media, and content to identify improvement areas and opportunities.",
			icon: "🔍",
			gradient: "from-blue-600 to-purple-600"
		},
		{
			title: "Setup & Enhancement",
			description: "Need a fresh start or a stronger profile? We update your information, polish your visuals, and make sure every section tells your story effectively.",
			icon: "⚡",
			gradient: "from-purple-600 to-pink-600"
		},
		{
			title: "Keyword Integration",
			description: "We research industry-relevant keywords for your services and location, then apply them strategically to boost discoverability and search visibility.",
			icon: "🎯",
			gradient: "from-pink-600 to-red-600"
		},
		{
			title: "Smart Ads Management",
			description: "We create and manage advertising campaigns designed to capture the attention of ready-to-convert local customers — with efficient budget control and continuous performance improvements.",
			icon: "📈",
			gradient: "from-red-600 to-orange-600"
		},
		{
			title: "Performance Monitoring",
			description: "Ongoing performance tracking helps us refine your profile regularly, ensuring long-term visibility and consistent lead generation.",
			icon: "📊",
			gradient: "from-orange-600 to-yellow-600"
		}
	]

	return (
		<section className="py-16 relative">
			<div className="py-16 relative">
				<div className="absolute -inset-32 z-20">
					<div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
					<div className="absolute top-1/3 right-1/4 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
					<div className="absolute bottom-1/4 left-1/3 w-60 h-60 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />
				</div>

				<div className="container mx-auto px-4 relative z-30">
					<div className="max-w-3xl mx-auto text-center mb-16">
						<h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
							How We Optimize Your Local Listings
						</h2>
					</div>

					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
						{steps.map((step, index) => (
							<div
								key={index}
								className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 animate-fade-in-up"
								style={{ animationDelay: `${index * 150}ms` }}
							>
								<div className={`absolute inset-0 bg-gradient-to-r ${step.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-all duration-500`} />

								<div className="relative">
									<div className={`w-12 h-12 rounded-full bg-gradient-to-r ${step.gradient} flex items-center justify-center text-white font-bold mb-6 group-hover:scale-110 transition-transform duration-500`}>
										{index + 1}
									</div>

									<div className="absolute top-0 right-0 text-3xl transform -translate-y-1/4 group-hover:scale-125 transition-transform duration-500">
										{step.icon}
									</div>

									<h3 className="text-xl font-semibold mb-4 text-gray-900">
										{step.title}
									</h3>
									<p className="text-gray-600 leading-relaxed">
										{step.description}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	)
} 