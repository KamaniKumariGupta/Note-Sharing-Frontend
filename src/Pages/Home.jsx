import React from 'react'
import Slider from '../Components/Slider'
import Card from '../Components/Card'

import collegenote from "../assets/collegenote.png"
import google from "../assets/google.png"
import interview from "../assets/interview.png"

function Home({token}) {
  return (
    <div className='flex justify-center items-center flex-col'>
      <div ClassName='max-h-[80vh] w-[100%] flex justify-center items-center'>
        <Slider />
      </div>

      <div   className=' h-[50vh] flex items-center
       bg-blue-300 w-full justify-center mt-4'> 
        <h4 className='text-center text to-blue-900  text-3xl font-display'>

         Keep your notes Organized, and your life Simplified
        </h4> 
      </div>
      <div className='flex flex-row'>
        <Card title={"College Note"} image={collegenote} />
        <Card title={"Google Keep"}image={google}/>
        <Card title={"Interview"}image={interview}/>
      </div>


    </div>
  )
}

export default Home