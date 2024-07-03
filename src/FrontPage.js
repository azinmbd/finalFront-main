import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function FrontPage() {
  const navigate = useNavigate();
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get("https://backendbookstore.onrender.com/")
      .then((response) => {
        setBooks(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`https://backendbookstore.onrender.com/${id}`)
      .then((response) => {
        console.log(response);
        const newBook = books.filter((item) => item._id !== id);
        setBooks(newBook);
      })
      .catch((error) => {
        console.error(error);
      });
  };



  return (
    <div className="BookList">
     
      <div className="col-md-12 ">
        <br />
        <h2 className="display-4 text-center">Books List</h2> 
        <div className="bookcount">{books.length}</div>
      </div>
      <div className="col-md-11">
        <a
          href=""
          onClick={(e) => {
            e.preventDefault();
            navigate("/addbook");
          }}
          className="btn btn-info float-right"
        >
          + Add New Book
        </a>
        <br />
        <br />


        <hr />
      </div>
      <div className="list" style={{ display: "flex", flexWrap: "wrap" , justifyContent:"center"}}>
        {books.map((item) => (
          <div
            key={item._id}
            className="card-container"
            style={{
              flexBasis: "300px",
              marginRight: "20px",
              marginBottom: "20px",
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1495446815901-a7297e633e8d"
              alt="Books"
              height="200"
            />
            <div className="desc">
              <h2>
                <a href={`/${item._id}`}>{item.title}</a>
              </h2>
              <h2>{item.author}</h2>
              <div className="d-flex justify-content-between">

                 <p>{item.description}</p>
              <button
                className="btn btn-secondary float-left"
                onClick={() => handleDelete(item._id)}
              >
                x
              </button>
              </div>
        
             
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
