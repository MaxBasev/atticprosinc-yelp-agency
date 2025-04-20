export default function Features() {
	const features = [
		{
			title: "Building Trust with Prospects",
			description: "Gain trust by showing off what makes your business shine. From compelling highlights to real client success stories, we tailor every detail to resonate with your audience.",
			icon: "✨",
			gradient: "from-blue-600 to-purple-600"
		},
		{
			title: "Visual Impact",
			description: "Powerful visuals elevate your listing and reinforce your brand identity. Our design team ensures every image draws users in and strengthens your message.",
			icon: "🎨",
			gradient: "from-purple-600 to-pink-600"
		},
		{
			title: "Portfolio & Showcase",
			description: "Need to show craftsmanship, creativity, or impact? Our portfolio tools help you present your best work with clarity and confidence — perfect for visual industries.",
			icon: "📁",
			gradient: "from-pink-600 to-blue-600"
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
							Boost Credibility with Targeted Enhancements
						</h2>
						<p className="text-gray-600 text-lg md:text-xl">
							Gain trust by showing off what makes your business shine. From compelling highlights to real client success stories, we tailor every detail to resonate with your audience.
						</p>
					</div>

					<div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
						{features.map((feature, index) => (
							<div
								key={index}
								className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 animate-fade-in-up"
								style={{ animationDelay: `${index * 150}ms` }}
							>
								<div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-all duration-500`} />

								<div className="relative">
									<div className="text-4xl mb-6 transform group-hover:scale-110 transition-transform duration-500">
										{feature.icon}
									</div>

									<h3 className="text-2xl font-semibold mb-4 text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
										{feature.title}
									</h3>

									<p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
										{feature.description}
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