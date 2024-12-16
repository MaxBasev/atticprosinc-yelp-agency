import YelpLogo from './YelpLogo'

export default function Hero() {
	return (
		<section className="relative min-h-screen flex items-center">
			{/* Background image with overlay */}
			<div className="absolute inset-0">
				<img
					src="/images/hero-bg.jpg"
					alt="Background"
					className="w-full h-full object-cover"
				/>
				<div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-600/90"></div>
			</div>

			{/* Animated particles */}
			<div className="absolute inset-0 overflow-hidden">
				{[...Array(20)].map((_, i) => (
					<div
						key={i}
						className="absolute bg-white/20 rounded-full"
						style={{
							width: Math.random() * 6 + 'px',
							height: Math.random() * 6 + 'px',
							top: Math.random() * 100 + '%',
							left: Math.random() * 100 + '%',
							animation: `float ${Math.random() * 10 + 10}s linear infinite`
						}}
					></div>
				))}
			</div>

			<div className="container mx-auto px-4 relative z-10">
				<div className="max-w-4xl mx-auto text-center">
					{/* PNG логотип */}
					<div className="inline-block mb-8 animate-bounce-slow">
						<img
							src="/images/yelp-logo.png"
							alt="Yelp"
							className="h-16 md:h-20"
						/>
					</div>
					<h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight text-white animate-fade-in">
						Conquer Your Local Market with{' '}
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-blue-400">
							Yelp Advertising
						</span>
					</h1>
					<p className="text-xl md:text-2xl mb-12 text-blue-100 leading-relaxed opacity-90">
						Tap into the unmatched potential of Yelp's advertising ecosystem
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<button className="bg-white text-blue-600 px-10 py-4 rounded-full font-semibold hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl">
							Start Today
						</button>
						<button className="border-2 border-white text-white px-10 py-4 rounded-full font-semibold hover:bg-white/10 transition-all">
							Watch Demo
						</button>
					</div>
				</div>
			</div>

			{/* Scroll indicator */}
			<div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
				<div className="w-8 h-12 rounded-full border-2 border-white/50 flex items-center justify-center">
					<div className="w-1 h-3 bg-white/50 rounded-full"></div>
				</div>
			</div>
		</section>
	)
} 