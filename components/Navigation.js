/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import { MenuIcon, XIcon, SpeakerphoneIcon } from '@heroicons/react/outline'
import { buildUrl } from 'cloudinary-build-url'
import { Popover, Transition } from '@headlessui/react'
import { Fragment } from 'react'
const navigation = [
  { name: 'Stages', href: '#' },
  { name: "Groupes d'études", href: '#' }
  // { name: 'Marketplace', href: '#' },
  // { name: 'Company', href: '#' }
]

function Navigation () {
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
    <>
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
                    <a
                      key={item.name}
                      href={item.href}
                      className='font-medium text-gray-500 hover:text-gray-900'
                    >
                      {item.name}
                    </a>
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
                      <a
                        key={item.name}
                        href={item.href}
                        className='block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                      >
                        {item.name}
                      </a>
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
    </>
  )
}

export default Navigation
