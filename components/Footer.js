import Link from 'next/link'
import { useState } from 'react'
import Image from 'next/image'
import { buildUrl } from 'cloudinary-build-url'

const Index = () => {
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
  const [mode, setMode] = useState('auto')
  return (
    <div className='pt-12'>
      <footer id='footer' className='relative z-50 dark:bg-gray-900 pt-24'>
        {/* <div className=' border-t border-b border-gray-200 dark:border-gray-700 py-16'>
          <div className='mx-auto container px-4 xl:px-12 2xl:px-4'>
            <div className='lg:flex'>
              <div className='w-full lg:w-1/2 mb-16 lg:mb-0 flex'>
                <div className='w-full lg:w-1/2 px-6'>
                  <ul>
                    <li>
                      <Link href='javascript:void(0)'>
                        <a className='text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-50'>
                          Components
                        </a>
                      </Link>
                    </li>
                    <li className='mt-6'>
                      <Link href='javascript:void(0)'>
                        <a className='text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-50'>
                          Templates
                        </a>
                      </Link>
                    </li>
                    <li className='mt-6'>
                      <Link href='javascript:void(0)'>
                        <a className='text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-50'>
                          Pricing
                        </a>
                      </Link>
                    </li>
                    <li className='mt-6'>
                      <Link href='javascript:void(0)'>
                        <a className='text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-50'>
                          FAQ
                        </a>
                      </Link>
                    </li>
                    <li className='mt-6'>
                      <a
                        href='javascript:void(0)'
                        className='text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-50'
                      >
                        Documentation
                      </a>
                    </li>
                  </ul>
                </div>
                <div className='w-full lg:w-1/2 px-6'>
                  <ul>
                    <li>
                      <Link href='javascript:void(0)'>
                        <a className='text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-50'>
                          Free components
                        </a>
                      </Link>
                    </li>

                    <li className='mt-6'>
                      <Link href='javascript:void(0)'>
                        <a className='text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-50'>
                          Blog
                        </a>
                      </Link>
                    </li>
                    <li className='mt-6'>
                      <Link href='javascript:void(0)'>
                        <a className='text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-50'>
                          Changelog
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className='w-full lg:w-1/2 flex'>
                <div className='w-full lg:w-1/2 px-6'>
                  <ul>
                    <li>
                      <a
                        href='javascript:void(0)'
                        className='text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-50'
                      >
                        Privacy policy
                      </a>
                    </li>
                    <li className='mt-6'>
                      <Link href='javascript:void(0)'>
                        <a className='text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-50'>
                          Terms of service
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <div className='py-16 flex flex-col justify-center items-center'>
          <Link href='javascript:void(0)'>
            <a>
              <Image
                width={100}
                height={100}
                src={logoUrl}
                className='dark:text-white'
                alt=''
              />
            </a>
          </Link>
          <p className='mt-6 text-xs lg:text-sm leading-none text-gray-900 dark:text-gray-50'>
          © 2021 prepacours – Mentions légales – Conditions générales de vente - Données personnelles
          </p>
        </div>
      </footer>
    </div>
  )
}
export default Index
