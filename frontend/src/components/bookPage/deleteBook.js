import React, { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import "./bookPage.css";

const DeleteBookPage = () => {
  const [book_id, setBook_id] = useState(0);
  const state = useSelector((state) => {
    // specify which state to subscribe to (state tree => reducer => state name )
    return {
      token: state.login.token,
    };
  });
  const deleteBook = () => {
    axios
      .delete(`http://localhost:5000/book/${book_id}`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {})
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="deleteBook">
          <h1 style={{color: "#a24e12", marginLeft: "33rem",  marginTop: "2rem"}}>Delete book</h1>
          <table className='tableDelete'>
          <tr><th>Book Id</th>
          <th>
      <input
        type="Number"
        placeholder="book_id here "
        onChange={(e) => {
          setBook_id(e.target.value);
        }}
      /></th></tr>
      <tr>
      <th></th>
      <th>
      <button onClick={deleteBook} className='delete-button'>
        Delete Book
      </button></th></tr></table>
    </div>
  );
};

export default DeleteBookPage;
