export default function Services() {
	const services = [
		{
			title: "Instant Lead Response System",
			description: "When potential clients reach out, response speed is crucial. Our advanced autoresponder delivers fast, personalized replies — building trust, showing professionalism, and securing more appointments.",
			icon: "⚡",
			gradient: "from-blue-600 to-purple-600"
		},
		{
			title: "Your Remote Team for Day-to-Day Tasks",
			description: "From follow-ups and scheduling to client communications, our experienced virtual assistants handle it all. Focus on growth while we take care of the details behind the scenes.",
			icon: "👩‍💼",
			gradient: "from-purple-600 to-pink-600"
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
							Unlock the Power of Local Digital Marketing
						</h2>
						<p className="text-gray-600 text-lg md:text-xl">
							We equip your business with smart, effective tools tailored to win attention and convert leads in a competitive environment.
						</p>
					</div>

					{/* Service cards */}
					<div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
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
				</div>
			</div>
		</section>
	)
} 