export default function Services() {
	const services = [
		{
			title: "Lightning-Fast Autoresponder",
			description: "Speed is paramount in a world that never stops moving. Our immediate-response tool delivers prompt, customized messages to your prospects, reinforcing a sense of value and attentiveness. With replies arriving within seconds, you'll set a high standard for service and professionalism.",
			icon: "⚡",
			gradient: "from-blue-600 to-purple-600"
		},
		{
			title: "Virtual Assistant Service",
			description: "Let us handle the day-to-day workload so you can focus on what matters: growing your business. Our dedicated virtual assistants support your operations by scheduling appointments, engaging with potential clients, and ensuring nothing slips through the cracks. This efficient, behind-the-scenes team boosts productivity and keeps your customers feeling supported.",
			icon: "👩‍💼",
			gradient: "from-purple-600 to-pink-600"
		}
	]

	return (
		<section className="py-16 relative">
			<div className="py-16 relative">
				{/* Блобы */}
				<div className="absolute -inset-32 z-20">
					<div className="absolute top-0 left-1/3 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
					<div className="absolute -top-20 right-1/3 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
					<div className="absolute top-10 right-1/4 w-60 h-60 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />
				</div>

				<div className="container mx-auto px-4 relative z-30">
					{/* Заголовок секции */}
					<div className="max-w-3xl mx-auto text-center mb-16">
						<h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
							Our Full Range of Yelp Services
						</h2>
						<p className="text-gray-600 text-lg md:text-xl">
							We understand today&apos;s competition intensity. That&apos;s why we&apos;ve built an arsenal of advanced solutions to help you convert more leads and maintain a strong edge in your market.
						</p>
					</div>

					{/* Карточки сервисов */}
					<div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
						{services.map((service, index) => (
							<div
								key={index}
								className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 animate-fade-in-up"
								style={{ animationDelay: `${index * 150}ms` }}
							>
								{/* Градиентный фон при наведении */}
								<div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-all duration-500`} />

								<div className="relative">
									{/* Иконка */}
									<div className="text-4xl mb-6 transform group-hover:scale-110 transition-transform duration-500">
										{service.icon}
									</div>

									{/* Заголовок */}
									<h3 className="text-2xl font-semibold mb-4 text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
										{service.title}
									</h3>

									{/* Описание */}
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