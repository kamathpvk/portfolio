import React from 'react'
import WorkImg from '../assets/projects/workImg.jpeg'
import realEstate from '../assets/projects/realestate.jpg'

const Projects = () => {
  return (
    <div name='projects' className=' w-full md:h-screen text-gray-300 bg-[#0a192f] '>
        <div className=' max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full '>
            <div className=' pb-8 ' >
                <p className=' text-4xl font-bold inline border-b-4 broder-pink-600 text-gray-400 ' >Projects</p>
                <p className=' py-6 ' >Check out some of my recent projects</p>
            </div>

            {/* container  */}
            <div className=' grid sm:grid-cols-2 md:grid-cols-3 gap-4 '>
                {/* grid item  */}
                <div
                    // style={{backgroundImage: `url(${WorkImg})`}} 
                    className=' shadow-lg shadow-black group container rounded-md flex justify-center items-center mx-auto content-div ' >
                    
                    {/* hover effects  */}
                    <div className=' opacity-0 group-hover:opacity-100 ' >
                        <span className=' text-2xl font-bold text-white tracking-wider '>
                            Tesla clone
                        </span>
                        <div className=' pt-8 text-center '>
                            <a href='#'>
                                <button className=' text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '>Site</button>
                            </a>
                            <a href='#'>
                                <button className=' text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Projects