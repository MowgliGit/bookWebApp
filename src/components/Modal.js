import React from "react";

const Modal = ({ show, item, closeModal }) => {
  if (!show || !item) {
    return null;
  }

  let thumbnail = item.volumeInfo?.imageLinks?.smallThumbnail || "";

  return (
    <div className="overlay">
      <div className="overlayInner">
        <button className="close" onClick={closeModal}>
          <ion-icon name="close-outline"></ion-icon>
        </button>
        <div className="innerBox">
          <img src={thumbnail} className="modalImg" alt="book" />
          <div className="infoModal">
            <h1 className="modalTitle">
              {item.volumeInfo?.title || "No Title Available"}
            </h1>
            <h3 className="modalAuthor">
              {item.volumeInfo?.authors?.join(", ") || "Unknown Author"}
            </h3>
            <h4 className="modalPublisher">
              {item.volumeInfo?.publisher || "Unknown Publisher"}{" "}
              <span>{item.volumeInfo?.publishedDate || "No Date"}</span>
            </h4>
            <a href={item.volumeInfo?.previewLink || "#"}>
              <button className="modalBtn">More</button>
            </a>
          </div>
        </div>
        <p className="descriptionModal">
          {item.volumeInfo?.description || "No Description Available"}
        </p>
      </div>
    </div>
  );
};

export default Modal;
