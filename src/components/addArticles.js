import React, { useState } from "react";

// const AddArticleForm = ({ articleName, setArticleInfo }) => {
const AddArticleForm = ({ setArticleInfo }) => {
  const [name, setName] = useState("");
  const [Text, setText] = useState("");

  const addArticle = async () => {
    // const result = await fetch(`/api/articles/learn-node/add-comments`, {
    const result = await fetch(`/api/addArticles`, {
      method: "post",
      body: JSON.stringify({ name, text: Text }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const body = await result.json();
    console.log(body);
    setTimeout(() => {
      
    }, 10000);
    setArticleInfo(body);
    setName("");
    setText("");
  };

  return (
    <form className='shadow rounded px-8 pt-6 pb-8 mb-4'>
      <h3 className='text-xl font-bold mb-4 text-gray-900'>Add a question</h3>
      <label className='block text-gray-700 text-sm font-bold mb-2'>
        Question :
      </label>
      <input
        type='text'
        className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label className='block text-gray-700 text-sm font-bold mb-2'>
        description :
      </label>
      <textarea
        rows='4'
        cols='50'
        className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
        value={Text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
        onClick={() => addArticle()}
      >
        Submit
      </button>
    </form>
  );
};

export default AddArticleForm;