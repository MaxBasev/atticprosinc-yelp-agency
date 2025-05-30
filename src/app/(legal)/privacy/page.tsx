import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Privacy Policy | Call Eagle Digital',
	description: 'Learn how Call Eagle Digital collects, uses, and protects your personal information.'
};

export default function PrivacyPolicyPage() {
	return (
		<div className="min-h-screen bg-gray-50">
			<div className="container mx-auto px-4 py-16">
				<h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">Privacy Policy</h1>
				
				<div className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm p-8">
					<section className="mb-8">
						<h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
						<p className="text-gray-600 mb-4">
							We collect information that you provide directly to us, including name, email address, phone number, and business information. We also collect data about how you use our services through cookies and similar technologies.
						</p>
					</section>

					<section className="mb-8">
						<h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
						<p className="text-gray-600 mb-4">
							We use the information we collect to:
						</p>
						<ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
							<li>Provide and improve our services</li>
							<li>Communicate with you about our services</li>
							<li>Monitor and analyze trends and usage</li>
							<li>Prevent fraudulent transactions and monitor security</li>
						</ul>
					</section>

					<section className="mb-8">
						<h2 className="text-2xl font-semibold mb-4">3. Information Sharing</h2>
						<p className="text-gray-600 mb-4">
							We do not sell your personal information. We may share your information with third-party service providers who assist us in providing our services, subject to confidentiality agreements.
						</p>
					</section>

					<section className="mb-8">
						<h2 className="text-2xl font-semibold mb-4">4. Data Security</h2>
						<p className="text-gray-600 mb-4">
							We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
						</p>
					</section>

					<section className="mb-8">
						<h2 className="text-2xl font-semibold mb-4">5. Your Rights</h2>
						<p className="text-gray-600 mb-4">
							You have the right to access, correct, or delete your personal information. You may also object to or restrict certain processing of your information. Contact us to exercise these rights.
						</p>
					</section>

					<section className="mb-8">
						<h2 className="text-2xl font-semibold mb-4">6. Third-Party Services</h2>
						<p className="text-gray-600 mb-4">
							Our services may contain links to third-party websites. We are not responsible for the privacy practices of these websites. We encourage you to read their privacy policies.
						</p>
					</section>

					<section>
						<h2 className="text-2xl font-semibold mb-4">7. Changes to Privacy Policy</h2>
						<p className="text-gray-600 mb-4">
							We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the effective date.
						</p>
					</section>

					<div className="mt-8 pt-8 border-t border-gray-200">
						<p className="text-sm text-gray-500">
							Last updated: March 2025
						</p>
						<p className="text-sm text-gray-500 mt-2">
							Contact us at privacy@calleagledigital.com with any questions about this policy.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
} 