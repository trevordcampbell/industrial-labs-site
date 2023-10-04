import Image from 'next/image'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { Container } from './Container'
import Meteors from './magicui/meteors'

import imageAutomation from '@/images/icons/wrench-2.png'
import imageDesign from '@/images/icons/lightbulb-1.png'
import imageOptimization from '@/images/icons/mountain-1.png'
import imageAICircuit from '@/images/icons/ai-circuit-1.png'
import imageDigitalization from '@/images/icons/cloud-data-3.png'
import imageRegulation from '@/images/icons/regulation-1.png'


// export function WorkItems(){
//   return (
//     <section className="py-12 bg-neutral-950 sm:py-16 lg:py-20 xl:py-24">
//       <FadeIn>
//         <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">

//           <h2 className="text-white text-6xl text-center">Our Expertise</h2>
//           <div className="grid max-w-sm grid-cols-1 px-8 mx-auto text-center md:text-left gap-y-8 md:max-w-none md:mx-0 md:px-0 md:grid-cols-3">

//             <div className="lg:pr-20 md:pr-10">
//               <img className="w-auto mx-auto h-14 md:mx-0" src="https://landingfoliocom.imgix.net/store/collection/dusk/images/features/2/feature-1.png" alt="" />
//               <h3 className="mt-8 text-xl text-white">Create a free account without any credit card</h3>
//             </div>

//             <div className="w-48 h-px mx-auto bg-gray-900 md:hidden"></div>

//             <div className="md:border-gray-900 md:border-l md:px-10 lg:px-20">
//               <img className="w-auto mx-auto h-14 md:mx-0" src="https://landingfoliocom.imgix.net/store/collection/dusk/images/features/2/feature-2.png" alt="" />
//               <h3 className="mt-8 text-xl text-white">Assign new task and manage from a dashboard</h3>
//             </div>

//             <div className="w-48 h-px mx-auto bg-gray-900 md:hidden"></div>

//             <div className="md:border-gray-900 md:border-l md:pl-10 lg:pl-20">
//               <img className="w-auto mx-auto h-14 md:mx-0" src="https://landingfoliocom.imgix.net/store/collection/dusk/images/features/2/feature-3.png" alt="" />
//               <h3 className="mt-8 text-2xl font-display font-semibold text-white">Automation</h3>
//               <h3 className="mt-2 text-lg text-white">Build a sustainable business without extra investment</h3>
//             </div>

//             <div className="w-48 h-px mx-auto bg-gray-900 md:hidden"></div>

//             <div className="lg:pr-20 md:pr-10">
//               <img className="w-auto mx-auto h-14 md:mx-0" src="https://landingfoliocom.imgix.net/store/collection/dusk/images/features/2/feature-3.png" alt="" />
//               <h3 className="mt-8 text-2xl font-display font-semibold text-white">Automation</h3>
//               <h3 className="mt-2 text-lg text-white">Build a sustainable business without extra investment</h3>
//             </div>

//             <div className="w-48 h-px mx-auto bg-gray-900 md:hidden"></div>

//             <div className="md:border-gray-900 md:border-l md:pl-10 lg:pl-20">
//               <img className="w-auto mx-auto h-14 md:mx-0" src="https://landingfoliocom.imgix.net/store/collection/dusk/images/features/2/feature-3.png" alt="" />
//               <h3 className="mt-8 text-2xl font-display font-semibold text-white">Automation</h3>
//               <h3 className="mt-2 text-lg text-white">Build a sustainable business without extra investment</h3>
//             </div>

//             <div className="w-48 h-px mx-auto bg-gray-900 md:hidden"></div>

//             <div className="md:border-gray-900 md:border-l md:pl-10 lg:pl-20">
//               <img className="w-auto mx-auto h-14 md:mx-0" src="https://landingfoliocom.imgix.net/store/collection/dusk/images/features/2/feature-3.png" alt="" />
//               <h3 className="mt-8 text-2xl font-display font-semibold text-white">Automation</h3>
//               <h3 className="mt-2 text-lg text-white">Build a sustainable business without extra investment</h3>
//             </div>

//           </div>
//         </div>
//       </FadeIn>
//     </section>
//   )
// }

const items = [
  ['Workflow Automation', "Cut down time-intensive operations while improving accuracy, safety, reliability, and speed.", imageAutomation],
  ['Product Design + R&D', "Fill gaps and holes in your operations and processes with thoughtfully designed custom solutions.", imageDesign],
  ['Process Optimization', "Rethink each step in the process to generate greater yield, reduce waste, and save boatloads of cash.", imageOptimization],
  ['A.I. Integration', "Level up your factory and team with A.I. powered systems that work 24/7 to ensure optimal performance.", imageAICircuit],
  ['Data Digitalization', "Bring mission-critical processes and data to the cloud and connect manufacturing to every arm of the business.", imageDigitalization],
  ['Regulation Engineering', "Break down regulatory barriers and red-tape that stand between you and production through clever design.", imageRegulation],
]

export function WorkItems() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 lg:mt-56">
      <Container>
      <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
            Our Expertise
          </h2>
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-20 grid grid-cols-1 gap-x-16 gap-y-24 lg:grid-cols-3 mx-auto"
          >
            {items.map(([item, description, logo]) => (
              <li key={item as string}>
                <FadeIn>
                  <Image src={logo} width={100} height={100} alt={item as string} unoptimized />
                  <h3 className="mt-6 text-2xl font-display font-semibold text-white">{item as string}</h3>
                  <h3 className="text-lg text-neutral-400">{description as string}</h3>
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  )
}