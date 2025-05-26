import Link from 'next/link';
import Head from 'next/head';

export default function AboutPage() {
	const teamMembers = [
		{
			name: "Sarah Johnson",
			role: "CEO & Founder",
			avatar: "/images/avatar-1.jpg",
			description: "15+ years in digital marketing with expertise in local business growth strategies."
		},
		{
			name: "Michael Chen",
			role: "Head of Operations",
			avatar: "/images/avatar-2.jpg",
			description: "Former Yelp consultant specializing in business listing optimization and ad management."
		},
		{
			name: "Emily Rodriguez",
			role: "Client Success Manager",
			avatar: "/images/avatar-3.jpg",
			description: "Dedicated to ensuring every client achieves measurable growth and exceptional ROI."
		}
	];

	const fastFacts = [
		{
			number: "2018",
			label: "Founded",
			description: "Started with a mission to help local businesses thrive online"
		},
		{
			number: "150%",
			label: "Average Growth",
			description: "Average increase in qualified leads for our clients"
		},
		{
			number: "4.9",
			label: "Client Rating",
			description: "Consistently rated by satisfied business owners"
		},
		{
			number: "500+",
			label: "Businesses Helped",
			description: "Local companies transformed through our strategies"
		}
	];

	const organizationSchema = {
		"@context": "https://schema.org",
		"@type": "Organization",
		"name": "Call Eagle Digital",
		"url": "https://calleagledigital.com",
		"sameAs": ["https://www.yelp.com/biz/call-eagle-digital"],
		"contactPoint": {
			"@type": "ContactPoint",
			"telephone": "+1-415-555-0123",
			"contactType": "customer service",
			"email": "hello@calleagledigital.com",
			"areaServed": "US",
			"availableLanguage": "English"
		},
		"address": {
			"@type": "PostalAddress",
			"streetAddress": "548 Market St",
			"addressLocality": "San Francisco",
			"addressRegion": "CA",
			"addressCountry": "US"
		},
		"description": "Digital marketing agency specializing in Yelp optimization, local SEO, and lead generation for local businesses.",
		"foundingDate": "2018",
		"serviceArea": {
			"@type": "Country",
			"name": "United States"
		}
	};

	return (
		<>
			<Head>
				<meta
					name="description"
					content="Learn about Call Eagle Digital - a passionate team helping local businesses soar through strategic digital marketing. Founded in 2018, we've helped 500+ businesses achieve 150% average growth with our proven strategies."
				/>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify(organizationSchema),
					}}
				/>
			</Head>

			<div className="min-h-screen">
				{/* Hero Section */}
				<section className="bg-gradient-to-r from-blue-600 via-blue-700 to-purple-700 py-20">
					<div className="container mx-auto px-4 text-center">
						<h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
							About Call Eagle Digital
						</h1>
						<p className="text-xl text-blue-100 max-w-3xl mx-auto">
							We&apos;re passionate about helping local businesses soar to new heights through strategic digital marketing and proven growth tactics.
						</p>
					</div>
				</section>

				{/* Our Mission Section */}
				<section className="py-20 bg-white">
					<div className="container mx-auto px-4">
						<div className="max-w-4xl mx-auto">
							<h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
								Our Mission
							</h2>
							<div className="space-y-6 text-lg text-gray-700 leading-relaxed">
								<p>
									At Call Eagle Digital, we believe every local business deserves to reach its full potential. Our mission is to bridge the gap between exceptional service providers and the customers who need them most. Through data-driven strategies, innovative technology, and personalized attention, we help businesses build stronger online presence and generate meaningful connections with their target audience.
								</p>
								<p>
									Since 2018, we&apos;ve been dedicated to demystifying digital marketing for local businesses. We understand that running a business is challenging enough without having to worry about complex advertising platforms and ever-changing algorithms. That&apos;s why we handle the technical aspects while you focus on what you do best – serving your customers and growing your business.
								</p>
							</div>
						</div>
					</div>
				</section>

				{/* Team Section */}
				<section className="py-20 bg-gray-50">
					<div className="container mx-auto px-4">
						<div className="text-center mb-16">
							<h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
								Meet Our Team
							</h2>
							<p className="text-gray-600 text-lg max-w-2xl mx-auto">
								Our experienced team combines years of industry expertise with a genuine passion for helping businesses succeed.
							</p>
						</div>

						<div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
							{teamMembers.map((member, index) => (
								<div
									key={index}
									className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 text-center group"
								>
									<div className="relative mb-6">
										<div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-blue-600 to-purple-600 p-1">
											<div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
												<div className="w-20 h-20 rounded-full bg-gray-300 flex items-center justify-center">
													<span className="text-2xl font-bold text-gray-600">
														{member.name.split(' ').map(n => n[0]).join('')}
													</span>
												</div>
											</div>
										</div>
									</div>
									<h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
										{member.name}
									</h3>
									<p className="text-blue-600 font-medium mb-4">
										{member.role}
									</p>
									<p className="text-gray-600 leading-relaxed">
										{member.description}
									</p>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* Fast Facts Section */}
				<section className="py-20 bg-gradient-to-r from-blue-600 via-blue-700 to-purple-700">
					<div className="container mx-auto px-4">
						<div className="text-center mb-16">
							<h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
								Fast Facts
							</h2>
							<p className="text-blue-100 text-lg max-w-2xl mx-auto">
								Numbers that showcase our commitment to delivering exceptional results for local businesses.
							</p>
						</div>

						<div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
							{fastFacts.map((fact, index) => (
								<div
									key={index}
									className="text-center group hover:-translate-y-2 transition-transform duration-300"
								>
									<div className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:text-blue-200 transition-colors">
										{fact.number}
									</div>
									<h3 className="text-lg font-semibold text-blue-100 mb-2">
										{fact.label}
									</h3>
									<p className="text-blue-200 text-sm">
										{fact.description}
									</p>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* CTA Section */}
				<section className="py-20 bg-white">
					<div className="container mx-auto px-4 text-center">
						<div className="max-w-3xl mx-auto">
							<h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
								Ready to Work with Us?
							</h2>
							<p className="text-gray-600 text-lg mb-12 leading-relaxed">
								Join hundreds of successful businesses that have transformed their online presence with Call Eagle Digital. Let&apos;s discuss how we can help you achieve your growth goals.
							</p>
							<Link
								href="/#contact"
								className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-xl"
							>
								<span>Work with Us</span>
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