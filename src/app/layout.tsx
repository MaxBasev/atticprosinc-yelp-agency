import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Script from "next/script";

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

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Script
					id="organization-schema"
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify(organizationSchema),
					}}
				/>
				<Header />
				<main className="pt-20">
					{children}
				</main>
				<Footer />
			</body>
		</html>
	);
}
