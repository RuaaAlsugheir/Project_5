import React from "react";
import BookPage from "./../bookPage/index";
import "../bookPage/bookPage.css";
import CategoryPage from "../Category/index";

export default function Admin() {
  return (
    <>
      <BookPage />
      <CategoryPage/>
    </>
  );
}
