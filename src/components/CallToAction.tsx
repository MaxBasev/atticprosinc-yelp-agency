export default function CallToAction() {
	return (
		<section className="py-32 relative">
			{/* Градиентный фон */}
			<div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-700 to-purple-700">
				{/* Анимированные частицы */}
				{[...Array(20)].map((_, i) => (
					<div
						key={i}
						className="absolute bg-white/10 rounded-full"
						style={{
							width: `${Math.random() * 8 + 2}px`,
							height: `${Math.random() * 8 + 2}px`,
							top: `${Math.random() * 100}%`,
							left: `${Math.random() * 100}%`,
							animation: `float ${Math.random() * 15 + 10}s linear infinite`,
							animationDelay: `${Math.random() * 5}s`
						}}
					/>
				))}
			</div>

			<div className="container mx-auto px-4 relative z-10">
				<div className="max-w-4xl mx-auto text-center">
					<h2 className="text-4xl md:text-5xl font-bold mb-6 text-white animate-fade-in-up">
						Your Next Customers Are On{' '}
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-purple-200 animate-pulse-slow">
							Yelp
						</span>
					</h2>

					<p className="text-xl md:text-2xl text-blue-100 mb-12 leading-relaxed animate-fade-in-up" style={{ animationDelay: '200ms' }}>
						A meticulously optimized Yelp profile can draw in a steady stream of prospects,
						converting them into satisfied clients. Discover how effortless it is to transform
						curiosity into revenue.
					</p>

					<div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up" style={{ animationDelay: '400ms' }}>
						<button className="group relative px-8 py-4 bg-white text-blue-600 rounded-full font-semibold overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-2xl">
							<div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-purple-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
							<span className="relative flex items-center gap-2">
								Get Started Now
								<svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
								</svg>
							</span>
						</button>

						<button className="group px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white/10 transition-all duration-300">
							<span className="flex items-center gap-2">
								Watch Demo
								<svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
								</svg>
							</span>
						</button>
					</div>
				</div>
			</div>

			{/* Декоративные элементы */}
			<div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
			<div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
		</section>
	)
} 