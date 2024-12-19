import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Call Eagle Digital | Yelp Advertising Agency",
	description: "Transform your Yelp presence into a lead generation powerhouse. Expert Yelp advertising management to attract more customers and grow your business.",
	keywords: "yelp advertising, yelp marketing, yelp agency, yelp management, local business marketing",
	openGraph: {
		title: "Call Eagle Digital | Yelp Advertising Agency",
		description: "Transform your Yelp presence into a lead generation powerhouse. Expert Yelp advertising management to attract more customers and grow your business.",
		url: "https://calleagledigital.com",
		siteName: "Call Eagle Digital",
		images: [
			{
				url: "/images/og-image.jpg",
				width: 1200,
				height: 630,
				alt: "Call Eagle Digital Yelp Advertising Agency",
			},
		],
		locale: "en_US",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Call Eagle Digital | Yelp Advertising Agency",
		description: "Transform your Yelp presence into a lead generation powerhouse. Expert Yelp advertising management to attract more customers and grow your business.",
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

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body className={inter.className}>{children}</body>
		</html>
	);
}
