import Link from 'next/link';
import { notFound } from 'next/navigation';

interface PageProps {
	params: Promise<{
		slug: string;
	}>;
}

interface CaseStudyData {
	company: string;
	industry: string;
	result: string;
	logo: string;
	challenge: string;
	solution: string;
	results: string[];
}

export default async function CaseStudyPage({ params }: PageProps) {
	const { slug } = await params;

	// Portfolio data - in production this would come from a database or CMS
	const portfolioData: { [key: string]: CaseStudyData } = {
		"home-wizards": {
			company: "Home Wizards",
			industry: "Home Services",
			result: "+150% leads in 2 months",
			logo: "🏠",
			challenge: "Low online visibility and minimal lead generation from digital channels",
			solution: "Complete Yelp profile optimization with targeted advertising campaigns",
			results: [
				"150% increase in qualified leads",
				"4.8-star average rating improvement",
				"45% reduction in cost per lead",
				"300% increase in profile views"
			]
		},
		"atticpros": {
			company: "AtticPros",
			industry: "Attic Cleaning Services",
			result: "4.9 rating after Yelp revamp",
			logo: "🏘️",
			challenge: "Outdated Yelp profile with poor rating and limited customer engagement",
			solution: "Profile restructuring and comprehensive review management strategy",
			results: [
				"4.9-star rating achievement",
				"200% increase in positive reviews",
				"85% improvement in conversion rate",
				"50% increase in monthly bookings"
			]
		},
		"hvac-services": {
			company: "HVAC Services",
			industry: "HVAC Repair & Installation",
			result: "$2M+ revenue via Yelp Ads",
			logo: "❄️",
			challenge: "Seasonal business fluctuations and high competition in local market",
			solution: "Strategic advertising campaign with advanced conversion optimization",
			results: [
				"$2M+ in attributed revenue",
				"400% return on ad spend",
				"65% increase in emergency calls",
				"Year-round consistent lead flow"
			]
		},
		"green-landscaping": {
			company: "Green Landscaping",
			industry: "Landscaping Services",
			result: "300% increase in bookings",
			logo: "🌿",
			challenge: "Seasonal demand challenges and limited online presence",
			solution: "Local SEO optimization and Google Local Services setup",
			results: [
				"300% increase in service bookings",
				"Top 3 ranking for local keywords",
				"150% growth in organic traffic",
				"80% improvement in phone inquiries"
			]
		},
		"premier-plumbing": {
			company: "Premier Plumbing",
			industry: "Plumbing Services",
			result: "85% conversion rate improvement",
			logo: "🔧",
			challenge: "Poor website conversion and ineffective PPC campaigns",
			solution: "Landing page optimization and strategic PPC campaign management",
			results: [
				"85% conversion rate improvement",
				"60% reduction in cost per acquisition",
				"250% increase in form submissions",
				"40% improvement in call quality"
			]
		},
		"elite-cleaning": {
			company: "Elite Cleaning",
			industry: "Commercial Cleaning",
			result: "200% ROI in first quarter",
			logo: "✨",
			challenge: "Limited lead generation and manual response processes",
			solution: "Multi-platform advertising with AI-powered lead response system",
			results: [
				"200% ROI in first quarter",
				"90% faster lead response time",
				"175% increase in qualified leads",
				"50% improvement in customer retention"
			]
		}
	};

	const caseStudy = portfolioData[slug];

	if (!caseStudy) {
		notFound();
	}

	return (
		<div className="min-h-screen">
			{/* Hero Section */}
			<section className="bg-gradient-to-r from-blue-600 via-blue-700 to-purple-700 py-20">
				<div className="container mx-auto px-4">
					<div className="max-w-4xl mx-auto text-center">
						<div className="text-8xl mb-6">
							{caseStudy.logo}
						</div>
						<h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
							{caseStudy.company}
						</h1>
						<p className="text-xl text-blue-100 mb-4">
							{caseStudy.industry}
						</p>
						<div className="text-2xl md:text-3xl font-bold text-yellow-400">
							{caseStudy.result}
						</div>
					</div>
				</div>
			</section>

			{/* Case Study Content */}
			<section className="py-20 bg-white">
				<div className="container mx-auto px-4">
					<div className="max-w-4xl mx-auto">
						{/* Challenge */}
						<div className="mb-16">
							<h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
								The Challenge
							</h2>
							<p className="text-lg text-gray-600 leading-relaxed">
								{caseStudy.challenge}
							</p>
						</div>

						{/* Solution */}
						<div className="mb-16">
							<h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
								Our Solution
							</h2>
							<p className="text-lg text-gray-600 leading-relaxed">
								{caseStudy.solution}
							</p>
						</div>

						{/* Results */}
						<div className="mb-16">
							<h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
								The Results
							</h2>
							<div className="grid md:grid-cols-2 gap-6">
								{caseStudy.results.map((result: string, index: number) => (
									<div
										key={index}
										className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl border border-blue-100"
									>
										<div className="flex items-center">
											<div className="text-2xl mr-4">✅</div>
											<p className="text-lg font-semibold text-gray-800">
												{result}
											</p>
										</div>
									</div>
								))}
							</div>
						</div>

						{/* Coming Soon Notice */}
						<div className="bg-yellow-50 border border-yellow-200 rounded-xl p-8 text-center">
							<h3 className="text-2xl font-bold text-yellow-800 mb-4">
								Detailed Case Study Coming Soon
							</h3>
							<p className="text-yellow-700">
								We&apos;re preparing a comprehensive breakdown of this success story, including strategies, timelines, and behind-the-scenes insights. Stay tuned for the full case study!
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Navigation */}
			<section className="py-20 bg-gray-50">
				<div className="container mx-auto px-4 text-center">
					<div className="max-w-3xl mx-auto">
						<h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
							Ready for Similar Results?
						</h2>
						<p className="text-gray-600 text-lg mb-12 leading-relaxed">
							Every business is unique, but the principles of success remain consistent. Let&apos;s discuss how we can adapt these strategies for your specific situation.
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<Link
								href="/portfolio"
								className="inline-flex items-center bg-gray-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-700 transition-all transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-xl"
							>
								<svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
								</svg>
								<span>Back to Portfolio</span>
							</Link>
							<Link
								href="/#contact"
								className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-xl"
							>
								<span>Start Your Project</span>
								<svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
								</svg>
							</Link>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
} 