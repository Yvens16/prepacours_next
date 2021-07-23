/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import BookSection from '../../components/bookSection'
/* This example requires Tailwind CSS v2.0+ */
import {
  GlobeAltIcon,
  LightningBoltIcon,
  ScaleIcon,
  DesktopComputerIcon,
  AcademicCapIcon,
  ClockIcon,
  UserGroupIcon,
  BookOpenIcon,
  MailIcon,
  TrendingUpIcon,
  DocumentSearchIcon
} from '@heroicons/react/outline'
import Testimonials from '../../components/Testimonials'
import Pricing from '../../components/Pricing'
import Footer from '../../components/Footer'
import About from '../../components/About'
import Hero from '../../components/Hero'
import classeJson from '../../data/classe.json'

const features = [
  {
    name: 'Des professeurs certifiés',
    description: 'Tous nos professeurs sont minutieusement sélectionnés.',
    icon: AcademicCapIcon
  },
  {
    name: 'Un suivi régulier',
    description:
      "Nous vous procurons un rapport de progression de l'élève chaque semaine.",
    icon: ClockIcon
  },
  {
    name: 'Des cours à distance',
    description:
      'Nos cours sont à distance pour plus de flexibilité pour les parents et nos élèves.',
    icon: DesktopComputerIcon
  },
  {
    name: "Groupe d'entraide",
    description:
      "Nous mettons en place un groupe d'entraide pour que les élèves puissent s'aider 24h/24.",
    icon: UserGroupIcon
  },
  {
    name: "Un cahier de leçon offert",
    description:
      "Un cahier de leçon et d'exercice vous est offert pour avoir la meilleure préparation possible. (Format prépabac)",
    icon: BookOpenIcon
  },
  {
    name: "En cas d'abscence",
    description:
      "Recevez un sms dans la minute pour vous prévenir de l'absence de l'élève, personne ne fait l'école buissonnière.",
    icon: MailIcon
  },
  {
    name: "Un rapport de progrès",
    description:
      "Nous suivons l'évolution l'élève au fil des mois et nous fournissons un rapport détaillé aux parents.",
    icon: TrendingUpIcon
  },
  {
    name: "Un suivi des examen",
    description:
      "Nous suivons de très près le résultat des examens et fournissons une explication détaillée de ses faiblesses.",
    icon: DocumentSearchIcon
  },
  // {
  //   name: 'Mobile notifications',
  //   description:
  //     'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
  //   icon: AnnotationIcon
  // }
]
export async function getServerSideProps(context) {
  return {
      props: {},
  };
}

export default function Example () {
  const router = useRouter()
  const { pid } = router.query
  console.log('####pid:', pid)
  return (
    <>
      <Hero group={true} classes={classeJson} />
      <div className='py-12 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='lg:text-center'>
            <h2 className='text-base text-indigo-600 font-semibold tracking-wide uppercase'>
              Cours à distance de la 6ème à la Terminale
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
      <BookSection classes={classeJson}/>

      <div className='bg-indigo-600 container mx-auto px-6 py-6 rounded-md'>
        <h2 className='text-base text-white font-semibold tracking-wide font-medium'>
          L'an dernier, nos élèves ont gagné 4 points en moyenne. Et ce n’est
          que le début !
        </h2>
        <p className='text-white text-opacity-75 my-5'>
          88% de nos élèves disent que Prepacours leur a permis d’augmenté leur
          confiance en eux en cours. Ils participent, posent plus de questions,
          et apprécient davantage leurs études. Sur plus de 400 élèves, 97% des
          parents ont donné la note de satisfaction maximale à Prepacours
        </p>
        <div className='md:flex md:justify-center'>
          <a href='https://calendly.com/contact-prepacours/15min'>
            <button className='inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-white'>
              Réserver un cours gratuit
            </button>
          </a>
        </div>
      </div>
      <div className='container mx-auto pt-16'>
        <div className='w-4/5 mx-auto pb-12'>
          <h1 className='xl:text-4xl text-3xl text-center text-gray-800 mb-4 font-extrabold'>
            Une tarification claire et simple
          </h1>
          <p className='text-xl text-center text-gray-600 leading-normal'>
            Découvrez nos formules de cours particuliers pour choisir
            l&apos;accompagnement qui vous ressemble
          </p>
        </div>
        <div className='flex flex-wrap justify-between'>
          <div className='w-11/12 xl:w-1/3 lg:w-1/2 sm:w-5/12 md:w-5/12 mx-auto mb-4 max-w-sm shadow rounded-lg border border-gray-300 sm:border-none bg-white'>
            <div className='pt-8 px-8 pb-6'>
              <h4 className='text-2xl text-center text-gray-800 pb-3 font-bold'>
                Pour les plus déterminés
              </h4>
              <p className='text-lg text-center text-gray-600 pb-5 leading-normal px-10'>
                Offre Valable jusqu'au{' '}
                <span className='text-indigo-700 font-bold'>
                  24 septembre 2021
                </span>
              </p>
              <p className='text-base text-center text-gray-600 font-bold'>
                <span className='text-4xl text-red-700 font-medium px-2 line-through'>
                  {classeJson[pid]['prix']} €
                </span>{' '}
                <br />
                <span className='text-4xl text-indigo-700 font-medium px-2'>
                  {classeJson[pid]['earlybirds']} €
                </span>
                /heure
                <br />
                Soit
                <span className='text-4xl text-indigo-700 font-medium px-2'>
                  {classeJson[pid]['earlybirds'] * 20} €
                </span>
                /mois
              </p>
            </div>
            {/* <div
            className='flex justify-between pl-12 pr-12 pt-4 pb-4 bg-gray-100'
            role='button'
          >
            <p className='text-base text-gray-600 font-bold'>Annual Billing</p>
            <div className='cursor-pointer w-12 h-6 rounded-full bg-indigo-700 relative shadow-sm'>
              <input
                type='checkbox'
                name='toggle'
                id='toggle'
                className='focus:outline-none checkbox w-4 h-4 rounded-full bg-white absolute m-1 shadow-sm appearance-none cursor-pointer'
              />
              <label
                htmlFor='toggle'
                className='toggle-label bg-gray-200 block w-12 h-6 overflow-hidden rounded-full bg-gray-300 cursor-pointer'
              />
            </div>
          </div> */}
            {/* <div className='pt-6 pr-8 pl-8'>
            <ul className='flex flex-col items-center'>
              <li className='flex items-center mb-8'>
                <div className='h-1 w-1 rounded-full bg-indigo-700' />
                <p className='pl-2 text-gray-600 text-base'>
                  Demo features 1 for plan
                </p>
              </li>
              <li className='flex items-center mb-8'>
                <div className='h-1 w-1 rounded-full bg-indigo-700' />
                <p className='pl-2 text-gray-600 text-base'>
                  Demo features 1 for plan
                </p>
              </li>
              <li className='flex items-center mb-8'>
                <div className='h-1 w-1 rounded-full bg-indigo-700' />
                <p className='pl-2 text-gray-600 text-base'>
                  Demo features 1 for plan
                </p>
              </li>
              <li className='flex items-center mb-8'>
                <div className='h-1 w-1 rounded-full bg-indigo-700' />
                <p className='pl-2 text-gray-600 text-base'>
                  Demo features 1 for plan
                </p>
              </li>
              <li className='flex items-center mb-8'>
                <div className='h-1 w-1 rounded-full bg-indigo-700' />
                <p className='pl-2 text-gray-600 text-base'>
                  Demo features 1 for plan
                </p>
              </li>
            </ul>
          </div> */}
            <div className='flex justify-center pb-8'>
              <a href='https://calendly.com/contact-prepacours/15min'>
                <button className='focus:outline-none bg-white hover:bg-gray-100 transition duration-150 ease-in-out hover:border-indigo-700 hover:text-indigo-600 rounded border border-indigo-600 text-indigo-600 px-6 py-2 text-sm'>
                  Prendre rdv avec un conseiller
                </button>
              </a>
            </div>
          </div>
          <div className='w-11/12 xl:w-1/3 lg:w-1/2 sm:w-5/12 md:w-5/12 mx-auto mb-4 max-w-sm shadow rounded-lg border-4 border-indigo-700 bg-white'>
            <div className='pt-8 px-8 pb-6'>
              <h4 className='text-2xl text-center text-gray-800 pb-3 font-bold'>
                Pack régularité
              </h4>
              <p className='text-sm text-center text-gray-600 pb-5 leading-normal px-10'>
                1h de cours tous les jour après l&apos;école
              </p>
              <p className='text-base text-center text-gray-600 font-bold'>
                {/* <span className='text-4xl text-red-700 font-medium px-2 line-through'>
                {classeJson[pid]['prix']} €
              </span>{' '} */}
                <span className='text-4xl text-indigo-700 font-medium px-2'>
                  {classeJson[pid]['prix']} €
                </span>
                /heure
                <br />
                Soit
                <span className='text-4xl text-indigo-700 font-medium px-2'>
                  {classeJson[pid]['prix'] * 20} €
                </span>
                /mois
              </p>
              {/* <p className='text-sm text-center text-gray-600 pb-5 leading-normal px-10'>
              Après crédits d&apos;impôts
            </p> */}
            </div>
            {/* <div className='flex justify-between pl-12 pr-12 pt-4 pb-4 bg-gray-100'>
            <p className='text-base text-gray-600 font-bold'>Annual Billing</p>
            <div className='cursor-pointer w-12 h-6 rounded-full bg-indigo-700 relative shadow-sm'>
              <input
                defaultChecked
                type='checkbox'
                name='toggle'
                id='toggle1'
                className='focus:outline-none checkbox w-4 h-4 rounded-full bg-white absolute m-1 shadow-sm appearance-none cursor-pointer'
              />
              <label
                htmlFor='toggle1'
                className='toggle-label bg-gray-200 block w-12 h-6 overflow-hidden rounded-full bg-gray-300 cursor-pointer'
              />
            </div>
          </div> */}
            {/* <div className='pt-6 pr-8 pl-8'>
            <ul className='flex flex-col items-center'>
              <li className='flex items-center mb-8'>
                <div className='h-1 w-1 rounded-full bg-indigo-700' />
                <p className='pl-2 text-gray-600 text-base'>
                  Demo features 1 for plan
                </p>
              </li>
              <li className='flex items-center mb-8'>
                <div className='h-1 w-1 rounded-full bg-indigo-700' />
                <p className='pl-2 text-gray-600 text-base'>
                  Demo features 1 for plan
                </p>
              </li>
              <li className='flex items-center mb-8'>
                <div className='h-1 w-1 rounded-full bg-indigo-700' />
                <p className='pl-2 text-gray-600 text-base'>
                  Demo features 1 for plan
                </p>
              </li>
              <li className='flex items-center mb-8'>
                <div className='h-1 w-1 rounded-full bg-indigo-700' />
                <p className='pl-2 text-gray-600 text-base'>
                  Demo features 1 for plan
                </p>
              </li>
              <li className='flex items-center mb-8'>
                <div className='h-1 w-1 rounded-full bg-indigo-700' />
                <p className='pl-2 text-gray-600 text-base'>
                  Demo features 1 for plan
                </p>
              </li>
            </ul>
          </div> */}
            <div className='flex justify-center pb-8'>
              <a href='https://calendly.com/contact-prepacours/15min'>
                <button className='focus:outline-none bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-6 py-2 text-sm'>
                  Prendre rdv avec un conseiller
                </button>
              </a>
            </div>
          </div>
          {/* <div className='w-11/12 xl:w-1/3 lg:w-1/2 sm:w-5/12 md:w-5/12 mx-auto mb-4 max-w-sm shadow rounded-lg border border-gray-300 sm:border-none bg-white'>
          <div className='pt-8 px-8 pb-6'>
            <h4 className='text-2xl text-center text-gray-800 pb-3 font-bold'>
              Enterprise
            </h4>
            <p className='text-sm text-center text-gray-600 pb-5 leading-normal px-10'>
              Support multi-complex sites and high-resolution photos and videos.
            </p>
            <p className='text-base text-center text-gray-600 font-bold'>
              ${' '}
              <span className='text-4xl text-indigo-700 font-medium px-2'>
                90
              </span>
              /mo
            </p>
          </div>
          <div className='flex justify-between pl-12 pr-12 pt-4 pb-4 bg-gray-100'>
            <p className='text-base text-gray-600 font-bold'>Annual Billing</p>
            <div className='cursor-pointer w-12 h-6 rounded-full bg-indigo-700 relative shadow-sm'>
              <input
                type='checkbox'
                name='toggle'
                id='toggle2'
                className='focus:outline-none checkbox w-4 h-4 rounded-full bg-white absolute m-1 shadow-sm appearance-none cursor-pointer'
              />
              <label
                htmlFor='toggle2'
                className='toggle-label bg-gray-200 block w-12 h-6 overflow-hidden rounded-full bg-gray-300 cursor-pointer'
              />
            </div>
          </div>
          <div className='pt-6 pr-8 pl-8'>
            <ul className='flex flex-col items-center'>
              <li className='flex items-center mb-8'>
                <div className='h-1 w-1 rounded-full bg-indigo-700' />
                <p className='pl-2 text-gray-600 text-base'>
                  Demo features 1 for plan
                </p>
              </li>
              <li className='flex items-center mb-8'>
                <div className='h-1 w-1 rounded-full bg-indigo-700' />
                <p className='pl-2 text-gray-600 text-base'>
                  Demo features 1 for plan
                </p>
              </li>
              <li className='flex items-center mb-8'>
                <div className='h-1 w-1 rounded-full bg-indigo-700' />
                <p className='pl-2 text-gray-600 text-base'>
                  Demo features 1 for plan
                </p>
              </li>
              <li className='flex items-center mb-8'>
                <div className='h-1 w-1 rounded-full bg-indigo-700' />
                <p className='pl-2 text-gray-600 text-base'>
                  Demo features 1 for plan
                </p>
              </li>
              <li className='flex items-center mb-8'>
                <div className='h-1 w-1 rounded-full bg-indigo-700' />
                <p className='pl-2 text-gray-600 text-base'>
                  Demo features 1 for plan
                </p>
              </li>
            </ul>
          </div>
          <div className='flex justify-center pb-8'>
            <button className='focus:outline-none bg-white hover:bg-gray-100 transition duration-150 ease-in-out hover:border-indigo-600 hover:text-indigo-700 rounded border border-indigo-600 text-indigo-600 px-6 py-2 text-sm'>
              Subscribe
            </button>
          </div>
        </div> */}
        </div>
      </div>
      <Testimonials />
      <Footer />
    </>
  )
}
