import ContactForm from '@/components/ContactForm'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Process from '@/components/Process'
import Features from '@/components/Features'
import CallToAction from '@/components/CallToAction'
import Clients from '@/components/Clients'

export default function Home() {
	return (
		<main className="overflow-x-hidden">
			<Hero />
			<div className="relative bg-gray-50">
				<Services />
				<Process />
				<Features />
				<Clients />
			</div>
			<CallToAction />
			<ContactForm />
		</main>
	)
}
