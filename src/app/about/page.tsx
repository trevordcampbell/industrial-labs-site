import { type Metadata } from 'next'
import Image from 'next/image'

import { Border } from '@/components/Border'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { PageIntro } from '@/components/PageIntro'
import { PageLinks } from '@/components/PageLinks'
import { SectionIntro } from '@/components/SectionIntro'
import { StatList, StatListItem } from '@/components/StatList'
import imageAngelaFisher from '@/images/team/angela-fisher.jpg'
import imageBenjaminRussel from '@/images/team/benjamin-russel.jpg'
import imageBlakeReid from '@/images/team/blake-reid.jpg'
import imageChelseaHagon from '@/images/team/chelsea-hagon.jpg'
import imageDriesVincent from '@/images/team/dries-vincent.jpg'
import imageEmmaDorsey from '@/images/team/emma-dorsey.jpg'
import imageJeffreyWebb from '@/images/team/jeffrey-webb.jpg'
import imageKathrynMurphy from '@/images/team/kathryn-murphy.jpg'
import imageLeonardKrasner from '@/images/team/leonard-krasner.jpg'
import imageLeslieAlexander from '@/images/team/leslie-alexander.jpg'
import imageMichaelFoster from '@/images/team/michael-foster.jpg'
import imageWhitneyFrancis from '@/images/team/whitney-francis.jpg'
import { loadArticles } from '@/lib/mdx'
import { Capabilities } from '@/components/Capabilities'

function Culture() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="Our culture"
        title="Revolutionize industrial process through deeptech innovation"
        invert
      >
        <p>
          The intersection of software and hardware holds the key to unlocking new levels of efficiency, sustainability, and profitability for businesses in traditionally complex industries.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Outsized Results" invert>
            We strive to deliver tailored, state-of-the-art solutions that not only meet our clients' needs but exceed their expectations.
          </GridListItem>
          <GridListItem title="Expertise and Experience" invert>
            We search for simple and easy solutions first. Our goal is to help you operationalize as fast as possible — without breaking the bank.
          </GridListItem>
          <GridListItem title="Teamwork + Grit = Victory" invert>
            Never wonder about the status of a project ever again: our team works hand-in-hand with yours even after the project is completed.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

const team = [
  // {
  //   title: 'Leadership',
  //   people: [
  //     {
  //       name: 'Leslie Alexander',
  //       role: 'Co-Founder / CEO',
  //       image: { src: imageLeslieAlexander },
  //     },
  //     {
  //       name: 'Michael Foster',
  //       role: 'Co-Founder / CTO',
  //       image: { src: imageMichaelFoster },
  //     },
  //     {
  //       name: 'Dries Vincent',
  //       role: 'Partner & Business Relations',
  //       image: { src: imageDriesVincent },
  //     },
  //   ],
  // },
  {
    title: 'Team',
    people: [
      {
        name: 'Trevor Campbell',
        role: 'President, Engineering Lead',
        image: { src: imageChelseaHagon },
      },
      {
        name: 'Benjamin Russel',
        role: 'Hardware Lead',
        image: { src: imageBenjaminRussel },
      },
      {
        name: 'Kathryn Murphy',
        role: 'Software Lead',
        image: { src: imageKathrynMurphy },
      },
      {
        name: 'Leonard Krasner',
        role: 'Robotics Lead',
        image: { src: imageLeonardKrasner },
      },
    ],
  },
]

function Team() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <div className="space-y-24">
        {team.map((group) => (
          <FadeInStagger key={group.title}>
            <Border as={FadeIn} />
            <div className="grid grid-cols-1 gap-6 pt-12 sm:pt-16 lg:grid-cols-4 xl:gap-8">
              <FadeIn>
                <h2 className="font-display text-2xl font-semibold text-neutral-950">
                  {group.title}
                </h2>
              </FadeIn>
              <div className="lg:col-span-3">
                <ul
                  role="list"
                  className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8"
                >
                  {group.people.map((person) => (
                    <li key={person.name}>
                      <FadeIn>
                        <div className="group relative overflow-hidden rounded-3xl bg-neutral-100">
                          <Image
                            alt=""
                            {...person.image}
                            className="h-96 w-full object-cover grayscale transition duration-500 motion-safe:group-hover:scale-105"
                          />
                          <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black to-black/0 to-40% p-6">
                            <p className="font-display text-base/6 font-semibold tracking-wide text-white">
                              {person.name}
                            </p>
                            <p className="mt-2 text-sm text-white">
                              {person.role}
                            </p>
                          </div>
                        </div>
                      </FadeIn>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeInStagger>
        ))}
      </div>
    </Container>
  )
}

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'We believe that our strength lies in our collaborative approach, which puts our clients at the center of everything we do.',
}

export default async function About() {
  let blogArticles = (await loadArticles()).slice(0, 2)

  return (
    <>
      <PageIntro eyebrow="About us" title="Our strength is collaboration">
        <p>
          <span className="text-transparent font-semibold bg-clip-text bg-gradient-to-tr from-red-500 to-amber-500">You and your needs</span> are at the center of everything we do.
        </p>
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>
            With a multidisciplinary team of experts, we specialize in creating cutting-edge software and hardware solutions that level-up companies across a wide range of domains like Manufacturing, Heavy Industry, Automotive, Electronics Devices, Chemical Manufacturing, Oil & Gas, Energy Production & Storage, Pharmaceuticals, Biotech, Shipping and Logistics, Aerospace, Defense, Agriculture, and more.
          </p>
          <p>
            From pioneering automation solutions to developing breakthrough materials, we are committed to delivering results that make a meaningful impact on your operations and the industries you serve.
          </p>
        </div>
      </PageIntro>
      <Container className="mt-16">
        <StatList>
          <StatListItem value="35" label="Projects Completed" />
          <StatListItem value="12" label="Clients Partnered" />
          <StatListItem value="$175M" label="In Cost Reductions" />
        </StatList>
      </Container>

      <Culture />

      <Capabilities />

      <Team />

      {/* <PageLinks
        className="mt-24 sm:mt-32 lg:mt-40"
        title="From the blog"
        intro="Our team of experienced designers and developers has just one thing on their mind; working on your ideas to draw a smile on the face of your users worldwide. From conducting Brand Sprints to UX Design."
        pages={blogArticles}
      /> */}

      <ContactSection />
    </>
  )
}
