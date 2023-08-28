import { React, useState } from 'react'
import img1 from './img/prof.jpg'
import img2 from './img/img1.png'
import img3 from './img/newspaper.jpg'

const App = () => {

  const [darkMode, setDarkMode] = useState(false);
  return (
    <div>
      <main className='bg-white px-10 md:px-20 lg:px-40'>
        <section>
          <nav className='py-8 flex justify-between'>
            <h1 className='text-xl'>Front-End Develper</h1>
            <ul className='flex items-center gap-6'>
              <li className='cursor-pointer text-2xl'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                  <path fill-rule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" clip-rule="evenodd" />
                </svg>
              </li>
              <li><a className='bg-cyan-400 text-white px-6 py-2 rounded-md' href="#">Resume</a></li>
            </ul>
          </nav>
          <div className='text-center p-10 pb-6'>
            <h2 className='text-5xl py-2 text-teal-400 font-bold'>Amir_Seyyedi</h2>
            <h3 className='text-2xl py-2 '>developer and designer</h3>
            <p className='text-lg py-4 leading-8 text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
          </div>
          <div className='text-5xl flex justify-center gap-16 pb-[4rem] text-teal-300'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
              <path d="M19.5 22.5a3 3 0 003-3v-8.174l-6.879 4.022 3.485 1.876a.75.75 0 01-.712 1.321l-5.683-3.06a1.5 1.5 0 00-1.422 0l-5.683 3.06a.75.75 0 01-.712-1.32l3.485-1.877L1.5 11.326V19.5a3 3 0 003 3h15z" />
              <path d="M1.5 9.589v-.745a3 3 0 011.578-2.641l7.5-4.039a3 3 0 012.844 0l7.5 4.039A3 3 0 0122.5 8.844v.745l-8.426 4.926-.652-.35a3 3 0 00-2.844 0l-.652.35L1.5 9.59z" />
            </svg>

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
              <path fill-rule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clip-rule="evenodd" />
            </svg>

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
              <path fill-rule="evenodd" d="M6.912 3a3 3 0 00-2.868 2.118l-2.411 7.838a3 3 0 00-.133.882V18a3 3 0 003 3h15a3 3 0 003-3v-4.162c0-.299-.045-.596-.133-.882l-2.412-7.838A3 3 0 0017.088 3H6.912zm13.823 9.75l-2.213-7.191A1.5 1.5 0 0017.088 4.5H6.912a1.5 1.5 0 00-1.434 1.059L3.265 12.75H6.11a3 3 0 012.684 1.658l.256.513a1.5 1.5 0 001.342.829h3.218a1.5 1.5 0 001.342-.83l.256-.512a3 3 0 012.684-1.658h2.844z" clip-rule="evenodd" />
            </svg>
          </div>
          <div>
            <img src={img1} className='rounded-xl mx-auto' />
          </div>
        </section>
        <section>
          <div>
            <h3 className='text-3xl pt-[4rem] pb-[2rem]'>Services I Offer</h3>
            <p className='text-lg leading-8 text-gray-600'>Lorem ipsum <span className='text-teal-300'>dolor</span> sit amet, consectetur adipiscing elit, sed do <span className='text-teal-300'>eiusmod</span> tempor incididunt ut <span className='text-teal-300'>labore</span> et dolore magna aliqua </p>
          </div>
          <div className='md:flex gap-8'>
            <div className='text-center shadow-lg p-10 rounded-xl my-8'>
              <img src={img2} className='w-[100px] h-[100px] mx-auto' />
              <h3 className='text-lg font-medium pt-8 pb-2'>Beutiful Designs</h3>
              <p className='py-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua </p>
              <h4 className='py-4 text-teal-600'>Design tools I use</h4>
              <p className='text-gray-600 py-2'>Photoshop</p>
              <p className='text-gray-600 py-2'>Illustrator</p>
              <p className='text-gray-600 py-2'>VsCode</p>
            </div>
            <div className='text-center shadow-lg p-10 rounded-xl my-8'>
              <img src={img2} className='w-[100px] h-[100px] mx-auto' />
              <h3 className='text-lg font-medium pt-8 pb-2'>Beutiful Designs</h3>
              <p className='py-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua </p>
              <h4 className='py-4 text-teal-600'>Design tools I use</h4>
              <p className='text-gray-600 py-2'>Photoshop</p>
              <p className='text-gray-600 py-2'>Illustrator</p>
              <p className='text-gray-600 py-2'>VsCode</p>
            </div>
            <div className='text-center shadow-lg p-10 rounded-xl my-8'>
              <img src={img2} className='w-[100px] h-[100px] mx-auto' />
              <h3 className='text-lg font-medium pt-8 pb-2'>Beutiful Designs</h3>
              <p className='py-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua </p>
              <h4 className='py-4 text-teal-600'>Design tools I use</h4>
              <p className='text-gray-600 py-2'>Photoshop</p>
              <p className='text-gray-600 py-2'>Illustrator</p>
              <p className='text-gray-600 py-2'>VsCode</p>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className='text-3xl py2'>Portofolio</h3>
            <p className='text-lg leading-8 text-gray-600'>Lorem ipsum <span className='text-teal-300'>dolor</span> sit amet, consectetur adipiscing elit, sed do <span className='text-teal-300'>eiusmod</span> tempor incididunt ut <span className='text-teal-300'>labore</span> et dolore magna aliqua </p>
          </div>
          <div className='flex flex-col gap-8 py-10 md:flex-row md:flex-wrap'>
            <div className='p-4 bg-gray-400 basis-1/3 flex-1'>
              <img src={img3} className='rounded-xl object-cover' />
            </div>
            <div className='p-4 bg-gray-500 basis-1/3 flex-1'>
              <img src={img3} className='rounded-xl object-cover' />
            </div>
            <div className='p-4 bg-gray-600 basis-1/3 flex-1'>
              <img src={img3} className='rounded-xl object-cover' />
            </div>
            <div className='p-4 bg-gray-400 basis-1/3 flex-1'>
              <img src={img3} className='rounded-xl object-cover' />
            </div>
            <div className='p-4 bg-gray-500 basis-1/3 flex-1'>
              <img src={img3} className='rounded-xl object-cover' />
            </div>
            <div className='p-4 bg-gray-600 basis-1/3 flex-1'>
              <img src={img3} className='rounded-xl object-cover' />
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
