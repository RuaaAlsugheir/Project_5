import React, { useState } from "react";
import axios from "axios";
import "./bookPage.css";

const DeleteBookPage = () => {
  const [book_id, setBook_id] = useState(0);

  const deleteBook = () => {
    axios
      .delete(`/book/${book_id}`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {})
      .catch((err) => {
        throw err;
      });
  };

  return (
    <div className="deleteBook">
      <h1 style={{ color: "#a24e12", marginLeft: "33rem", marginTop: "2rem" }}>
        Delete Book
      </h1>
      <table className="tableDelete">
      <tbody>
        <tr>
          <th>Book Id</th>
          <th>
            <input
              type="Number"
              placeholder="book_id here "
              onChange={(e) => {
                setBook_id(e.target.value);
              }}
            />
          </th>
        </tr>
        <tr>
          <th></th>
          <th>
            <button onClick={deleteBook} className="delete-button">
              Delete Book
            </button>
          </th>
        </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DeleteBookPage;