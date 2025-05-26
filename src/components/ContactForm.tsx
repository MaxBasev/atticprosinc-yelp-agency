'use client';

import { useState } from 'react';

export default function ContactForm() {
	const [isConsentChecked, setIsConsentChecked] = useState(false);
	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		if (!isConsentChecked) {
			alert('Please check the consent checkbox to proceed.');
			return;
		}

		setIsSubmitting(true);

		// Simulate form submission
		setTimeout(() => {
			setIsSubmitting(false);
			alert('Thanks! We\'ll reach out within 1 business day.');
			// Reset form
			(e.target as HTMLFormElement).reset();
			setIsConsentChecked(false);
		}, 1000);
	};

	return (
		<section id="contact" className="py-32 bg-gray-50 relative overflow-hidden">
			{/* Decorative background */}
			<div className="absolute inset-0">
				<div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white to-transparent" />
				<div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
			</div>

			<div className="container mx-auto px-4 relative z-10">
				<div className="max-w-3xl mx-auto">
					<div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 animate-fade-in-up">
						<h2 className="text-3xl md:text-4xl font-bold text-center mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
							Contact Form
						</h2>
						<p className="text-gray-600 text-center mb-12">
							Fill out the form below and we&apos;ll get back to you
						</p>

						<form className="space-y-6" onSubmit={handleSubmit}>
							<div className="grid md:grid-cols-2 gap-6">
								{[
									{ name: 'name', type: 'text', placeholder: 'Name', icon: 'user', required: true },
									{ name: 'phone', type: 'tel', placeholder: 'Phone', icon: 'phone', required: true },
									{ name: 'email', type: 'email', placeholder: 'Email', icon: 'mail', required: true },
									{ name: 'city', type: 'text', placeholder: 'City', icon: 'map', required: false },
									{ name: 'company', type: 'text', placeholder: 'Company', icon: 'building', required: false },
									{ name: 'website', type: 'url', placeholder: 'Website', icon: 'globe', required: false },
								].map((field, index) => (
									<div key={field.name} className="relative group animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
										<div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-blue-600 transition-colors">
											<i className={`fas fa-${field.icon}`}></i>
										</div>
										<input
											type={field.type}
											name={field.name}
											placeholder={field.placeholder}
											required={field.required}
											className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
										/>
									</div>
								))}
							</div>

							{/* Consent Checkbox */}
							<div className="flex items-start space-x-3 animate-fade-in-up" style={{ animationDelay: '600ms' }}>
								<input
									type="checkbox"
									id="consent"
									checked={isConsentChecked}
									onChange={(e) => setIsConsentChecked(e.target.checked)}
									className="mt-1 h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500 transition-colors"
									required
								/>
								<label htmlFor="consent" className="text-sm text-gray-600">
									<span className="text-red-500">*</span> I consent to receive info about services from Call Eagle Digital.
								</label>
							</div>

							<button
								type="submit"
								disabled={isSubmitting}
								className={`w-full ${isSubmitting
									? 'bg-gray-400 cursor-not-allowed'
									: 'bg-gradient-to-r from-blue-600 to-purple-600 hover:translate-y-[-2px] hover:shadow-lg'
									} text-white py-4 rounded-lg font-semibold transform transition-all duration-300 animate-fade-in-up`}
								style={{ animationDelay: '700ms' }}
							>
								<span className="flex items-center justify-center gap-2">
									{isSubmitting ? 'Submitting...' : 'Submit'}
									{!isSubmitting && (
										<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
										</svg>
									)}
								</span>
							</button>
						</form>
					</div>
				</div>
			</div>
		</section>
	)
} 