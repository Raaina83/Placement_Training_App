import React from 'react'
import data from './student_data'


const StudentData = () => {

  return (
    <div className="mt-5 overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300 text-center">
          <thead>
            <tr className="bg-gray-200 dark:bg-gray-800">
              <th className="border border-gray-300 p-2">S.NO</th>
              <th className="border border-gray-300 p-2">NAME</th>
              <th className="border border-gray-300 p-1">RESUME SCORE</th>
              <th className="border border-gray-300 p-1">TEST ATTEMPTED</th>
              <th className="border border-gray-300 p-1">TEST SCORE</th>
              <th className="border border-gray-300 p-2">PROFILE</th>
            </tr>
          </thead>
          <tbody>
            {data.map((user, index) => (
              <tr key={index} className="border border-gray-300">
                <td className="border border-gray-300 p-2">{index + 1}</td>
                <td className="border border-gray-300 p-2">{user.name}</td>
                <td className="border border-gray-300">{user.resumeScore}</td>
                <td className="border border-gray-300">{user.testAttempted.length}</td>
                <td className="border border-gray-300">90</td>
                <td className=" p-2 flex justify-center">
                  <button className="bg-blue-500 text-white px-4 py-1 rounded-lg flex items-center space-x-2">
                    <span>Details</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
  )
}

export default StudentData