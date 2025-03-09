import React from 'react'



const StudentData = () => {
  const data = [
    {
      name: "John Doe",
      resumeScore: 85,
      testAttempted: [
        {
          company: "Google",
          type: "Aptitude",
          score: 78,
          date: "2025-02-10"
        },
      ]
    },
    {
      name: "Jane Smith",
      resumeScore: 92,
      testAttempted: [
        {
          company: "Amazon",
          type: "Coding",
          score: 91,
          date: "2025-02-08"
        },
        {
          company: "Facebook",
          type: "Aptitude",
          score: 85,
          date: "2025-02-18"
        }
      ]
    },
    {
      name: "Alice Johnson",
      resumeScore: 78,
      testAttempted: [
        {
          company: "Netflix",
          type: "Coding",
          score: 82,
          date: "2025-02-12"
        },
        {
          company: "Adobe",
          type: "Aptitude",
          score: 80,
          date: "2025-02-20"
        }
      ]
    },
    {
      name: "Bob Williams",
      resumeScore: 88,
      testAttempted: [
        {
          company: "Apple",
          type: "Coding",
          score: 90,
          date: "2025-02-14"
        },
        {
          company: "Google",
          type: "Aptitude",
          score: 83,
          date: "2025-02-22"
        }
      ]
    },
    {
      name: "Emma Brown",
      resumeScore: 80,
      testAttempted: [
        {
          company: "Tesla",
          type: "Aptitude",
          score: 77,
          date: "2025-02-11"
        },
        {
          company: "Microsoft",
          type: "Coding",
          score: 86,
          date: "2025-02-19"
        }
      ]
    },
    {
      name: "John Doe",
      resumeScore: 85,
      testAttempted: [
        {
          company: "Google",
          type: "Aptitude",
          score: 78,
          date: "2025-02-10"
        },
      ]
    },
    {
      name: "Jane Smith",
      resumeScore: 92,
      testAttempted: [
        {
          company: "Amazon",
          type: "Coding",
          score: 91,
          date: "2025-02-08"
        },
        {
          company: "Facebook",
          type: "Aptitude",
          score: 85,
          date: "2025-02-18"
        }
      ]
    },
    {
      name: "John Doe",
      resumeScore: 85,
      testAttempted: [
        {
          company: "Google",
          type: "Aptitude",
          score: 78,
          date: "2025-02-10"
        },
      ]
    },
    {
      name: "Jane Smith",
      resumeScore: 92,
      testAttempted: [
        {
          company: "Amazon",
          type: "Coding",
          score: 91,
          date: "2025-02-08"
        },
        {
          company: "Facebook",
          type: "Aptitude",
          score: 85,
          date: "2025-02-18"
        }
      ]
    },
    {
      name: "John Doe",
      resumeScore: 85,
      testAttempted: [
        {
          company: "Google",
          type: "Aptitude",
          score: 78,
          date: "2025-02-10"
        },
      ]
    },
    {
      name: "Jane Smith",
      resumeScore: 92,
      testAttempted: [
        {
          company: "Amazon",
          type: "Coding",
          score: 91,
          date: "2025-02-08"
        },
        {
          company: "Facebook",
          type: "Aptitude",
          score: 85,
          date: "2025-02-18"
        }
      ]
    },
    {
      name: "John Doe",
      resumeScore: 85,
      testAttempted: [
        {
          company: "Google",
          type: "Aptitude",
          score: 78,
          date: "2025-02-10"
        },
      ]
    },
    {
      name: "Jane Smith",
      resumeScore: 92,
      testAttempted: [
        {
          company: "Amazon",
          type: "Coding",
          score: 91,
          date: "2025-02-08"
        },
        {
          company: "Facebook",
          type: "Aptitude",
          score: 85,
          date: "2025-02-18"
        }
      ]
    },
  ]
  
  

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