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
					<p className="text-xl sm:text-2xl text-blue-100 mb-8 animate-fade-in-up">
						Don&apos;t just compete &mdash; dominate your local market with Yelp&apos;s powerful advertising platform
					</p>
				</div>
			</div>

			{/* Декоративные элементы */}
			<div className="hidden md:block absolute top-10 left-10 w-20 h-20 border-t-2 border-l-2 border-white/20"></div>
			<div className="hidden md:block absolute bottom-10 right-10 w-20 h-20 border-b-2 border-r-2 border-white/20"></div>
		</section>
	)
} 