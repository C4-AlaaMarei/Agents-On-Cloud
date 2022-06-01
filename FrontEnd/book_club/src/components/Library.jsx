import { Routes, Route, Link } from "react-router-dom";

import React, { useEffect, useState } from "react";
import jwt from "jwt-decode";
import axios from "axios";
// import { Routes, Route, Link } from "react-router-dom";
import { useSelector } from "react-redux";
//   const [image, setImage] = useState("");
//   const [user_id, setUser_id] = useState("");
// import Nav from "./Nav";
// import Register from "./components/Register";
// import Login from "./components/Login";
// // import Home from "./components/Home";
// import LeftNav from "./LeftNav";
// // import Message from "./components/Message";
// // import Profile from "./components/Profile";
// import RightNav from "./RightNav";
// // import Main from "./components/Main";
function Library() {

  const { token, isLoggedIn } = useSelector((state) => {
    return {
      token: state.loginReducer.token,
      isLoggedIn: state.loginReducer.isLoggedIn,
    };
  });
  const [message, setMessage] = useState("");

    const [books, setBooks] = useState("");

  const getAllIBooks = async () => {
    try {
      const res = await axios.get("http://localhost:5000/book/");
      console.log(res);

      if (res.data.success) {
        // dispatch(setTweets(res.data.items));
        setBooks(res.data.books);

        console.log(res.data.books);
        setMessage("");
      } else throw Error;
    } catch (error) {
      if (!error.response.data.success) {
        return setMessage(error.response.data.message);
      }
      setMessage("Error happened while Get Data, please try again");
    }
  };

  const deleteBook = async (id) => {
    await axios
      .delete(
        `http://localhost:5000/book/${id}`,

        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((result) => {
      })
      .catch((err) => {});
  };

  useEffect(() => {
    getAllIBooks();
  }, []);

  return (
    <div className="Library">
      <div className="allTwbooks">
        {books.map((book, index) => {
          return (
            <div
              key={index}
              className="singlebook"
              style={{ marginTop: "30px" }}
            >
              <p style={{ height: "200px" }}>{book.book_title}</p>
              <button
                class="btn btn-primary"
                style={{ marginRight: "30px" }}
                onClick={(e) => {
                  deleteBook(book.id);
                }}
              >
                Delete this Book{" "}
              </button>
              <button
                class="btn btn-primary"
                style={{ marginLeft: "30px" }}
                onClick={(e) => {
                  // getWorkerByServiceId(service.id);
                }}
              >
                Add to Reading list{" "}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Library;
