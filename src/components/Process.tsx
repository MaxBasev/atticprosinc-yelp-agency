export default function Process() {
	const steps = [
		{
			title: "Profile Audit",
			description: "We conduct a thorough review of your existing Yelp presence to identify opportunities and areas for improvement.",
			icon: "🔍",
			gradient: "from-blue-500 to-cyan-500"
		},
		{
			title: "Profile Setup & Enhancement",
			description: "We optimize your profile with compelling content, high-quality imagery, and strategic business details.",
			icon: "⚡",
			gradient: "from-indigo-500 to-blue-500"
		},
		{
			title: "Keyword Optimization",
			description: "Strategic integration of researched keywords to improve visibility in Yelp's search results.",
			icon: "🎯",
			gradient: "from-violet-500 to-indigo-500"
		},
		{
			title: "Ads Setup & Management",
			description: "We create and manage targeted advertising campaigns to reach your ideal customers.",
			icon: "📈",
			gradient: "from-purple-500 to-violet-500"
		},
		{
			title: "Performance Monitoring",
			description: "Continuous tracking and optimization of your Yelp presence for maximum ROI.",
			icon: "📊",
			gradient: "from-fuchsia-500 to-purple-500"
		}
	]

	return (
		<section className="py-16 relative">
			<div className="relative">
				<div className="absolute inset-0 bg-gray-50 z-10" />

				<div className="absolute -inset-32 z-20">
					<div className="absolute top-0 right-1/4 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
					<div className="absolute -top-10 right-1/2 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
					<div className="absolute top-20 left-1/4 w-60 h-60 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />

					<div className="absolute top-1/3 right-10 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-3000" />
					<div className="absolute top-1/2 right-1/3 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
					<div className="absolute top-1/2 left-1/4 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />

					<div className="absolute -bottom-10 right-1/4 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />
					<div className="absolute bottom-20 right-1/2 w-68 h-68 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-1000" />
					<div className="absolute bottom-0 left-1/4 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-3000" />
				</div>

				<div className="container mx-auto px-4 relative z-30">
					<div className="max-w-3xl mx-auto text-center mb-20">
						<h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
							Our Yelp Optimization Process
						</h2>
						<p className="text-gray-600 text-lg md:text-xl">
							A systematic approach to maximizing your Yelp presence and driving real business results
						</p>
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
								</div>

								<h3 className="text-xl font-semibold mb-4 text-gray-900">
									{step.title}
								</h3>
								<p className="text-gray-600 leading-relaxed">
									{step.description}
								</p>

								<div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${step.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
							</div>
						))}
					</div>

					<div className="mt-16 text-center">
						<button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
							Start Your Optimization Journey
						</button>
					</div>
				</div>
			</div>
		</section>
	)
} 