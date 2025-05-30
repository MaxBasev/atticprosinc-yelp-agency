import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Cookie Policy | Call Eagle Digital',
	description: 'Learn about how Call Eagle Digital uses cookies and similar technologies.'
};

export default function CookiePolicyPage() {
	return (
		<div className="min-h-screen bg-gray-50">
			<div className="container mx-auto px-4 py-16">
				<h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">Cookie Policy</h1>
				
				<div className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm p-8">
					<section className="mb-8">
						<h2 className="text-2xl font-semibold mb-4">1. What Are Cookies</h2>
						<p className="text-gray-600 mb-4">
							Cookies are small text files that are placed on your device when you visit our website. They help us provide you with a better experience by remembering your preferences and understanding how you use our site.
						</p>
					</section>

					<section className="mb-8">
						<h2 className="text-2xl font-semibold mb-4">2. Types of Cookies We Use</h2>
						<div className="space-y-4">
							<div>
								<h3 className="text-xl font-medium mb-2">Essential Cookies</h3>
								<p className="text-gray-600">
									Required for the website to function properly. They enable basic functions like page navigation and access to secure areas.
								</p>
							</div>
							<div>
								<h3 className="text-xl font-medium mb-2">Analytics Cookies</h3>
								<p className="text-gray-600">
									Help us understand how visitors interact with our website by collecting and reporting information anonymously.
								</p>
							</div>
							<div>
								<h3 className="text-xl font-medium mb-2">Marketing Cookies</h3>
								<p className="text-gray-600">
									Used to track visitors across websites to display relevant advertisements and measure their effectiveness.
								</p>
							</div>
						</div>
					</section>

					<section className="mb-8">
						<h2 className="text-2xl font-semibold mb-4">3. How We Use Cookies</h2>
						<p className="text-gray-600 mb-4">
							We use cookies to:
						</p>
						<ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
							<li>Remember your preferences and settings</li>
							<li>Understand how you use our website</li>
							<li>Improve our services and user experience</li>
							<li>Provide relevant advertising</li>
						</ul>
					</section>

					<section className="mb-8">
						<h2 className="text-2xl font-semibold mb-4">4. Managing Cookies</h2>
						<p className="text-gray-600 mb-4">
							Most web browsers allow you to control cookies through their settings. You can:
						</p>
						<ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
							<li>Delete all cookies from your browser</li>
							<li>Block cookies from being set</li>
							<li>Allow only certain types of cookies</li>
							<li>Configure settings for specific websites</li>
						</ul>
						<p className="text-gray-600">
							Please note that blocking some types of cookies may impact your experience on our website.
						</p>
					</section>

					<section className="mb-8">
						<h2 className="text-2xl font-semibold mb-4">5. Third-Party Cookies</h2>
						<p className="text-gray-600 mb-4">
							Some cookies are placed by third-party services that appear on our pages. We do not control these third-party cookies and recommend reviewing their privacy policies for more information.
						</p>
					</section>

					<section>
						<h2 className="text-2xl font-semibold mb-4">6. Updates to This Policy</h2>
						<p className="text-gray-600 mb-4">
							We may update this Cookie Policy from time to time. Any changes will be posted on this page with an updated revision date.
						</p>
					</section>

					<div className="mt-8 pt-8 border-t border-gray-200">
						<p className="text-sm text-gray-500">
							Last updated: March 2025
						</p>
						<p className="text-sm text-gray-500 mt-2">
							For questions about our Cookie Policy, please contact us at privacy@calleagledigital.com
						</p>
					</div>
				</div>
			</div>
		</div>
	);
} 