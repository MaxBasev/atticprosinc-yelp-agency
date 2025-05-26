'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
			<div className="container mx-auto px-4">
				<div className="flex items-center justify-between py-4">
					{/* Logo */}
					<Link href="/" className="flex items-center space-x-3">
						<Image
							src="/images/eagle_logo-trans.png"
							alt="Call Eagle Digital"
							width={40}
							height={40}
							className="w-10 h-10"
						/>
						<span className="text-xl font-bold text-gray-900">Call Eagle Digital</span>
					</Link>

					{/* Desktop Navigation */}
					<nav className="hidden md:flex items-center space-x-8">
						<Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">
							Home
						</Link>
						<Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors">
							About Us
						</Link>
						<Link href="/services" className="text-gray-700 hover:text-blue-600 transition-colors">
							Services
						</Link>
						<Link href="/portfolio" className="text-gray-700 hover:text-blue-600 transition-colors">
							Portfolio
						</Link>
						<Link href="/blog" className="text-gray-700 hover:text-blue-600 transition-colors">
							Blog
						</Link>
						<Link href="/#contact" className="text-gray-700 hover:text-blue-600 transition-colors">
							Contact
						</Link>
					</nav>

					{/* CTA Button */}
					<div className="hidden md:block">
						<Link
							href="/#contact"
							className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition-all transform hover:scale-105"
						>
							Get Started
						</Link>
					</div>

					{/* Mobile Menu Button */}
					<button
						onClick={() => setIsMenuOpen(!isMenuOpen)}
						className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1"
					>
						<span className={`w-6 h-0.5 bg-gray-600 transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
						<span className={`w-6 h-0.5 bg-gray-600 transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
						<span className={`w-6 h-0.5 bg-gray-600 transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
					</button>
				</div>

				{/* Mobile Menu */}
				{isMenuOpen && (
					<div className="md:hidden border-t border-gray-100 py-4">
						<nav className="flex flex-col space-y-4">
							<Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors py-2">
								Home
							</Link>
							<Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors py-2">
								About Us
							</Link>
							<Link href="/services" className="text-gray-700 hover:text-blue-600 transition-colors py-2">
								Services
							</Link>
							<Link href="/portfolio" className="text-gray-700 hover:text-blue-600 transition-colors py-2">
								Portfolio
							</Link>
							<Link href="/blog" className="text-gray-700 hover:text-blue-600 transition-colors py-2">
								Blog
							</Link>
							<Link href="/#contact" className="text-gray-700 hover:text-blue-600 transition-colors py-2">
								Contact
							</Link>
							<Link
								href="/#contact"
								className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition-all text-center mt-4"
							>
								Get Started
							</Link>
						</nav>
					</div>
				)}
			</div>
		</header>
	);
} 