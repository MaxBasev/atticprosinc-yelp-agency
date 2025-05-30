import Link from 'next/link';
import Image from 'next/image';

export default function PortfolioPage() {
	const portfolioItems = [
		{
			slug: "home-wizards",
			company: "Home Wizards",
			result: "+150% leads in 2 months",
			logo: "/images/clients/homewizards.png",
			industry: "Home Services",
			description: "Complete Yelp profile optimization and targeted ad campaigns"
		},
		{
			slug: "atticpros",
			company: "AtticPros",
			result: "4.9 rating after Yelp revamp",
			logo: "/images/clients/atticpros.png",
			industry: "Attic Cleaning",
			description: "Profile restructuring and review management strategy"
		},
		{
			slug: "hvac-services",
			company: "HVAC Panda",
			result: "$2M+ revenue via Yelp Ads",
			logo: "/images/clients/hvacpanda.png",
			industry: "HVAC",
			description: "Strategic advertising campaign with conversion optimization"
		},
		{
			slug: "advance-hvac",
			company: "Advance HVAC",
			result: "40% service area growth",
			logo: "/images/clients/advancehvac.png",
			industry: "HVAC Services",
			description: "Multi-county Yelp optimization and review management"
		},
		{
			slug: "rhino-fencing",
			company: "Rhino Fencing",
			result: "250% increase in consultations",
			logo: "/images/clients/rhinofencing.png",
			industry: "Fencing Services",
			description: "Digital presence optimization and lead generation system"
		},
		{
			slug: "crawlclean",
			company: "CrawlClean",
			result: "800+ 5-star reviews",
			logo: "/images/clients/crawlclean.png",
			industry: "Home Services",
			description: "Complete digital presence and lead generation system"
		},
		{
			slug: "phoenix-restoration",
			company: "Phoenix Restoration",
			result: "98% customer satisfaction",
			logo: "/images/clients/phoenix.png",
			industry: "Restoration Services",
			description: "Comprehensive digital marketing and lead generation strategy"
		},
		{
			slug: "insulation-panda",
			company: "Insulation Panda",
			result: "#1 trusted contractor",
			logo: "/images/clients/insulationpanda.png",
			industry: "Insulation Services",
			description: "Complete digital presence and service area expansion strategy"
		}
	];

	return (
		<div className="min-h-screen">
			{/* Hero Section */}
			<section className="bg-gradient-to-r from-blue-600 via-blue-700 to-purple-700 py-20">
				<div className="container mx-auto px-4 text-center">
					<h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
						Our Portfolio
					</h1>
					<p className="text-xl text-blue-100 max-w-3xl mx-auto">
						Real results from real businesses. See how we&apos;ve helped local companies achieve remarkable growth through strategic digital marketing.
					</p>
				</div>
			</section>

			{/* Portfolio Grid */}
			<section className="py-20 bg-gray-50">
				<div className="container mx-auto px-4">
					<div className="text-center mb-16">
						<h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
							Success Stories
						</h2>
						<p className="text-gray-600 text-lg max-w-3xl mx-auto">
							From startups to established businesses, we&apos;ve helped companies across various industries achieve their digital marketing goals and drive sustainable growth.
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
						{portfolioItems.map((item, index) => (
							<Link
								key={index}
								href={`/portfolio/${item.slug}`}
								className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 hover:border-blue-200 transform hover:-translate-y-2"
							>
								{/* Company Logo */}
								{item.logo.startsWith('/') && (
									<div className="mb-6 text-center transform group-hover:scale-110 transition-transform duration-300 relative h-24">
										<Image
											src={item.logo}
											alt={item.company}
											fill
											sizes="(max-width: 768px) 100vw, 240px"
											className="object-contain"
										/>
									</div>
								)}

								{/* Company Name */}
								<h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
									{item.company}
								</h3>

								{/* Industry */}
								<p className="text-sm text-gray-500 mb-4 font-medium">
									{item.industry}
								</p>

								{/* Result */}
								<div className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-bold text-lg mb-4">
									{item.result}
								</div>

								{/* Description */}
								<p className="text-gray-600 leading-relaxed mb-6">
									{item.description}
								</p>

								{/* Read More Indicator */}
								<div className="flex items-center text-blue-600 font-medium group-hover:text-purple-600 transition-colors duration-300">
									<span>View Case Study</span>
									<svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
									</svg>
								</div>

								{/* Hover border effect */}
								<div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
									<div className="h-1 w-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
								</div>
							</Link>
						))}
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-20 bg-white">
				<div className="container mx-auto px-4 text-center">
					<div className="max-w-3xl mx-auto">
						<h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
							Ready to Be Our Next Success&nbsp;Story?
						</h2>
						<p className="text-gray-600 text-lg mb-12 leading-relaxed">
							Join the growing list of businesses that have transformed their online presence and achieved remarkable growth with Call Eagle Digital.
						</p>
						<Link
							href="/#contact"
							className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-xl"
						>
							<span>Start Your Success Story</span>
							<svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
							</svg>
						</Link>
					</div>
				</div>
			</section>
		</div>
	);
} 