import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { Testimonial } from '@/components/Testimonial'
import logoBrightPath from '@/images/clients/bright-path/logo-light.svg'
import logoFamilyFund from '@/images/clients/family-fund/logo-light.svg'
import logoGreenLife from '@/images/clients/green-life/logo-light.svg'
import logoHomeWork from '@/images/clients/home-work/logo-light.svg'
import logoMailSmirk from '@/images/clients/mail-smirk/logo-light.svg'
import logoNorthAdventures from '@/images/clients/north-adventures/logo-light.svg'
import logoPhobiaDark from '@/images/clients/phobia/logo-dark.svg'
import logoPhobiaLight from '@/images/clients/phobia/logo-light.svg'
import logoUnseal from '@/images/clients/unseal/logo-light.svg'
import imageLaptop from '@/images/laptop.jpg'
import { type CaseStudy, type MDXEntry, loadCaseStudies } from '@/lib/mdx'
import { WorkItems } from '@/components/WorkItems'
import {
  MagicCardWithGradient
} from "@/components/magicui/magic-card";

import imageSoftware from '@/images/icons/computer-2.png'
import imageElectronics from '@/images/icons/circuitboard-3.png'
import imageChemical from '@/images/icons/chemical-factory-1.png'
import imagePharma from '@/images/icons/pill-1.png'
import imageAerospace from '@/images/icons/jet-1.png'
import imageAgriculture from '@/images/icons/plant-1.png'
import imageMedicalDevice from '@/images/icons/medical-device-1.png'
import imageAutomotive from '@/images/icons/car-2.png'
import imageRobotics from '@/images/icons/robot-hand-1.png'



const clients = [
  ['Phobia', logoPhobiaLight],
  ['Family Fund', logoFamilyFund],
  ['Unseal', logoUnseal],
  ['Mail Smirk', logoMailSmirk],
  ['Home Work', logoHomeWork],
  ['Green Life', logoGreenLife],
  ['Bright Path', logoBrightPath],
  ['North Adventures', logoNorthAdventures],
]

function Clients() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
            We’ve worked with hundreds of amazing people
          </h2>
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4"
          >
            {clients.map(([client, logo]) => (
              <li key={client}>
                <FadeIn>
                  <Image src={logo} alt={client} unoptimized />
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  )
}

function CaseStudies({
  caseStudies,
}: {
  caseStudies: Array<MDXEntry<CaseStudy>>
}) {
  return (
    <>
      <SectionIntro
        title="Harnessing technology for a brighter future"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          We believe technology is the answer to the world’s greatest
          challenges. It’s also the cause, so we find ourselves in bit of a
          catch 22 situation.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {caseStudies.map((caseStudy) => (
            <FadeIn key={caseStudy.href} className="flex">
              <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                <h3>
                  <Link href={caseStudy.href}>
                    <span className="absolute inset-0 rounded-3xl" />
                    <Image
                      src={caseStudy.logo}
                      alt={caseStudy.client}
                      className="h-16 w-16"
                      unoptimized
                    />
                  </Link>
                </h3>
                <p className="mt-6 flex gap-x-2 text-sm text-neutral-950">
                  <time
                    dateTime={caseStudy.date.split('-')[0]}
                    className="font-semibold"
                  >
                    {caseStudy.date.split('-')[0]}
                  </time>
                  <span className="text-neutral-300" aria-hidden="true">
                    /
                  </span>
                  <span>Case study</span>
                </p>
                <p className="mt-6 font-display text-2xl font-semibold text-neutral-950">
                  {caseStudy.title}
                </p>
                <p className="mt-4 text-base text-neutral-600">
                  {caseStudy.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </>
  )
}

function Services() {

  const listItems = [
    ["Software Development & Integration", "Our software engineering team is adept at developing robust applications and platforms tailored to the unique demands of the industrial sector. We understand the intricacies of integrating software with existing infrastructure.", imageSoftware],
    ["Electronics & Embedded Systems", "We specialize in creating intelligent hardware solutions that power the devices of tomorrow. From microcontrollers to complex sensor arrays, we excel in designing systems that drive innovation.", imageElectronics],
    ["Chemical & Process Engineering", "We work closely with chemical manufacturers to optimize processes, improve yields, and ensure safety and compliance. Our solutions are engineered to enhance efficiency and reduce environmental impact.", imageChemical],
    ["Pharma & Biotech Solutions", "In the highly regulated world of pharmaceuticals, we offer expertise in developing specialized equipment and systems that meet stringent quality and compliance standards.", imagePharma],
    ["Aerospace & Defense Technologies", "Our team is skilled in developing solutions that meet the rigorous demands of aerospace and defense applications, from avionics to mission-critical software.", imageAerospace],
    ["Agricultural Innovations", "We leverage technology to optimize agricultural processes, improve crop yields, and develop sustainable practices for the future of farming.", imageAgriculture],
    ["Medical Devices & Healthcare", "We rigorously ensure ultra-high reliability for precise diagnostic tools and devices, while crafting patient-centric experiences.", imageMedicalDevice],
    ["Automotive", "We rigorously ensure ultra-high reliability for precise diagnostic tools and devices, while crafting patient-centric experiences.", imageAutomotive],
    ["Robotics", "We rigorously ensure ultra-high reliability for precise diagnostic tools and devices, while crafting patient-centric experiences.", imageRobotics],
  ]

  return (
    <>
      <SectionIntro
        eyebrow="Services"
        title="We help you identify, explore and respond to new opportunities."
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          As long as those opportunities involve giving us money to re-purpose
          old projects — we can come up with an endless number of those.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeIn>
          <ul
            role="list"
            className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-16"
          >
            {listItems.map(([title, description, logo]) => (
              <li key={title as string}>
                <FadeIn className="flex mt-8 place-items-start space-x-6">
                  <Image src={logo} width={80} height={80} alt={title as string} unoptimized />
                  <h4 className="text-base text-neutral-600"><span className="text-neutral-950 text-lg font-semibold mr-2">{title as string}: </span>{description as string}</h4>
                </FadeIn>
              </li>
            ))}

          </ul>
        </FadeIn>
      </Container>
    </>
  )
}

export const metadata: Metadata = {
  description:
    'We are a technology development lab & consulting firm at the intersection of atoms and bits.',
}

export default async function Home() {
  let caseStudies = (await loadCaseStudies()).slice(0, 3)

  return (
    <>
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display max-w-2xl text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
            World-class <span className="text-transparent bg-clip-text bg-gradient-to-tr from-red-500 to-amber-500">industrial innovation</span> firm based in Boston.
          </h1>
          <p className="max-w-3xl mt-6 text-xl text-neutral-600">
            We are a technology development lab & consulting firm at the intersection of atoms and bits. We create software, hardware, and operational excellence with the world's most forward-thinking manufacturing, industrial, and hardtech companies.
          </p>
        </FadeIn>
      </Container>

      {/* <Clients /> */}

      <WorkItems />

      {/* <CaseStudies caseStudies={caseStudies} /> */}

      <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: 'Phobia', logo: logoPhobiaDark }}
      >
        The Catalyst team went above and beyond with our project. They helped shave 4 months off our production timeline and reduced the cost of implementation by $30M. Their team is something very rare!
      </Testimonial>

      <Services />

      <ContactSection />
    </>
  )
}
