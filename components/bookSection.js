/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Image from 'next/image'
import { buildUrl } from 'cloudinary-build-url'
import { useRouter } from 'next/router'

function BookSection ({ classes }) {
  const router = useRouter()
  const { pid } = router.query
  const BookUrl = buildUrl(classes[pid].book, {
    cloud: {
      cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_NAME
    },
    transformations: {
      resize: {
        type: 'scale',
        width: 204,
        height: 204
      }
    }
  })
  return (
    <>
      <div className='mx-auto container py-12 px-4'>
        <div className='w-full flex justify-center'>
          <div className='w-full md:w-11/12 xl:w-10/12 bg-gradient-to-r from-indigo-500 to-indigo-700 md:py-8 md:px-8  px-5 py-4 xl:px-12 xl:py-16'>
            <div>
              <div className='flex flex-wrap items-center md:flex-row flex-col-reverse'>
                <div className='md:w-2/3 w-full pb-6 md:pb-0 md:pr-6 flex-col md:block flex  items-center justify-center md:pt-0 pt-4 '>
                  <h1 className='text-xl md:text-2xl lg:text-4xl xl:text-5xl lg:w-10/12 text-white font-black leading-tight md:text-left text-center '>
                    Un livre de préparation aux examen vous ai offert à
                    l'inscription
                  </h1>
                  <a href='https://calendly.com/contact-prepacours/15min'>
                    <button className='mt-5 lg:mt-12 py-3 lg:py-4 px-4  lg:px-6 bg-white font-bold text-indigo-700 rounded-lg text-sm lg:text-lg xl:text-xl hover:opacity-90'>
                      Prendre rdv avec un conseiller
                    </button>
                  </a>
                </div>
                <div className='md:w-1/3 w-full'>
                  <div className='flex flex-col items-center justify-center'>
                    {/* <div className="flex items-center mt-8">
                                            <div className="xl:w-20 lg:h-14 lg:w-14 w-10 h-10  xl:h-20 rounded-full mr-3">
                                                <Image width={200} height={200} className="w-full h-full" src="https://cdn.tuk.dev/assets/templates/prodify/avatar(1).png" alt='book' />
                                            </div>
                                            <div className="xl:w-20 lg:h-14 lg:w-14 w-10 h-10  xl:h-20 rounded-full">
                                                <Image width={200} height={200} className="w-full h-full" src="https://cdn.tuk.dev/assets/templates/prodify/avatar(2).png" alt='book' />
                                            </div>
                                        </div> */}
                    <div className='flex items-center mt-4'>
                      {/* <div className="xl:w-20 lg:h-14 lg:w-14 w-10 h-10  xl:h-20 rounded-full mr-3">
                                                <Image width={200} height={200} className="w-full h-full" src="https://cdn.tuk.dev/assets/templates/prodify/avatar(1).png" alt='book' />
                                            </div> */}
                      {/* <div className="xl:w-20 lg:h-14 lg:w-14 w-10 h-10  xl:h-20 rounded-full mr-3"> */}
                      <Image
                        width={500}
                        height={500}
                        className='w-full h-full'
                        src={BookUrl}
                        alt='book'
                      />
                      {/* </div> */}
                      {/* <div className="xl:w-20 lg:h-14 lg:w-14 w-10 h-10  xl:h-20 rounded-full">
                                                <Image width={200} height={200} className="w-full h-full" src="https://cdn.tuk.dev/assets/templates/prodify/avatar(3).png" alt='book' />
                                            </div> */}
                    </div>
                    {/* <div className="flex items-center mt-4">
                                            <div className="xl:w-20 lg:h-14 lg:w-14 w-10 h-10  xl:h-20 rounded-full mr-3">
                                                <Image width={200} height={200} className="w-full h-full" src="https://cdn.tuk.dev/assets/templates/prodify/avatar(1).png" alt='book' />
                                            </div>
                                            <div className="xl:w-20 lg:h-14 lg:w-14 w-10 h-10  xl:h-20 rounded-full">
                                                <Image width={200} height={200} className="w-full h-full" src="https://cdn.tuk.dev/assets/templates/prodify/avatar(3).png" alt='book' />
                                            </div>
                                        </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BookSection
