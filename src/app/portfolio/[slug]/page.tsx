import Link from 'next/link';
import { notFound } from 'next/navigation';
import Image from 'next/image';

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
			logo: "/images/clients/homewizards.png",
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
			logo: "/images/clients/atticpros.png",
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
			company: "HVAC Panda",
			industry: "HVAC Repair & Installation",
			result: "$2M+ revenue via Yelp Ads",
			logo: "/images/clients/hvacpanda.png",
			challenge: "Seasonal business fluctuations and high competition in local market",
			solution: "Strategic advertising campaign with advanced conversion optimization",
			results: [
				"$2M+ in attributed revenue",
				"400% return on ad spend",
				"65% increase in emergency calls",
				"Year-round consistent lead flow"
			]
		},
		"advance-hvac": {
			company: "Advance HVAC",
			industry: "HVAC Services",
			result: "40% service area growth",
			logo: "/images/clients/advancehvac.png",
			challenge: "Operating in a competitive market across multiple Bay Area counties required strategic approach to stand out and maintain strong online presence",
			solution: "Comprehensive Yelp profile optimization and review management strategy across all service areas",
			results: [
				"40% expansion in service coverage",
				"4.9-star rating with 115+ reviews",
				"Operating in 7 Bay Area counties",
				"Consistent lead flow across all locations"
			]
		},
		"rhino-fencing": {
			company: "Rhino Fencing",
			industry: "Fencing Services",
			result: "250% increase in consultations",
			logo: "/images/clients/rhinofencing.png",
			challenge: "New fencing company needed to establish strong market presence and generate qualified leads in the competitive Bay Area market",
			solution: "Comprehensive digital presence setup with focus on lead generation and service area optimization",
			results: [
				"250% increase in consultation bookings",
				"Established presence in entire Bay Area",
				"Automated lead response system implementation",
				"Top rankings for local fencing keywords"
			]
		},
		"crawlclean": {
			company: "CrawlClean",
			industry: "Home Services",
			result: "800+ 5-star reviews",
			logo: "/images/clients/crawlclean.png",
			challenge: "Needed to establish trust and credibility in a highly competitive market while scaling operations across multiple locations",
			solution: "Comprehensive digital presence optimization with focus on review generation and management system implementation",
			results: [
				"Generated over 800 verified 5-star reviews",
				"Expanded to 5 new service locations",
				"35% increase in average ticket value",
				"90% improvement in customer response time"
			]
		},
		"phoenix-restoration": {
			company: "Phoenix Restoration",
			industry: "Restoration Services",
			result: "98% customer satisfaction",
			logo: "/images/clients/phoenix.png",
			challenge: "Needed to establish market leadership in the competitive Bay Area restoration industry while expanding service coverage across multiple counties",
			solution: "Implemented comprehensive digital marketing strategy with focus on service area optimization and customer satisfaction tracking",
			results: [
				"98% customer satisfaction score achieved",
				"Expanded to serve 8 Bay Area counties",
				"100% health and safety compliance rate",
				"87% improvement in project completion efficiency"
			]
		},
		"insulation-panda": {
			company: "Insulation Panda",
			industry: "Insulation Services",
			result: "#1 trusted contractor",
			logo: "/images/clients/insulationpanda.png",
			challenge: "Required comprehensive digital presence establishment and service area expansion across the entire Bay Area while building trust as a leading insulation contractor",
			solution: "Implemented full-scale digital marketing strategy with focus on service differentiation and geographic expansion",
			results: [
				"Achieved Diamond Certified status",
				"Expanded to serve 7 Bay Area counties",
				"Ranked #1 trusted contractor on multiple platforms",
				"100% transparent pricing implementation"
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
			<section className="bg-gradient-to-r from-blue-600 via-blue-700 to-purple-700 py-20 relative overflow-hidden">
				{/* Decorative background elements */}
				<div className="absolute inset-0 bg-black/10" />
				<div className="absolute inset-0">
					<div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black/20 to-transparent" />
					<div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/20 to-transparent" />
				</div>

				<div className="container mx-auto px-4 relative">
					<div className="max-w-4xl mx-auto">
						{/* Logo and Title Container */}
						<div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 md:p-16 shadow-2xl transform hover:scale-[1.02] transition-all duration-300">
							{caseStudy.logo.startsWith('/') && (
								<div className="flex justify-center mb-10">
									<Image
										src={caseStudy.logo}
										alt={caseStudy.company}
										width={160}
										height={160}
										className="object-contain"
									/>
								</div>
							)}
							
							<div className="text-center">
								<h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
									{caseStudy.company}
								</h1>
								<p className="text-xl text-gray-600 mb-8">
									{caseStudy.industry}
								</p>
								<div className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 rounded-full px-8 py-3">
									<span className="text-2xl md:text-3xl font-bold text-white">
										{caseStudy.result}
									</span>
								</div>
							</div>
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