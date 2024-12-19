import Image from 'next/image';

export default function CallToAction() {
	return (
		<section className="py-16 relative overflow-hidden">
			{/* Фоновое изображение */}
			<div className="absolute inset-0">
				<Image
					src="/images/service-bg.jpg"
					alt="Background"
					layout="fill"
					objectFit="cover"
					className="opacity-10"
				/>
			</div>

			{/* Градиентный оверлей */}
			<div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 via-blue-700/90 to-purple-700/90" />

			<div className="container mx-auto px-4 relative z-10">
				<div className="max-w-3xl mx-auto text-center">
					<h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
						Your Next Customers Are On Yelp
					</h2>
					<p className="text-blue-100 text-lg md:text-xl mb-12">
						A meticulously optimized Yelp profile can draw in a steady stream of prospects, converting them into satisfied clients. Discover how effortless it is to transform curiosity into revenue. With CalleAgleDigi, turn your Yelp presence into a powerful growth engine.
					</p>
					<button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-all transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-xl">
						Start Your Optimization Journey
					</button>
				</div>
			</div>

			{/* Декоративные элементы */}
			<div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
			<div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
		</section>
	)
} 