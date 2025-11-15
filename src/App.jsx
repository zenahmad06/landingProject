import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Mall,RCS,GOV } from './assets'

export default function App() {
  return (
    <div className="md:bg-[#030c17 bg-[#030c17] w-screen h-screen" >
      <h1 className='pl-2 pt-4 text-white text-1.5em font-bold'>Zaini Ahmad Project</h1>
      <div className='flex flex-wrap flex-col gap-5 mt-4 md:( flex-row  gap-x-4 gap-y-8  border-white )'>
      
        <div className=' flex h-80px  ml-2 mr-2  md:( bg-white h-150px w-[22%]  rounded-xl mt-2  )' >
          <div className="w-120px h-full rounded-xl  bg-cover bg-center md:( w-180px ) " style={{backgroundImage:`url(${Mall})`}}></div>
          <div className='flex flex-col border-b-2 px-2 py-auto md:( justify-center items-center border-b-0 )'>
            <h2 className='md:text-[#030c17] text-white t font-bold text-center'>Clustering Mall Customer</h2>
            <h5 className='md:text-[#030c17] text-white t text-0.75em mt-2 '>Documentation : <a href='https://github.com/zenahmad06/kump/blob/main/Mall_Customer_Clustering.ipynb' className='hover:text-yellow-200'>Click here</a></h5>
            <h5 className='md:text-[#030c17] text-white t text-0.75em mt-2'>Article : <a href='https://medium.com/@zenahmad06/clustering-k-means-clustering-b178a0652d98' className='hover:text-yellow-200'>Click here</a></h5>

          </div>
        </div>
        
        <div className=' flex h-80px ml-2 mr-2  md:( bg-white h-150px w-[22%]   rounded-xl mt-2  )' >
          <div className="w-120px h-full rounded-xl  bg-cover bg-no-repeat bg-center md:( w-180px ) " style={{backgroundImage:`url(${RCS})`}}></div>
          <div className='flex flex-col border-b-2 px-2 py-auto md:( justify-center items-center border-b-0 )'>
            <h2 className='md:text-[#030c17] text-white text-center font-bold'>Rock, Pappers, Scissors (CNN)</h2>
            <h5 className='md:text-[#030c17] text-white text-0.75em mt-2'>Documentation : <a href='https://zenahmad06.github.io/test-jekyll/cnn-rps/' className='hover:text-yellow-200'>Click here</a></h5>

          </div>
        </div>

        <div className=' flex h-80px ml-2 mr-2  md:( bg-white h-150px w-[22%] rounded-xl mt-2  )' >
            <div className="min-w-120px h-full rounded-xl  bg-cover  bg-center md:( w-180px ) " style={{backgroundImage:`url(${GOV})`}}></div>
            <div className='flex flex-col px-2 border-b-2 py-auto md:( justify-center items-center border-b-0 )'>
              <h2 className='md:text-[#030c17] text-white  font-bold text-center'>Web Scrapping Data Python <br/><span className='text-0.75em'>(Governor information)</span></h2>
              <h5 className='md:text-[#030c17] text-white text-0.75em mt-2 '>Documentation : <a href='https://zenahmad06.github.io/test-jekyll/web-scrapping-governor/' className='hover:text-yellow-200'>Click here</a></h5>

            </div>
          
          </div>
           
        
        
        
        
      </div>
         
   </div>
  );
}
