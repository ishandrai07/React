import React from 'react'
import { useParams } from 'react-router-dom'

const CoursesDetails = () => {

    const params = useParams()
    console.log(params);  

  return (
    <div>
        <h1 className='text-4xl font-semibold absolute top-1/2 left-1/2 -translate-x-1/2'>{params.id} Course Details</h1>
    </div>
  )
}

export default CoursesDetails