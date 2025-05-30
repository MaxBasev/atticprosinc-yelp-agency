import Link from "next/link";
import Image from 'next/image';

export default function Footer() {
	return (
		<footer className="bg-gray-900 text-white pt-16 pb-8">
			<div className="container mx-auto px-4">
				<div className="flex flex-col items-center mb-12">
					<Image
						src="/images/eagle_logo-trans.png"
						alt="Call Eagle Digital"
						width={80}
						height={80}
						className="mb-6 opacity-80"
					/>
					<h3 className="text-2xl font-bold text-white">Call Eagle Digital</h3>
				</div>

				<div className="flex flex-wrap -mx-4 mb-12">
					<div className="w-full md:w-1/4 px-4 mb-8 md:mb-0">
						<h3 className="text-xl font-semibold mb-4">About Us</h3>
						<ul className="space-y-2">
							<li><Link href="/about#story" className="text-gray-400 hover:text-white transition-colors">Our Story</Link></li>
							<li><Link href="/about#team" className="text-gray-400 hover:text-white transition-colors">Team</Link></li>
							<li><Link href="/about#careers" className="text-gray-400 hover:text-white transition-colors">Careers</Link></li>
						</ul>
					</div>
					<div className="w-full md:w-1/4 px-4 mb-8 md:mb-0">
						<h3 className="text-xl font-semibold mb-4">Services</h3>
						<ul className="space-y-2">
							<li><Link href="/services#autoresponders" className="text-gray-400 hover:text-white transition-colors">Autoresponders</Link></li>
							<li><Link href="/services#virtual-assistants" className="text-gray-400 hover:text-white transition-colors">Virtual Assistants</Link></li>
							<li><Link href="/services#local-listings" className="text-gray-400 hover:text-white transition-colors">Local Listings</Link></li>
						</ul>
					</div>
					<div className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
						<h3 className="text-xl font-semibold mb-4">Contact</h3>
						<ul className="space-y-2">
							<li className="text-gray-400">
								<span className="block">Phone: +1 (415) 555-0123</span>
							</li>
							<li className="text-gray-400">
								<span className="block">Email: hello@calleagledigital.com</span>
							</li>
							<li className="text-gray-400">
								<span className="block">Address: 548 Market St, San Francisco, CA 94104</span>
							</li>
						</ul>
					</div>
					<div className="w-full md:w-1/6 px-4">
						<h3 className="text-xl font-semibold mb-4">Legal & Privacy</h3>
						<ul className="space-y-2">
							<li><Link href="/terms" className="text-gray-400 hover:text-white transition-colors">Terms</Link></li>
							<li><Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link></li>
							<li><Link href="/cookies" className="text-gray-400 hover:text-white transition-colors">Cookies</Link></li>
						</ul>
					</div>
				</div>

				<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-800">
					<div className="mb-4 md:mb-0">
						<p className="text-gray-500 text-sm">© 2025 Call Eagle Digital. All rights reserved.</p>
						<p className="text-gray-500 text-sm italic mt-1">
							Applying for Yelp Advertising Partner certification — Spring 2025
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
} 	