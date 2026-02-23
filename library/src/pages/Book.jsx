import React, { useState } from "react";

const Book = () => {
  const [book, setBook] = useState({
    title: "",
    author: "",
    category: "",
    isbn: "",
    issueDate: "",
    price: "",
    Description: "",
  });

  const handleChange = (e) => {
    setBook({
      ...book,
      [e.target.name]: e.target.value,
    });

    console.log(book);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("book", book);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-400 to-blue-600 flex items-center justify-center p-6">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-2xl p-10">
        {/* Header */}
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-bold text-gray-800">Add New Book</h1>
          <p className="text-gray-500 mt-2">Enter book details below</p>
        </div>

        {/* Form Grid */}
        <form className="space-y-8" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Title */}
            <div className="flex flex-col">
              <label className="text-sm font-semibold text-gray-600">
                Book Title
              </label>
              <input
                type="text"
                name="title"
                placeholder="Enter book title"
                onChange={handleChange}
                className="mt-2 px-4 py-3 border rounded-xl focus:ring-2 focus:ring-indigo-400 outline-none"
              />
            </div>

            {/* Author */}
            <div className="flex flex-col">
              <label className="text-sm font-semibold text-gray-600">
                Author Name
              </label>
              <input
                type="text"
                name="author"
                placeholder="Enter author name"
                onChange={handleChange}
                className="mt-2 px-4 py-3 border rounded-xl focus:ring-2 focus:ring-indigo-400 outline-none"
              />
            </div>

            {/* Category */}
            <div className="flex flex-col">
              <label className="text-sm font-semibold text-gray-600">
                Category
              </label>
              <input
                type="text"
                name="category"
                placeholder="Enter category"
                onChange={handleChange}
                className="mt-2 px-4 py-3 border rounded-xl focus:ring-2 focus:ring-indigo-400 outline-none"
              />
            </div>

            {/* ISBN */}
            <div className="flex flex-col">
              <label className="text-sm font-semibold text-gray-600">
                ISBN
              </label>
              <input
                type="text"
                name="isbn"
                placeholder="Enter ISBN number"
                onChange={handleChange}
                className="mt-2 px-4 py-3 border rounded-xl focus:ring-2 focus:ring-indigo-400 outline-none"
              />
            </div>

            {/* Issue Date */}
            <div className="flex flex-col">
              <label className="text-sm font-semibold text-gray-600">
                Issue Date
              </label>
              <input
                type="date"
                name="issueDate"
                onChange={handleChange}
                className="mt-2 px-4 py-3 border rounded-xl focus:ring-2 focus:ring-indigo-400 outline-none"
              />
            </div>

            {/* Price */}
            <div className="flex flex-col">
              <label className="text-sm font-semibold text-gray-600">
                Price
              </label>
              <input
                type="number"
                name="price"
                placeholder="Enter price"
                onChange={handleChange}
                className="mt-2 px-4 py-3 border rounded-xl focus:ring-2 focus:ring-indigo-400 outline-none"
              />
            </div>
          </div>

          {/* Description */}
          <div className="flex flex-col">
            <label className="text-sm font-semibold text-gray-600">
              Description
            </label>
            <textarea
              rows="4"
              name="description"
              placeholder="Enter short description"
              onChange={handleChange}
              className="mt-2 px-4 py-3 border rounded-xl focus:ring-2 focus:ring-indigo-400 outline-none resize-none"
            ></textarea>
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-4 pt-4">
            <button
              type="button"
              className="px-6 py-3 rounded-xl border border-gray-300 hover:bg-gray-100 transition"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-6 py-3 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition shadow-md"
            >
              Add Book
            </button>
          </div>
        </form>
   {/* <p>book data : {book}</p>      */}
      </div>
    </div>
  );
};

export default Book;
