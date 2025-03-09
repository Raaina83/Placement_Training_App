import React from 'react'

const FilterTags = () => {
  return (
    <div className='flex sm:pd-6 w-screen'>
        <div className="flex flex-wrap mt-5 w-screen sm:w-xl justify-evenly sm:justify-center items-center sm:gap-8">
        <select className="p-1 sm:p-2 text-sm sm:text-base rounded-lg bg-white text-black shadow-md">
          <option>ALL RECORD</option>
        </select>
        <select className="p-1 sm:p-2 text-sm sm:text-base rounded-lg bg-white text-black shadow-md">
          <option>SELECT COMPANY</option>
        </select>
        <select className="p-1 sm:p-2 text-sm sm:text-base rounded-lg bg-white text-black shadow-md">
          <option>DATE</option>
        </select>
      </div>
    </div>

  )
}

export default FilterTags