import ContactForm from '@/components/ContactForm'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Process from '@/components/Process'
import Features from '@/components/Features'
import CallToAction from '@/components/CallToAction'

export default function Home() {
	return (
		<main className="overflow-x-hidden">
			<Hero />
			<Services />
			<Process />
			<Features />
			<CallToAction />
			<ContactForm />
		</main>
	)
}
