import React, { useState } from "react";
import Card from "./Card";
import "../App.css";
import axios from "axios";

const Main = () => {
  const [search, setSearch] = useState("");
  const [bookData, setData] = useState([]);
  const searchBook = (evt) => {
    if (evt.key === "Enter") {
      axios
        .get(
          "https://www.googleapis.com/books/v1/volumes?q=" +
            search +
            "&key=AIzaSyATj_K7XjT780aNIEdewfZu0UPicg1PSII" +
            "&maxResults=40"
        )
        .then((res) => setData(res.data.items))
        .catch((err) => console.log(err));
    }
  };
  return (
    <>
      <header className="header">
        <div className="headerAnimation">
          <h1 className="animatedHeadings">One Click to Your Next Book</h1>
          <form className="form" onSubmit={(e) => e.preventDefault()}>
            <div className="inputContainer">
              <input
                className="input"
                type="text"
                placeholder="Enter your book name"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={searchBook}
              />
              <button className="btn" type="button">
                <ion-icon className="icon" name="search-outline"></ion-icon>
              </button>
            </div>
          </form>
        </div>
      </header>
      <main>
        <div className="container">{<Card book={bookData} />}</div>
      </main>
    </>
  );
};

export default Main;
// AIzaSyATj_K7XjT780aNIEdewfZu0UPicg1PSII
