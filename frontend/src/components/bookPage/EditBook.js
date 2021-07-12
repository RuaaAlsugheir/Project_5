import React, { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import "./bookPage.css";

function EditBookPage() {
  const [book_id, setBook_id] = useState(0);
  const [book_img, setBook_img] = useState();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [publisher, setPublisher] = useState("");
  const [edition, setEdition] = useState("");
  const [pages, setPages] = useState("");
  const [price, setPrice] = useState("");
  const [author, setAuthor] = useState("");
  const state = useSelector((state) => {
    // specify which state to subscribe to (state tree => reducer => state name )
    return {
      token: state.login.token,
    };
  });
  const EditBook = () => {
    axios.put(
      `http://localhost:5000/book/${book_id}`,
      {
        book_img: book_img,
        title: title,
        description: description,
        publisher: publisher,
        edition: edition,
        pages: pages,
        price: price,
        author: author,
      },
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
  };

  return (
    <div className="editBook" >
      <h1 style={{color: "#a24e12", marginLeft: "33rem"}}>Edit book</h1>
      <table className="table">
        <tr>
          <th>URL picture</th>
          <th> <input
        type="text"
        placeholder="URL picture here "
        onChange={(e) => {
          setBook_img(e.target.value);
        }}
      />
      </th>
      </tr>
      <tr>
      <th>Title</th>
          <th><input
        type="text"
        placeholder="title here "
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      /></th>
      </tr>
      <tr>
      <th>Description</th>
          <th> <input
        type="text"
        placeholder="description here "
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      /></th>
     </tr>
     <tr>
     <th>Publisher</th>
          <th> <input
        type="text"
        placeholder="publisher here "
        onChange={(e) => {
          setPublisher(e.target.value);
        }}
      /></th>
     </tr>
     <tr><th>Edition</th>
          <th>
      <input
        type="text"
        placeholder="edition here "
        onChange={(e) => {
          setEdition(e.target.value);
        }}
      /></th></tr>
      <tr><th>pages Number</th>
          <th>
      <input
        type="Number"
        placeholder="pages here "
        onChange={(e) => {
          setPages(e.target.value);
        }}
      /></th></tr>
       <tr><th>Price</th>
          <th>
      <input
        type="Number"
        placeholder="price here "
        onChange={(e) => {
          setPrice(e.target.value);
        }}
      /></th></tr>
       <tr>
       <th>Author</th>
          <th><input
        type="text"
        placeholder="author here "
        onChange={(e) => {
          setAuthor(e.target.value);
        }}
      /></th></tr>
<tr>
<th></th>
          <th>
      <button onClick={EditBook} className= "button-Add">
        Add Book
      </button>
      </th>

      </tr>
      </table>
      </div>
  );
}

export default EditBookPage;
