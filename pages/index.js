/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head'
import Image from 'next/image'
/* This example requires Tailwind CSS v2.0+ */
import {
  GlobeAltIcon,
  LightningBoltIcon,
  ScaleIcon
} from '@heroicons/react/outline'
import Testimonials from '../components/Testimonials';
import Pricing from '../components/Pricing';
import Footer from '../components/Footer';
import About from '../components/About';
import Hero from '../components/Hero';


const features = [
  {
    name: 'Des professeurs certifiés',
    description: 'Tous nos professeurs sont minutieusement sélectionnés.',
    icon: GlobeAltIcon
  },
  {
    name: 'Un suivi régulier',
    description:
      "Nous vous procurons un rapport de progression de l'élève chaque semaine.",
    icon: ScaleIcon
  },
  {
    name: 'Des cours à distance',
    description:
      'Nos cours sont à distance pour plus de flexibilité pour les parents et nos élèves.',
    icon: LightningBoltIcon
  }
  // {
  //   name: 'Mobile notifications',
  //   description:
  //     'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
  //   icon: AnnotationIcon
  // }
]

export default function Example () {
  return (
    <>
      <Hero/>
      <div className='py-12 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='lg:text-center'>
            <h2 className='text-base text-indigo-600 font-semibold tracking-wide uppercase'>
              Cours à distance du CP à la Terminale
            </h2>
            <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
              Une nouvelle façon d'étudier
            </p>
            <p className='mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto'>
              Gagnez du temps, étudiez depuis votre domicile tout en ayant accès
              aux meilleurs professeurs de France.
            </p>
          </div>

          <div className='mt-10'>
            <dl className='space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10'>
              {features.map(feature => (
                <div key={feature.name} className='relative'>
                  <dt>
                    <div className='absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white'>
                      <feature.icon className='h-6 w-6' aria-hidden='true' />
                    </div>
                    <p className='ml-16 text-lg leading-6 font-medium text-gray-900'>
                      {feature.name}
                    </p>
                  </dt>
                  <dd className='mt-2 ml-16 text-base text-gray-500'>
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      <div className='bg-indigo-600 container mx-auto px-6 py-6 rounded-md'>
        <h2 className='text-base text-white font-semibold tracking-wide font-medium'>
          L'an dernier, nos élèves ont gagné 4 points en moyenne. Et ce n’est
          que le début !
        </h2>
        <p className='text-white text-opacity-75 my-5'>
          88% de nos élèves disent que Prepacours leur a permis d’augmenté leur
          confiance en eux en cours. Ils participent, posent plus de questions,
          et apprécient davantage leurs études. Sur plus de 400 élèves, 97%
          des parents ont donné la note de satisfaction maximale à Prepacours
        </p>
        <div className='md:flex md:justify-center'>
          <a href="https://calendly.com/contact-prepacours/15min">
            <button className='inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-white'>Réserver un cours gratuit</button>
          </a>
        </div>
      </div>
      <Pricing/>
      <Testimonials/>
      <Footer/>
    </>
  )
}
