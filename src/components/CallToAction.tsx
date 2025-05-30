import Image from 'next/image';

export default function CallToAction() {
	return (
		<section className="py-24 relative overflow-hidden">
			{/* Background image */}
			<div className="absolute inset-0">
				<div className="relative w-full h-full">
					<Image
						src="/images/services-bg.jpg"
						alt="Background"
						fill
						className="opacity-10 object-cover"
						priority
					/>
				</div>
			</div>

			{/* Gradient overlay */}
			<div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 via-blue-700/90 to-purple-700/90" />

			<div className="container mx-auto px-4 relative z-10">
				<div className="max-w-3xl mx-auto text-center">
					{/* Small logo */}
					<div className="flex justify-center mb-6">
						<Image
							src="/images/eagle_logo-trans.png"
							alt="Call Eagle Digital"
							width={60}
							height={60}
							className="opacity-80"
						/>
					</div>
					<h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
						Your Ideal Clients Are&nbsp;Searching for You
					</h2>
					<p className="text-blue-100 text-xl md:text-2xl mb-12">
						Make sure they find you. Let Call Eagle Digital turn your local listing into a conversion machine.
					</p>
					<button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-all transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-xl">
						Get Started
					</button>
				</div>
			</div>

			{/* Decorative elements */}
			<div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
			<div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
		</section>
	)
} 