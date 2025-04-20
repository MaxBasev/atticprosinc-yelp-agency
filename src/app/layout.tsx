import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from 'next/image';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Call Eagle Digital | Business Visibility Agency",
	description: "Data-driven, cost-efficient, and results-oriented — our advertising solutions help you attract qualified local leads and boost your brand presence.",
	keywords: "digital marketing, local business marketing, business visibility, lead generation, marketing agency",
	icons: {
		icon: '/images/eagle.ico',
	},
	openGraph: {
		title: "Call Eagle Digital | Business Visibility Agency",
		description: "Data-driven, cost-efficient, and results-oriented — our advertising solutions help you attract qualified local leads and boost your brand presence.",
		url: "https://calleagledigital.com",
		siteName: "Call Eagle Digital",
		images: [
			{
				url: "/images/og-image.jpg",
				width: 1200,
				height: 630,
				alt: "Call Eagle Digital Business Visibility Agency",
			},
		],
		locale: "en_US",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Call Eagle Digital | Business Visibility Agency",
		description: "Data-driven, cost-efficient, and results-oriented — our advertising solutions help you attract qualified local leads and boost your brand presence.",
		images: ["/images/twitter-image.jpg"],
		creator: "@calleagledigital",
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	verification: {
		google: "your-google-verification-code",
	},
};

function Footer() {
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

				<div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
					<div className="col-span-2 md:col-span-1">
						<h3 className="text-xl font-semibold mb-4">About Us</h3>
						<ul className="space-y-2">
							<li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Our Story</Link></li>
							<li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Team</Link></li>
							<li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Careers</Link></li>
						</ul>
					</div>
					<div className="col-span-2 md:col-span-1">
						<h3 className="text-xl font-semibold mb-4">Services</h3>
						<ul className="space-y-2">
							<li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Autoresponders</Link></li>
							<li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Virtual Assistants</Link></li>
							<li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Local Listings</Link></li>
						</ul>
					</div>
					<div className="col-span-2 md:col-span-1">
						<h3 className="text-xl font-semibold mb-4">Resources</h3>
						<ul className="space-y-2">
							<li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Blog</Link></li>
							<li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Guides</Link></li>
							<li><Link href="#" className="text-gray-400 hover:text-white transition-colors">FAQ</Link></li>
						</ul>
					</div>
					<div className="col-span-2 md:col-span-1">
						<h3 className="text-xl font-semibold mb-4">Contact</h3>
						<ul className="space-y-2">
							<li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Support</Link></li>
							<li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Sales</Link></li>
							<li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Partners</Link></li>
						</ul>
					</div>
					<div className="col-span-2 md:col-span-1">
						<h3 className="text-xl font-semibold mb-4">Legal & Privacy</h3>
						<ul className="space-y-2">
							<li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Terms</Link></li>
							<li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link></li>
							<li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Cookies</Link></li>
						</ul>
					</div>
				</div>

				<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-800">
					<p className="text-gray-500 text-sm">© 2025 Call Eagle Digital. All rights reserved.</p>
				</div>
			</div>
		</footer>
	);
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				{children}
				<Footer />
			</body>
		</html>
	);
}
