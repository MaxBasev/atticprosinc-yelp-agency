export default function Clients() {
	const clients = [
		{
			name: 'Restaurant Success',
			logo: '/images/clients/restaurant.png',
			industry: 'Fine Dining Restaurant',
			rating: 4.8,
			testimonial: 'Increased our customer base by 150% in just 3 months',
			gradient: 'from-blue-600 to-purple-600'
		},
		{
			name: 'Auto Excellence',
			logo: '/images/clients/auto.png',
			industry: 'Auto Service Center',
			rating: 4.9,
			testimonial: 'Generated 200+ qualified leads through Yelp optimization',
			gradient: 'from-purple-600 to-pink-600'
		},
		{
			name: 'Beauty & Beyond',
			logo: '/images/clients/beauty.png',
			industry: 'Premium Beauty Salon',
			rating: 5.0,
			testimonial: 'ROI increased by 300% within first 6 months',
			gradient: 'from-pink-600 to-blue-600'
		}
	];

	return (
		<section className="py-16 relative -my-16">
			<div className="py-16 relative bg-gray-50">
				{/* Блобы */}
				<div className="absolute -inset-32 z-20">
					<div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
					<div className="absolute top-1/3 right-1/4 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
					<div className="absolute bottom-1/4 left-1/3 w-60 h-60 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />
				</div>

				{/* Контент */}
				<div className="container mx-auto px-4 relative z-30">
					{/* Заголовок */}
					<div className="max-w-3xl mx-auto text-center mb-20">
						<h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
							Success Stories
						</h2>
						<p className="text-gray-600 text-lg md:text-xl">
							See how businesses like yours achieved remarkable growth with our Yelp optimization services
						</p>
					</div>

					{/* Карточки клиентов */}
					<div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
						{clients.map((client, index) => (
							<div
								key={index}
								className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 animate-fade-in-up"
								style={{ animationDelay: `${index * 150}ms` }}
							>
								{/* Градиентный фон при наведении */}
								<div className={`absolute inset-0 bg-gradient-to-r ${client.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-all duration-500`} />

								<div className="relative">
									{/* Логотип */}
									<div className="h-16 mb-8 flex items-center justify-center">
										<img
											src={client.logo}
											alt={client.name}
											className="max-h-full max-w-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500"
										/>
									</div>

									{/* Рейтинг */}
									<div className="flex items-center justify-center mb-6">
										{[...Array(5)].map((_, i) => (
											<span key={i} className="text-yellow-400 text-xl mx-0.5">★</span>
										))}
										<span className="ml-2 font-semibold text-gray-700">{client.rating}</span>
									</div>

									{/* Информация */}
									<h3 className="text-xl font-semibold mb-4 text-center text-gray-900">
										{client.industry}
									</h3>
									<p className="text-gray-600 text-center leading-relaxed italic">
										"{client.testimonial}"
									</p>

									{/* Декоративная линия */}
									<div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${client.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`} />
								</div>
							</div>
						))}
					</div>

					{/* Статистика */}
					<div className="mt-20 grid grid-cols-3 gap-8 max-w-4xl mx-auto">
						{[
							{ number: '150%', label: 'Average Growth' },
							{ number: '4.9', label: 'Client Rating' },
							{ number: '$2M+', label: 'Revenue Generated' }
						].map((stat, index) => (
							<div
								key={index}
								className="text-center group hover:-translate-y-1 transition-transform duration-300"
							>
								<div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
									{stat.number}
								</div>
								<p className="text-gray-600 group-hover:text-gray-900 transition-colors duration-300">
									{stat.label}
								</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
} 