export default function Services() {
	const services = [
		{
			title: "Lightning-Fast Autoresponder",
			description: "Speed is paramount in a world that never stops moving.",
			icon: "⚡",
			gradient: "from-yellow-400 to-orange-500"
		},
		{
			title: "Virtual Assistant Service",
			description: "Let us handle the day-to-day workload so you can focus on growth.",
			icon: "👥",
			gradient: "from-blue-400 to-blue-600"
		},
		{
			title: "Yelp Platinum Partner",
			description: "As a designated Platinum Partner, we go beyond simple optimizations.",
			icon: "🏆",
			gradient: "from-purple-400 to-purple-600"
		}
	]

	return (
		<section className="py-16 relative">
			<div className="relative">
				{/* Фон с увеличенным z-index */}
				<div className="absolute inset-0 bg-gray-50 z-10" />

				{/* Блобы с средним z-index */}
				<div className="absolute -inset-32 z-20">
					{/* Верхний ряд */}
					<div className="absolute top-0 left-1/3 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
					<div className="absolute -top-20 right-1/3 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
					<div className="absolute top-10 right-1/4 w-60 h-60 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />

					{/* Центральный ряд */}
					<div className="absolute top-1/3 left-20 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-3000" />
					<div className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
					<div className="absolute top-1/2 right-1/3 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />

					{/* Нижний ряд */}
					<div className="absolute -bottom-20 left-1/3 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />
					<div className="absolute bottom-10 right-1/3 w-68 h-68 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-1000" />
					<div className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-3000" />
				</div>

				{/* Контент с самым высоким z-index */}
				<div className="container mx-auto px-4 relative z-30">
					<h2 className="text-5xl font-bold text-center mb-24 text-gray-800">
						Our Premium Services
					</h2>
					<div className="grid md:grid-cols-3 gap-8">
						{services.map((service, index) => (
							<div
								key={index}
								className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group"
							>
								{/* Добавляем анимированный фоновый паттерн */}
								<div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
									<div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500" style={{
										backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23fff' fill-opacity='0.1' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E\")"
									}} />
								</div>

								<div className="relative bg-white p-8 rounded-2xl shadow-xl group-hover:-translate-y-2 transition-all duration-300">
									<div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.gradient} flex items-center justify-center text-3xl mb-6 transform group-hover:scale-110 transition-transform`}>
										{service.icon}
									</div>
									<h3 className="text-2xl font-semibold mb-4 text-gray-800">{service.title}</h3>
									<p className="text-gray-600 leading-relaxed">{service.description}</p>
									<div className="mt-6">
										<a href="#" className="text-blue-500 font-semibold group-hover:text-blue-600 transition-colors">
											Learn more →
										</a>
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