import { Routes, Route, Link } from "react-router-dom";


import React, { useEffect, useState } from "react";
import jwt from "jwt-decode";
import axios from "axios";


//   const [message, setMessage] = useState("");
  const [books, setBooks] = useState("");
//   const [image, setImage] = useState("");
//   const [tweet_id, setTweet_id] = useState("");
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
// import Tweet from "./Tweet";
// import Tap from "./Tap";
function Library() {

    
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
        dispatch(deleteTweets(id));
        getUserTweets();
      })
      .catch((err) => {});
    }


  useEffect(() => {
    getAllIBooks();
  }, []);

  return (
    <div className="Library">
        <div className="allTweets">
        {books.map((book, index) => {
          return (
            <div key={index} className="singleTweet" style={{marginTop:"30px"}} >
              {/* <img src={tweet.image} alt={tweet.tweet} /> */}
              <p style={{ height: "200px" }}>{book.book_title}</p>
              <button
              class="btn btn-primary"
              style={{ marginRight:"30px"}}

                onClick={(e) => {
                  // getWorkerByServiceId(service.id);
                  // setTweet_id(tweet.id);
                  deleteBook(book.id);
                }}
              >
               Delete this Book{" "}
              </button>
              <button
                                      class="btn btn-primary"
                                      style={{ marginLeft:"30px"}}

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
