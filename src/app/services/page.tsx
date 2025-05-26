import Link from 'next/link';
import Head from 'next/head';

export default function ServicesPage() {
	const services = [
		{
			title: "Yelp Profile Optimization",
			icon: "⭐",
			oneLiner: "Transform your Yelp presence into a lead generation powerhouse",
			description: "Complete optimization of your Yelp business profile including keyword integration, compelling business descriptions, professional photo curation, and review management strategies. We ensure your listing ranks higher in local searches and converts visitors into customers."
		},
		{
			title: "Yelp Ads Management",
			icon: "🎯",
			oneLiner: "Strategic advertising campaigns that deliver qualified local leads",
			description: "Expert management of your Yelp advertising campaigns with advanced targeting, budget optimization, and performance tracking. Our data-driven approach ensures maximum ROI while reaching customers actively searching for your services in your local area. We work with businesses ready to invest $10,000+ per month in Yelp advertising to meet program requirements and achieve significant results."
		},
		{
			title: "SEO (Local & Technical)",
			icon: "🔍",
			oneLiner: "Dominate local search results with proven SEO strategies",
			description: "Comprehensive local SEO optimization including Google My Business enhancement, local citation building, schema markup implementation, and technical website improvements. We help you rank higher for location-based searches and drive organic traffic."
		},
		{
			title: "PPC Campaigns (Google/Bing)",
			icon: "💡",
			oneLiner: "High-converting paid search campaigns across major platforms",
			description: "Strategic pay-per-click advertising on Google Ads and Microsoft Advertising platforms. We create targeted campaigns with compelling ad copy, optimized landing pages, and continuous performance monitoring to maximize your advertising investment and generate quality leads."
		},
		{
			title: "Google Local Services Ads",
			icon: "📍",
			oneLiner: "Get featured at the top of Google for local service searches",
			description: "Setup and management of Google Local Services Ads to appear prominently in local search results. Our certified approach includes profile verification, review optimization, and lead management to help you win more local customers through Google&apos;s trusted platform."
		},
		{
			title: "Conversion-First Landing Pages",
			icon: "🚀",
			oneLiner: "High-converting pages designed to turn visitors into customers",
			description: "Custom-designed landing pages optimized for maximum conversion rates. We create compelling, mobile-responsive pages with clear value propositions, strategic call-to-action placement, and A/B testing to ensure your paid traffic converts into valuable leads and sales."
		},
		{
			title: "AI-Powered Lead Response",
			icon: "⚡",
			oneLiner: "Instant lead response system that builds trust and secures appointments",
			description: "When potential clients reach out, response speed is crucial. Our advanced autoresponder delivers fast, personalized replies — building trust, showing professionalism, and securing more appointments. Never miss another opportunity with our 24/7 automated lead nurturing system."
		}
	];

	return (
		<>
			<Head>
				<meta
					name="description"
					content="Comprehensive digital marketing services by Call Eagle Digital: Yelp optimization, SEO, PPC campaigns, Google Local Services Ads, and AI-powered lead response systems. Get more qualified leads and grow your local business."
				/>
			</Head>

			<div className="min-h-screen">
				{/* Hero Section */}
				<section className="bg-gradient-to-r from-blue-600 via-blue-700 to-purple-700 py-20">
					<div className="container mx-auto px-4 text-center">
						<h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
							Our Services
						</h1>
						<p className="text-xl text-blue-100 max-w-3xl mx-auto">
							Comprehensive digital marketing solutions designed to help your local business thrive in today&apos;s competitive landscape.
						</p>
					</div>
				</section>

				{/* Services Grid Section */}
				<section id="services" className="py-20 bg-gray-50">
					<div className="container mx-auto px-4">
						<div className="text-center mb-16">
							<h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
								What We Offer
							</h2>
							<p className="text-gray-600 text-lg max-w-3xl mx-auto">
								From Yelp optimization to comprehensive digital marketing strategies, we provide the tools and expertise your business needs to attract more customers and increase revenue.
							</p>
						</div>

						<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
							{services.map((service, index) => (
								<div
									key={index}
									className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 group border border-gray-100 hover:border-blue-200"
								>
									{/* Icon */}
									<div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
										{service.icon}
									</div>

									{/* Title */}
									<h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
										{service.title}
									</h3>

									{/* One-liner */}
									<p className="text-sm text-muted-foreground text-gray-500 mb-4 font-medium">
										{service.oneLiner}
									</p>

									{/* Description */}
									<p className="text-gray-600 leading-relaxed">
										{service.description}
									</p>

									{/* Hover indicator */}
									<div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
										<div className="h-1 w-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
									</div>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* Why Choose Us Section */}
				<section className="py-20 bg-white">
					<div className="container mx-auto px-4">
						<div className="max-w-4xl mx-auto text-center">
							<h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
								Why Choose Call Eagle Digital?
							</h2>
							<div className="grid md:grid-cols-3 gap-8 mt-12">
								<div className="text-center">
									<div className="text-3xl mb-4">🎯</div>
									<h3 className="text-xl font-semibold mb-3">Results-Driven</h3>
									<p className="text-gray-600">Every strategy is designed with measurable outcomes in mind, ensuring your investment delivers real business growth.</p>
								</div>
								<div className="text-center">
									<div className="text-3xl mb-4">🤝</div>
									<h3 className="text-xl font-semibold mb-3">Local Expertise</h3>
									<p className="text-gray-600">Deep understanding of local markets and consumer behavior to maximize your regional business potential.</p>
								</div>
								<div className="text-center">
									<div className="text-3xl mb-4">⚡</div>
									<h3 className="text-xl font-semibold mb-3">Fast Implementation</h3>
									<p className="text-gray-600">Quick deployment of proven strategies so you can start seeing results and generating leads faster.</p>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* CTA Section */}
				<section className="py-20 bg-gradient-to-r from-blue-600 via-blue-700 to-purple-700">
					<div className="container mx-auto px-4 text-center">
						<div className="max-w-3xl mx-auto">
							<h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
								Ready to Grow Your Business?
							</h2>
							<p className="text-blue-100 text-lg mb-12 leading-relaxed">
								Let&apos;s discuss which services will deliver the best results for your specific business goals and market position.
							</p>
							<Link
								href="/#contact"
								className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-all transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-xl"
							>
								<span>Get Your Free Consultation</span>
								<svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
								</svg>
							</Link>
						</div>
					</div>
				</section>
			</div>
		</>
	);
} 