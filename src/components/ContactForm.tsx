'use client';

import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline';

export default function ContactForm() {
	const contactInfo = [
		{
			icon: PhoneIcon,
			label: "Phone",
			value: "+1 (415) 555-0123",
			href: "tel:+14155550123"
		},
		{
			icon: EnvelopeIcon,
			label: "Email",
			value: "hello@calleagledigital.com",
			href: "mailto:hello@calleagledigital.com"
		},
		{
			icon: MapPinIcon,
			label: "Address",
			value: "548 Market St, San Francisco, CA",
			href: "https://maps.google.com/?q=548+Market+St,+San+Francisco,+CA"
		}
	];

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
							Contact Us
						</h2>
						<p className="text-gray-600 text-center mb-12">
							Get in touch with us through any of these channels
						</p>

						<div className="grid md:grid-cols-3 gap-8">
							{contactInfo.map((contact, index) => (
								<a
									key={index}
									href={contact.href}
									className="group flex flex-col items-center p-6 rounded-xl hover:bg-gray-50 transition-all duration-300"
									target={contact.icon === MapPinIcon ? "_blank" : undefined}
									rel={contact.icon === MapPinIcon ? "noopener noreferrer" : undefined}
								>
									<div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
										<contact.icon className="w-6 h-6 text-blue-600" />
									</div>
									<h3 className="text-lg font-semibold text-gray-900 mb-2">
										{contact.label}
									</h3>
									<p className="text-gray-600 text-center group-hover:text-blue-600 transition-colors">
										{contact.value}
									</p>
								</a>
							))}
						</div>

						<div className="mt-12 pt-12 border-t border-gray-100">
							<p className="text-center text-gray-500">
								Business hours: Monday - Friday, 9:00 AM - 6:00 PM
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
} 