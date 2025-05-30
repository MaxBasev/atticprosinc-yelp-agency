import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Terms of Service | Call Eagle Digital',
	description: 'Terms of Service and conditions for using Call Eagle Digital services.'
};

export default function TermsPage() {
	return (
		<div className="min-h-screen bg-gray-50">
			<div className="container mx-auto px-4 py-16">
				<h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">Terms of Service</h1>
				
				<div className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm p-8">
					<section className="mb-8">
						<h2 className="text-2xl font-semibold mb-4">1. Agreement to Terms</h2>
						<p className="text-gray-600 mb-4">
							By accessing or using Call Eagle Digital's services, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you do not have permission to access our services.
						</p>
					</section>

					<section className="mb-8">
						<h2 className="text-2xl font-semibold mb-4">2. Services Description</h2>
						<p className="text-gray-600 mb-4">
							Call Eagle Digital provides digital marketing services, including but not limited to Yelp advertising management, local SEO, and business visibility solutions. We reserve the right to modify, suspend, or discontinue any aspect of our services at any time.
						</p>
					</section>

					<section className="mb-8">
						<h2 className="text-2xl font-semibold mb-4">3. Service Requirements</h2>
						<p className="text-gray-600 mb-4">
							Our Yelp advertising management services require a minimum monthly advertising budget. By engaging our services, you acknowledge and agree to meet these minimum requirements for the duration of our partnership.
						</p>
					</section>

					<section className="mb-8">
						<h2 className="text-2xl font-semibold mb-4">4. Intellectual Property</h2>
						<p className="text-gray-600 mb-4">
							All content, features, and functionality of our services are owned by Call Eagle Digital and are protected by international copyright, trademark, and other intellectual property laws.
						</p>
					</section>

					<section className="mb-8">
						<h2 className="text-2xl font-semibold mb-4">5. Limitation of Liability</h2>
						<p className="text-gray-600 mb-4">
							Call Eagle Digital shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use our services.
						</p>
					</section>

					<section className="mb-8">
						<h2 className="text-2xl font-semibold mb-4">6. Termination</h2>
						<p className="text-gray-600 mb-4">
							We may terminate or suspend your access to our services immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
						</p>
					</section>

					<section>
						<h2 className="text-2xl font-semibold mb-4">7. Changes to Terms</h2>
						<p className="text-gray-600 mb-4">
							We reserve the right to modify these terms at any time. We will notify users of any changes by updating the date at the top of these terms and by maintaining a changelog.
						</p>
					</section>

					<div className="mt-8 pt-8 border-t border-gray-200">
						<p className="text-sm text-gray-500">
							Last updated: March 2025
						</p>
					</div>
				</div>
			</div>
		</div>
	);
} 