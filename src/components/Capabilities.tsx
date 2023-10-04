import { SectionIntro } from "./SectionIntro"
import { Container } from "./Container"
import { FadeIn, FadeInStagger } from "./FadeIn"
import Image, { StaticImageData } from "next/image"

import imageSoftware from '@/images/icons/computer-2.png'
import imageCAD from '@/images/icons/objects-2.png'
import imageEngineering from '@/images/icons/wrench-2.png'
import imageElectronics from '@/images/icons/circuitboard-2.png'
import imagePrototyping from '@/images/icons/3d-printer-4.png'
import imageContent from '@/images/icons/camera-1.png'


const sections = [
  ["software", "Software Development", imageSoftware],
  ["cad", "CAD / Simulation / Assembly", imageCAD],
  ["engineering", "Engineering Design", imageEngineering],
  ["electronics", "Electronics", imageElectronics],
  ["prototyping", "Product Prototyping + Development", imagePrototyping],
  ["content", "Content Production", imageContent],
]

type SectionItem = [string, string];

type SectionItems = {
  [key: string]: SectionItem[];
}

const sectionItems: SectionItems = {
  software: [
    ["Cloud Infrastructure", "software"],
    ["Virtual Private Cloud", "software"],
    ["Mobile App Development", "software"],
    ["Web Development", "software"],
    ["Machine Learning", "software"],
    ["AI + LLM", "software"],
    ["AI Model Finetuning", "software"],
    ["UI / UX", "software"],
    ["C++", "software"],
    ["Python", "software"],
    ["Go", "software"],
    ["Javascript", "software"],
    ["Typescript", "software"],
    // Add other software items here...
  ],
  cad: [
    ["SolidWorks", "cad"],
    ["Fusion360", "cad"],
    ["AutoCAD", "cad"],
    ["OnShape", "cad"],
    ["Lumafield Atlas", "cad"],
    // Add other cad items here...
  ],
  engineering: [
    ["Reactor Design", "engineering"],
    ["Industrial Engineering", "engineering"],
    ["Plant Automation", "engineering"],
    ["Remote Plant Control", "engineering"],
    ["Robotics", "engineering"],
    ["Catalysis", "engineering"],
    ["Pharma Manufacturing", "engineering"],
    ["Cell Line Management", "engineering"],
    ["Serialization", "engineering"],
    ["Packaging", "engineering"],
    ["Fermentation", "engineering"],
    ["Hydroponics", "engineering"],
    // Add other engineering items here...
  ],
  electronics: [
    ["PCB Design", "electronics"],
    ["IC Design", "electronics"],
    ["Analog Sensors", "electronics"],
    ["Digital Sensors", "electronics"],
    ["PID Controllers", "electronics"],
    // Add other electronics items here...
  ],
  prototyping: [
    ["CNC Machining", "prototyping"],
    ["Wire EDM", "prototyping"],
    ["Injection Molding", "prototyping"],
    ["Plastic 3D Printing", "prototyping"],
    ["Metal 3D Printing", "prototyping"],
    ["Ceramic 3D Printing", "prototyping"],
    ["Silicone 3D Printing", "prototyping"],
    ["Glass 3D Printing", "prototyping"],
    ["Carbon Fiber 3D Printing", "prototyping"],
    ["Plasma Cutting", "prototyping"],
    ["Laser Cutting", "prototyping"],
    ["Waterjet Cutting", "prototyping"],
    ["Metal Casting", "prototyping"],
    ["Welding + Fabrication", "prototyping"],
    // Add other prototyping items here...
  ],
  content: [
    ["Video + Film Production", "content"],
    ["VFX + Compositing", "content"],
    ["Sound Design", "content"],
    ["Color Grading", "content"],
    ["Animation", "content"],
    ["Illustration", "content"],
    ["Copywriting", "content"],
    ["Davinci Resolve", "content"],
    ["Adobe Premiere Pro", "content"],
    ["Final Cut Pro", "content"],
    ["Adobe AfterEffects", "content"],
    ["Blender", "content"],
    // Add other content items here...
  ],
}

function SectionHeader({title, src}: {title: string, src: StaticImageData}) {
  return (
    <FadeIn className="relative">
      <div className="hidden absolute inset-0 sm:flex items-center" aria-hidden="true">
        <div className="w-full border-t border-gray-300 ml-28" />
      </div>
      <div className="relative flex justify-start items-center space-x-6">
        <Image className="bg-white" src={src} alt={title} width={80} height={80}/>
        <span className="bg-white pr-3 text-2xl font-display font-semibold leading-6 text-gray-900">{title}</span>
      </div>
    </FadeIn>
  )
}

export function Capabilities() {
  return (
    <>
      <SectionIntro
        title="Our Capabilities, Technologies, and Skills"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <div className="space-y-6">
          <p>
            We believe technology is the answer to the world’s greatest
            challenges. Our skills and access to cutting-edge techniques ensures that any challenge is surmountable.
          </p>
          <p>
            Take a look at some of our capabilities...
          </p>
        </div>
      </SectionIntro>

      <Container className="mt-16">
        <div className="space-y-24">
          {sections.map(([section, title, src]) => (
            <section key={section as string}>
              <SectionHeader title={title as string} src={src as StaticImageData}/>
              <FadeIn>
                <ul
                  role="list"
                  className="mt-4 sm:mt-12 ml-[6.5rem] sm:ml-[5.25rem] grid grid-cols-1 sm:grid-cols-4 gap-4 sm:gap-10 list-disc list-inside"
                >
                {sectionItems[section as string].map(([itemName, itemSection]: [string, string]) => (
                    <li key={itemName} >
                        {itemName}
                    </li>
                ))}
                </ul>
              </FadeIn>
            </section>
          ))}
        </div>
      </Container>
    </>
  )
}