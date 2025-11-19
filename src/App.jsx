import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Mall,RCS,GOV,LOG,CUP } from './assets'

export default function App() {
  return (
    <div className="bg-[#030c17] w-screen min-h-screen" >
      <h1 className='pl-2 pt-4 text-white text-1.5em font-bold'>Zaini Ahmad Project</h1>
      <div className='flex flex-wrap flex-col gap-5 mt-4 md:( flex-row  gap-x-4 gap-y-8  border-white )'>
      
        <div className=' flex h-auto  ml-2 mr-2  md:( bg-white  h-auto w-[22%]  rounded-xl mt-2  )' >
          <div className="min-w-120px  rounded-xl  bg-cover bg-center md:( w-180px ) " style={{backgroundImage:`url(${Mall})`}}></div>
          <div className='flex flex-col border-b-2 pb-2 px-2 py-auto md:( justify-center items-center border-b-0 )'>
            <h2 className='md:text-[#030c17] text-white  font-bold '>Clustering Mall Customer</h2>
            <p className='text-[9pt] text-red-200'>Using K-Means Clustering to cluster the dataset</p>

            <h5 className='md:text-[#030c17] text-white t text-0.75em mt-2 '>Documentation : <a href='https://github.com/zenahmad06/kump/blob/main/Mall_Customer_Clustering.ipynb' className='hover:text-yellow-200'>Click here</a></h5>
            <h5 className='md:text-[#030c17] text-white t text-0.75em mt-2'>Article : <a href='https://medium.com/@zenahmad06/clustering-k-means-clustering-b178a0652d98' className='hover:text-yellow-200'>Click here</a></h5>

          </div>
        </div>
        
        <div className=' flex h-auto ml-2 mr-2  md:( bg-white  h-auto w-[22%]   rounded-xl mt-2  )' >
          <div className="min-w-120px  rounded-xl  bg-cover bg-no-repeat bg-center md:( w-180px ) " style={{backgroundImage:`url(${RCS})`}}></div>
          <div className='flex flex-col pb-2 border-b-2 px-2 py-auto md:( justify-center items-center border-b-0 )'>
            <h2 className='md:text-[#030c17] text-white font-bold'>Rock, Pappers, Scissors (CNN)</h2>
            <p className='text-[9pt] text-red-200'>We preprocessing image using OpenCV and then build model classification using CNN</p>

            <h5 className='md:text-[#030c17] text-white text-0.75em mt-2'>Documentation : <a href='https://zenahmad06.github.io/test-jekyll/cnn-rps/' className='hover:text-yellow-200'>Click here</a></h5>

          </div>
        </div>

        <div className=' flex h-auto ml-2 mr-2  md:( bg-white h-150px w-[22%] rounded-xl mt-2  )' >
            <div className="min-w-120px  rounded-xl  bg-cover  bg-center md:( w-180px ) " style={{backgroundImage:`url(${GOV})`}}></div>
            <div className='flex flex-col px-2 pb-2 border-b-2 py-auto md:( justify-center items-center border-b-0 )'>
              <h2 className='md:text-[#030c17] text-white  font-bold '>Web Scrapping Data Python <br/><span className='text-0.75em'>(Governor information)</span></h2>
              <p className='text-[9pt] text-red-200'>Scrapping governor data using beautifulsoup and python and convert it into csv using pandas</p>
              <h5 className='md:text-[#030c17] text-white text-0.75em mt-2 '>Documentation : <a href='https://zenahmad06.github.io/test-jekyll/web-scrapping-governor/' className='hover:text-yellow-200'>Click here</a></h5>

            </div>
          
        </div>
        <div className=' flex h-auto  ml-2 mr-2  md:( bg-white  h-auto w-[22%] rounded-xl mt-2  )' >
            <div className="min-w-120px  rounded-xl  bg-cover  bg-center md:( w-180px ) " style={{backgroundImage:`url(${LOG})`}}></div>
            <div className='flex flex-col pb-2 px-2 border-b-2 py-auto md:( justify-center items-center border-b-0 )'>
              <h2 className='md:text-[#030c17] text-white  font-bold '>Handle Login and Register using Cookie </h2>
              <p className='text-[9pt] text-red-200'>   In this project, we build login and register for frontend using react.js and postgree sql for database, express js for handle cookies and backend</p>
              <h5 className='md:text-[#030c17] text-white text-0.75em mt-2 flex-start '>Documentation : <a href='https://github.com/zenahmad06/auth-login-postgre' className='hover:text-yellow-200'>Click here</a></h5>
              <h5 className='md:text-[#030c17] text-white text-0.75em mt-2 '>Article : <a href='https://medium.com/@zenahmad06/handle-login-and-register-cookie-based-30067e3d9ffb' className='hover:text-yellow-200'>Click here</a></h5>

            </div>
          
        </div>
        <div className=' flex h-auto  ml-2 mr-2  md:( bg-white  h-auto w-[22%] rounded-xl mt-2  )' >
            <div className="min-w-120px  rounded-xl  bg-cover  bg-center md:( w-180px ) " style={{backgroundImage:`url(${CUP})`}}></div>
            <div className='flex flex-col pb-2 px-2 border-b-2 py-auto md:( justify-center items-center border-b-0 )'>
              <h2 className='md:text-[#030c17] text-white  font-bold '>Image Processing in Cup Of Bottle </h2>
              <p className='text-[9pt] text-red-200'>   In this project, we detect and draw a bounding box using cv2.HoughCircles</p>
              <h5 className='md:text-[#030c17] text-white text-0.75em mt-2 flex-start '>Documentation : <a href='https://colab.research.google.com/drive/1Ccb0mCvTsJko03BKIWJrPVijVTfLhKAE?usp=sharing' className='hover:text-yellow-200'>Click here</a></h5>
              <h5 className='md:text-[#030c17] text-white text-0.75em mt-2 '>Article : <a href='https://medium.com/@zenahmad06/representasi-gambar-1920d02d8ef4' className='hover:text-yellow-200'>Click here</a></h5>

            </div>
          
        </div>
        
        
        
        
      </div>
         
   </div>
  );
}
