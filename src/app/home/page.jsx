import React from 'react'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div className="flex flex-col justify-center items-start min-h-[83vh] bg-[#f7f4ed] text-black pl-30 max-[1024px]:pl-20 max-[768px]:pl-10 max-[409px]:pl-6 ">
      <div className="max-w-4xl">
        <h1 className="flex flex-col items-start font-stix_two_test font-semibold">
          <div className="text-8xl max-[768px]:text-6xl max-[409px]:text-5xl max-[332px]:text-4xl">
            Human
          </div>
          <div className="text-8xl max-[768px]:text-6xl max-[409px]:text-5xl max-[332px]:text-4xl">
            stories & ideas
          </div>
        </h1>
        <p className="text-xl max-[768px]:text-lg max-[409px]:text-base max-[332px]:text-sm mt-4 text-gray-700 font-roboto">
          A place to read, write, and deepen your understanding
        </p>
        {/* /Brown */}
        <Link to="/dashboard">
        <Button className="mt-6 px-8 py-4 text-lg font-medium bg-black text-white rounded-full hover:bg-gray-900 transition-all max-[768px]:bg-green-500 ">
          Start reading
        </Button>
        </Link>
      </div>
      

      {/* Decorative Elements */}
      <img
        src="https://res.cloudinary.com/vinesh23/image/upload/v1742448904/kcst0spji7zqaypai3xw.jpg" 
        alt="Decorative Image"
        className="fixed right-1 top-19 max-w-[610px] max-[1355px]:hidden "
        
      />

      
    </div>
  )
}

export default Home
