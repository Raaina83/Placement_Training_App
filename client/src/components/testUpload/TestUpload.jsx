import React, { useState } from 'react'

const TestUpload = () => {
    const [question, setQuestion] = useState("");
    const [options, setOptions] = useState(["", "", "", ""]);
    const [correctOption, setCorrectOption] = useState(null);
    const [questionsList, setQuestionsList] = useState([]);
    const [editingIndex, setEditingIndex] = useState(null);

  
    const handleOptionChange = (index, value) => {
      const newOptions = [...options];
      newOptions[index] = value;
      setOptions(newOptions);
    };
  
    const handleSubmit = () => {
      if (!question || correctOption === null || options.some(opt => !opt)) {
        alert("Please fill all fields and select the correct option.");
        return;
      }
  
      const newQuestion = {
        question: `Q${questionsList.length}: ${question}`,
        options,
        correctOption: options[correctOption]
      };

      if (editingIndex !== null) {
        const updatedQuestions = [...questionsList];
        updatedQuestions[editingIndex] = newQuestion;
        setQuestionsList(updatedQuestions);
        setEditingIndex(null);
      } else {
        setQuestionsList([...questionsList, newQuestion]);
      }
  
    //   setQuestionsList([...questionsList, newQuestion]);
      setQuestion("");
      setOptions(["", "", "", ""]);
      setCorrectOption(null);
    };

    const handleEdit = (index) => {
        const q = questionsList[index];
        setQuestion(q.question.replace(/^Q\d+: /, ""));
        setOptions(q.options);
        setCorrectOption(q.options.indexOf(q.correctOption));
        setEditingIndex(index);
      };

      console.log(questionsList);
  
    return (
      <div className="max-w-full mx-auto mt-10 p-6 bg-white rounded-lg flex flex-col justify-center items-center">
        <h2 className="text-xl font-bold mb-4">{editingIndex !== null ? "Edit Question" : "Upload Question"}</h2>
        {/* <div className='w-[78%]'> */}
            <input
            type="text"
            className="w-[78%] p-2 border rounded mb-4 mr-4"
            placeholder="Enter question"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            />
        {/* </div> */}
        {options.map((opt, index) => (
          <div key={index} className="flex items-center gap-2 mb-2 w-[80%]">
            <input
              type="text"
              className="flex-1 p-2 border rounded"
              placeholder={`Option ${index + 1}`}
              value={opt}
              onChange={(e) => handleOptionChange(index, e.target.value)}
            />
            <input
              type="radio"
              name="correctOption"
              checked={correctOption === index}
              onChange={() => setCorrectOption(index)}
            />
          </div>
        ))}
        <button
          onClick={handleSubmit}
          className="mt-4 w-[80%] bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          {editingIndex !== null ? "Update Question" : "Save Question"}
        </button>
        <h3 className="mt-6 font-bold">Questions Uploaded:</h3>
        <div className="mt-4 border rounded p-4 max-h-64 overflow-y-auto">
        {questionsList.map((q, idx) => (
          <div key={idx} className="flex justify-between items-center p-2 border-b">
            <span>{q.question}</span>
            <button
              onClick={() => handleEdit(idx)}
              className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600"
            >
              Edit
            </button>
          </div>
        ))}
      </div>
      </div>
    );
  
}

export default TestUpload