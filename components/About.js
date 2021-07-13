import React from 'react'
import Image from 'next/image'
export default function About () {
  return (
    <>
      <div className='mx-auto container lg:mt-60 mt-10 px-4 lg:px-0'>
        <div className='lg:flex justify-center'>
          <div className='lg:w-2/5'>
            <div className='border-2 border-grey px-4 py-4 lg:py-10 lg:px-10 bottom-0 my-8 block lg:hidden'>
              <div className='flex flex-col'>
                <div className='lg:text-4xl text-2xl text-gray-900 leading-9 font-bold f-f-d-s pb-6 text-left'>
                  Qui sommes-nous ?
                </div>
                <div className='lg:text-2xl text-base tracking-tight f-f-l text-gray-700 lg:leading-8'>
                  Né de l’esprit de deux professeurs quelque
                  peu idéalistes, Prepacours est une plateforme de soutien
                  scolaire qui a pour objectif de redonner confiance aux élèves
                  qui ne croient plus en eux et de challenger ceux qui sont en
                  demande. <br />
                  <br /> Chez Prepacours, nous pensons que chaque élève est
                  unique. On s’efforce de se mettre à la place de l’élève pour
                  mieux le comprendre et mener à bien son apprentissage. On
                  s’évertue, à « casser » cette distance prof-élève et à
                  dédramatiser la situation pour que l'élève prenne confiance en
                  lui. <br />
                  <br /> Chez Prepacours, on pense que vouloir faire adhérer
                  l’élève à la matière sans lui donner du sens est vain. On
                  donne donc des exemples concrets de l’application des
                  différents concepts, à des domaines qui lui parlent pour qu’il
                  en comprenne l’intérêt.
                  <br />
                  <br /> Comprendre et aller plus loin dans le raisonnement :
                  c’est à ce moment-là que l’on peut vraiment « s’éclater » en
                  apprenant.
                </div>
                {/* <button className='text-base md:text-xl lg:text-2xl  lg:leading-5 f-f-l underline text-left font-bold focus:outline-none text-black-color mt-4 md:mt-6 lg:mt-8'>
                  Know More
                </button> */}
              </div>
            </div>
            {/* <div className="w-full">
                            <img className="h-full w-full object-cover object-center" src="https://cdn.tuk.dev/assets/templates/Fabterior/section6(1).png" alt />
                        </div> */}
            <div className='border-2 border-black px-4 py-10 lg:px-10 bottom-0 mt-8 hidden lg:block'>
              <div className='flex flex-col'>
                <div className='text-xl md:text-2xl lg:text-4xl text-gray-800 leading-9 f-f-d-s pb-6 text-left'>
                  Qui sommes-nous ?
                </div>
                <div className='text-base md:text-xl lg:text-2xl tracking-tight f-f-l text-gray-700 leading-8'>
                  Né de l’esprit de deux professeurs quelque
                  peu idéalistes, Prepacours est une plateforme de soutien
                  scolaire qui a pour objectif de redonner confiance aux élèves
                  qui ne croient plus en eux et de challenger ceux qui sont en
                  demande. <br />
                  <br /> Chez Prepacours, nous pensons que chaque élève est
                  unique. On s’efforce de se mettre à la place de l’élève pour
                  mieux le comprendre et mener à bien son apprentissage. On
                  s’évertue, à « casser » cette distance prof-élève et à
                  dédramatiser la situation pour que l'élève prenne confiance en
                  lui. <br />
                  <br /> Chez Prepacours, on pense que vouloir faire adhérer
                  l’élève à la matière sans lui donner du sens est vain. On
                  donne donc des exemples concrets de l’application des
                  différents concepts, à des domaines qui lui parlent pour qu’il
                  en comprenne l’intérêt.
                  <br />
                  <br /> Comprendre et aller plus loin dans le raisonnement :
                  c’est à ce moment-là que l’on peut vraiment « s’éclater » en
                  apprenant.
                </div>
                {/* <button className='text-base md:text-xl lg:text-2xl  lg:leading-5 f-f-l underline text-left font-bold focus:outline-none text-black-color mt-4 md:mt-6 lg:mt-8'>
                  Know More
                </button> */}
              </div>
            </div>
          </div>
          {/* <div className="lg:w-3/5 lg:pl-8">
                        <div className="xl:h-2/5 lg:mt-0 mt-8">
                            <img className="w-full h-full bg-cover bg-center" src="https://cdn.tuk.dev/assets/templates/Fabterior/section6(2).png" alt />
                        </div>
                        <div className="w-full mt-8">
                            <img className="w-full bg-cover bg-center" src="https://cdn.tuk.dev/assets/templates/Fabterior/section6(3).png" alt />
                        </div>
                    </div> */}
        </div>
      </div>
    </>
  )
}
