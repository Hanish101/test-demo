// import React, { useState } from "react";

// const AddCommentForm = ({ Question, setArticleInfo }) => {
//   const [username, setUsername] = useState("");
//   const [Answer, setAnswer] = useState("");
//   // const [commentText, setCommentText] = useState("");

//   const addAnswers = async () => {
//     // const result = await fetch(`/api/articles/learn-node/add-comments`, {
//     const result = await fetch(`/api/add-questions`, {
//       method: "post",
//       body: JSON.stringify({ username, text: Answer }),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//     const body = await result.json();
//     setArticleInfo(body);
//     setName("");
//     setAnswer("");
//   };

//   return (
//     <form className='shadow rounded px-8 pt-6 pb-8 mb-4'>
//       <h3 className='text-xl font-bold mb-4 text-gray-900'>Add a Comment</h3>
//       <label className='block text-gray-700 text-sm font-bold mb-2'>
//         Name :
//       </label>
//       <input
//         type='text'
//         className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//       />
//       <label className='block text-gray-700 text-sm font-bold mb-2'>
//         Answer :
//       </label>
//       <textarea
//         rows='4'
//         cols='50'
//         className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
//         value={Answer}
//         onChange={(e) => setAnswer(e.target.value)}
//       />
//       <button
//         className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
//         onClick={() => addAnswers()}
//       >
//         Add Comment
//       </button>
//     </form>
//   );
// };

// export default AddCommentForm;