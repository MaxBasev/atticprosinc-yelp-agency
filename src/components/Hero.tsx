import Image from 'next/image';

export default function Hero() {
	return (
		<section className="min-h-screen relative flex items-center justify-center overflow-hidden bg-gradient-to-r from-blue-600 via-blue-700 to-purple-700">
			{/* Фоновый градиент */}
			<div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/10" />

			{/* Основной контент */}
			<div className="container mx-auto px-4 relative z-10">
				<div className="text-center max-w-4xl mx-auto">
					{/* Логотип */}
					<div className="inline-block mb-8 animate-bounce-slow hover:animate-pulse-slow transition-all duration-300 transform hover:scale-110">
						<Image
							src="/images/yelp-logo.png"
							alt="Yelp"
							width={80}
							height={80}
							className="filter drop-shadow-lg"
							priority
						/>
					</div>

					{/* Заголовок */}
					<h1 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-8 leading-tight text-white animate-slide-down">
						Conquer Your Local Market with{' '}
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-blue-100 to-blue-300 animate-pulse-slow">
							Tailored Yelp Advertising
						</span>
					</h1>

					{/* Подзаголовок */}
					<p className="text-lg sm:text-xl md:text-2xl mb-8 sm:mb-12 text-blue-100 leading-relaxed opacity-90 animate-slide-up max-w-3xl mx-auto">
						Tap into the unmatched potential of Yelp's advertising ecosystem to draw in precisely targeted, high-value leads. By collaborating with CalleAgleDigi, you'll transform your Yelp presence into a magnet for serious prospects, elevating your online visibility and converting casual browsers into devoted patrons.
					</p>

					{/* Кнопка */}
					<div className="flex justify-center">
						<button className="bg-white text-blue-600 px-8 sm:px-10 py-3 sm:py-4 rounded-full font-semibold 
									   hover:bg-blue-50 transition-all transform hover:scale-105 hover:-translate-y-1
									   shadow-lg hover:shadow-xl animate-fade-in-left
									   focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50">
							<span className="flex items-center justify-center">
								<span>Start Today</span>
								<svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
								</svg>
							</span>
						</button>
					</div>
				</div>
			</div>

			{/* Декоративные элементы */}
			<div className="hidden md:block absolute top-10 left-10 w-20 h-20 border-t-2 border-l-2 border-white/20"></div>
			<div className="hidden md:block absolute bottom-10 right-10 w-20 h-20 border-b-2 border-r-2 border-white/20"></div>
		</section>
	)
} 