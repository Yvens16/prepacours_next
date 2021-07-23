/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import Link from 'next/link'
import { Popover, Transition } from '@headlessui/react'
import { buildUrl } from 'cloudinary-build-url'
import { MenuIcon, XIcon, SpeakerphoneIcon } from '@heroicons/react/outline'
import { Fragment } from 'react'
import { useRouter } from 'next/router'

const navigation = [
  { name: 'Stages', href: '#' },
  { name: "Groupes d'études", href: '/groupe-etudes/6eme' }
  // { name: 'Marketplace', href: '#' },
  // { name: 'Company', href: '#' }
]
const GroupHero = (url, logoUrl, classes) => {
  const router = useRouter()
  const { pid } = router.query
  return (
    <div className='relative bg-white overflow-hidden'>
      <div className='max-w-7xl mx-auto'>
        <div className='relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32'>
          <svg
            className='hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2'
            fill='currentColor'
            viewBox='0 0 100 100'
            preserveAspectRatio='none'
            aria-hidden='true'
          >
            <polygon points='50,0 100,0 50,100 0,100' />
          </svg>

          <Popover>
            {({ open }) => (
              <>
                <div className='bg-indigo-600'>
                  <div className='max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8'>
                    <div className='flex items-center justify-between flex-wrap'>
                      <div className='w-0 flex-1 flex items-center'>
                        <span className='flex p-2 rounded-lg bg-indigo-800'>
                          <SpeakerphoneIcon
                            className='h-6 w-6 text-white'
                            aria-hidden='true'
                          />
                        </span>
                        <p className='ml-3 font-medium text-white truncate'>
                          <span className='md:hidden'>
                            1er cours d'essai gratuit
                          </span>
                          <span className='hidden md:inline'>
                            Réservez votre cours d'essai gratuit
                          </span>
                        </p>
                      </div>
                      <div className='order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto'>
                        <a
                          href='https://calendly.com/contact-prepacours/15min'
                          className='flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-indigo-600 bg-white hover:bg-indigo-50'
                        >
                          Réserver
                        </a>
                      </div>
                      <div className='order-2 flex-shrink-0 sm:order-3 sm:ml-3'>
                        <button
                          type='button'
                          className='-mr-1 flex p-2 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2'
                        >
                          <span className='sr-only'>Fermer</span>
                          <XIcon
                            className='h-6 w-6 text-white'
                            aria-hidden='true'
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='relative pt-6 px-4 sm:px-6 lg:px-8'>
                  <nav
                    className='relative flex items-center justify-between sm:h-10 lg:justify-start'
                    aria-label='Global'
                  >
                    <div className='flex items-center flex-grow flex-shrink-0 lg:flex-grow-0'>
                      <div className='flex items-center justify-between w-full md:w-auto'>
                        <a href='#'>
                          <span className='sr-only'>Workflow</span>
                          <Image
                            width={50}
                            height={50}
                            src={logoUrl} //'https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg'
                            className='h-8 w-auto sm:h-10'
                            alt=''
                          />
                        </a>
                        <div className='-mr-2 flex items-center md:hidden'>
                          <Popover.Button className='bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
                            <span className='sr-only'>Ouvrir le menu</span>
                            <MenuIcon className='h-6 w-6' aria-hidden='true' />
                          </Popover.Button>
                        </div>
                      </div>
                    </div>
                    <div className='hidden md:block md:ml-10 md:pr-4 md:space-x-5'>
                      {navigation.map(item => (
                        <Link key={item.name} href={item.href}>
                          <a className='font-medium text-gray-500 hover:text-gray-900'>
                            {item.name}
                          </a>
                        </Link>
                      ))}
                      <a
                        href='tel:+33768336464'
                        className='font-medium text-indigo-600 hover:text-indigo-500'
                      >
                        07 68 33 64 64
                      </a>
                    </div>
                  </nav>
                </div>

                <Transition
                  show={open}
                  as={Fragment}
                  enter='duration-150 ease-out'
                  enterFrom='opacity-0 scale-95'
                  enterTo='opacity-100 scale-100'
                  leave='duration-100 ease-in'
                  leaveFrom='opacity-100 scale-100'
                  leaveTo='opacity-0 scale-95'
                >
                  <Popover.Panel
                    focus
                    static
                    className='absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden'
                  >
                    <div className='rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden'>
                      <div className='px-5 pt-4 flex items-center justify-between'>
                        <div>
                          <Image
                            width={50}
                            height={50}
                            src={logoUrl} //'https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg'
                            className='h-8 w-auto'
                            alt=''
                          />
                        </div>
                        <div className='-mr-2'>
                          <Popover.Button className='bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
                            <span className='sr-only'>Fermer le menu</span>
                            <XIcon className='h-6 w-6' aria-hidden='true' />
                          </Popover.Button>
                        </div>
                      </div>
                      <div className='px-2 pt-2 pb-3 space-y-1'>
                        {navigation.map(item => (
                          <Link key={item.name} href={item.href}>
                            <a className='block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50'>
                              {item.name}
                            </a>
                          </Link>
                        ))}
                      </div>
                      <a
                        href='tel:+33768336464'
                        className='block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100'
                      >
                        07 68 33 64 64
                      </a>
                    </div>
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>

          <main className='mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28'>
            <div className='sm:text-center lg:text-left'>
              {pid ? (
                <>
                  <h1 className='text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl'>
                    <span className='block xl:inline'>
                      {classes[pid].title}
                    </span>{' '}
                    <span className='block text-indigo-600 xl:inline'>
                      {classes[pid].titleEmphazise}
                    </span>{' '}
                    <span className='block xl:inline'>
                      {classes[pid].titleRest}
                    </span>
                  </h1>
                  <p className='mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0'>
                    {classes[pid].description}
                  </p>
                </>
              ) : null}
              <div className='mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start'>
                <div className='rounded-md shadow'>
                  <a
                    href='https://calendly.com/contact-prepacours/15min'
                    className='w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10'
                  >
                    Prendre rdv avec un conseiller
                    
                  </a>
                </div>
                {/* <div className='mt-3 sm:mt-0 sm:ml-3'>
               <a
                 href='#'
                 className='w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10'
               >
                 Live demo
               </a>
             </div> */}
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className='lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2'>
        <Image
          layout='fill'
          src={url} //'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80'
          className='h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full'
          alt=''
        />
      </div>
    </div>
  )
}

const heroBasic = (url, logoUrl) => {
  return (
    <div className='relative bg-white overflow-hidden'>
      <div className='max-w-7xl mx-auto'>
        <div className='relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32'>
          <svg
            className='hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2'
            fill='currentColor'
            viewBox='0 0 100 100'
            preserveAspectRatio='none'
            aria-hidden='true'
          >
            <polygon points='50,0 100,0 50,100 0,100' />
          </svg>

          <Popover>
            {({ open }) => (
              <>
                <div className='bg-indigo-600'>
                  <div className='max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8'>
                    <div className='flex items-center justify-between flex-wrap'>
                      <div className='w-0 flex-1 flex items-center'>
                        <span className='flex p-2 rounded-lg bg-indigo-800'>
                          <SpeakerphoneIcon
                            className='h-6 w-6 text-white'
                            aria-hidden='true'
                          />
                        </span>
                        <p className='ml-3 font-medium text-white truncate'>
                          <span className='md:hidden'>
                            1er cours d'essai gratuit
                          </span>
                          <span className='hidden md:inline'>
                            Réservez votre cours d'essai gratuit
                          </span>
                        </p>
                      </div>
                      <div className='order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto'>
                        <a
                          href='https://calendly.com/contact-prepacours/15min'
                          className='flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-indigo-600 bg-white hover:bg-indigo-50'
                        >
                          Réserver
                        </a>
                      </div>
                      <div className='order-2 flex-shrink-0 sm:order-3 sm:ml-3'>
                        <button
                          type='button'
                          className='-mr-1 flex p-2 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2'
                        >
                          <span className='sr-only'>Fermer</span>
                          <XIcon
                            className='h-6 w-6 text-white'
                            aria-hidden='true'
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='relative pt-6 px-4 sm:px-6 lg:px-8'>
                  <nav
                    className='relative flex items-center justify-between sm:h-10 lg:justify-start'
                    aria-label='Global'
                  >
                    <div className='flex items-center flex-grow flex-shrink-0 lg:flex-grow-0'>
                      <div className='flex items-center justify-between w-full md:w-auto'>
                        <a href='#'>
                          <span className='sr-only'>Workflow</span>
                          <Image
                            width={50}
                            height={50}
                            src={logoUrl} //'https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg'
                            className='h-8 w-auto sm:h-10'
                            alt=''
                          />
                        </a>
                        <div className='-mr-2 flex items-center md:hidden'>
                          <Popover.Button className='bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
                            <span className='sr-only'>Ouvrir le menu</span>
                            <MenuIcon className='h-6 w-6' aria-hidden='true' />
                          </Popover.Button>
                        </div>
                      </div>
                    </div>
                    <div className='hidden md:block md:ml-10 md:pr-4 md:space-x-5'>
                      {navigation.map(item => (
                        <Link key={item.name} href={item.href}>
                          <a className='font-medium text-gray-500 hover:text-gray-900'>
                            {item.name}
                          </a>
                        </Link>
                      ))}
                      <a
                        href='tel:+33768336464'
                        className='font-medium text-indigo-600 hover:text-indigo-500'
                      >
                        07 68 33 64 64
                      </a>
                    </div>
                  </nav>
                </div>

                <Transition
                  show={open}
                  as={Fragment}
                  enter='duration-150 ease-out'
                  enterFrom='opacity-0 scale-95'
                  enterTo='opacity-100 scale-100'
                  leave='duration-100 ease-in'
                  leaveFrom='opacity-100 scale-100'
                  leaveTo='opacity-0 scale-95'
                >
                  <Popover.Panel
                    focus
                    static
                    className='absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden'
                  >
                    <div className='rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden'>
                      <div className='px-5 pt-4 flex items-center justify-between'>
                        <div>
                          <Image
                            width={50}
                            height={50}
                            src={logoUrl} //'https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg'
                            className='h-8 w-auto'
                            alt=''
                          />
                        </div>
                        <div className='-mr-2'>
                          <Popover.Button className='bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
                            <span className='sr-only'>Fermer le menu</span>
                            <XIcon className='h-6 w-6' aria-hidden='true' />
                          </Popover.Button>
                        </div>
                      </div>
                      <div className='px-2 pt-2 pb-3 space-y-1'>
                        {navigation.map(item => (
                          <Link key={item.name} href={item.href}>
                            <a className='block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50'>
                              {item.name}
                            </a>
                          </Link>
                        ))}
                      </div>
                      <a
                        href='tel:+33768336464'
                        className='block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100'
                      >
                        07 68 33 64 64
                      </a>
                    </div>
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>

          <main className='mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28'>
            <div className='sm:text-center lg:text-left'>
              <h1 className='text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl'>
                <span className='block xl:inline'>Notre priorité ?</span>{' '}
                <span className='block text-indigo-600 xl:inline'>
                  Atteindre 4 points de plus minimum
                </span>{' '}
                <span className='block xl:inline'>sur sa moyenne en maths</span>
              </h1>
              <p className='mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0'>
                Vous souhaitez vivre une année exceptionnelle pleine de réussite
                et de motivation ? Atteignez vos objectifs scolaires avec notre
                soutien.
              </p>
              <div className='mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start'>
                <div className='rounded-md shadow'>
                  <a
                    href='https://calendly.com/contact-prepacours/15min'
                    className='w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10'
                  >
                    Réserver un cours
                  </a>
                </div>
                {/* <div className='mt-3 sm:mt-0 sm:ml-3'>
               <a
                 href='#'
                 className='w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10'
               >
                 Live demo
               </a>
             </div> */}
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className='lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2'>
        <Image
          layout='fill'
          src={url} //'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80'
          className='h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full'
          alt=''
        />
      </div>
    </div>
  )
}
function Hero ({ group, classes }) {
  const router = useRouter()
  const { pid } = router.query
  console.log('pid Hero:', pid)
  const url = buildUrl('prepacours/kids', {
    cloud: {
      cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_NAME
    },
    transformations: {
      zoom: '0.20',
      resize: {
        type: 'scale',
        width: 2850
      }
    }
  })
  const logoUrl = buildUrl('prepacours/prepacours_logo', {
    cloud: {
      cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_NAME
    },
    transformations: {
      resize: {
        type: 'scale',
        width: 5000,
        height: 5000
      }
    }
  })
  return (
    <>{group ? GroupHero(url, logoUrl, classes) : heroBasic(url, logoUrl)}</>
  )
}

export default Hero
