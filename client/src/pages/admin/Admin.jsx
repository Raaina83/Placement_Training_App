import React from 'react'
import FilterTags from './FilterTags';
import StudentData from './StudentData';
const Admin = () => {
  return (
    <div className='w-full dark:bg-neutral-800 dark:text-white'>
        {/* <Header/> */}
        <FilterTags></FilterTags>
        <StudentData></StudentData>
    </div>
  )
}

export default Admin