import React, { useState } from "react";
import Modal from "./Modal"; // Import your Modal component

export default function Card({ book }) {
  const [show, setShow] = useState(false); // State to control modal visibility
  const [bookItem, setBookItem] = useState(null); // Store the selected book item

  const handleCardClick = (item) => {
    setShow(true);
    setBookItem(item); // Set the selected book item when card is clicked
  };

  return (
    <>
      {book.map((item) => {
        let thumbnail = item.volumeInfo?.imageLinks?.smallThumbnail || ""; // Safely access image
        let authors = item.volumeInfo?.authors?.join(", ") || "Unknown Author"; // Safe authors

        if (thumbnail) {
          return (
            <div
              key={item.id} // Use a unique key for each card
              className="card"
              onClick={() => handleCardClick(item)} // Show the modal with the clicked item
            >
              <img src={thumbnail} className="cardBook" alt="book" />
              <div className="cardBody">
                <h3 className="title">
                  {item.volumeInfo?.title || "No Title"}
                </h3>
                <p className="authors">{authors}</p>
              </div>
            </div>
          );
        }

        return null;
      })}

      {/* Only show the Modal if 'show' is true and 'bookItem' exists */}
      {show && bookItem && (
        <Modal show={show} item={bookItem} closeModal={() => setShow(false)} />
      )}
    </>
  );
}
