import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AddBook() {
  const navigate = useNavigate();
  const [book, setBook] = useState({
    title: "",
    author: "",
    description: "",
  });
  const [error, setError] = useState(false);
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setBook((prevBook) => ({
      ...prevBook,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      event.target.title.value == "" ||
      event.target.author.value == "" ||
      event.target.description.value == ""
    ) {
      setError(true);
    } else {
      axios
        .post("https://backendbookstore.onrender.com/", book)
        .then((response) => {
          console.log(response);
          // handle successful response
        })
        .catch((error) => {
          console.log(error);
          // handle error response
        });
      navigate("/");
    }
  };

  return (
    <div className="CreateBook">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <br />
            <a
              className="btn btn-info float-left"
              href=""
              onClick={(e) => {
                e.preventDefault();
                navigate("/");
              }}
            >
              Show BooK List
            </a>
          </div>
          <div className="col-md-8 m-auto">
            <h1 className="display-4 text-center">Add Book</h1>
            <p className="lead text-center">Create new book</p>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Title of the Book"
                  name="title"
                  className="form-control"
                  value={book.title}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Author"
                  name="author"
                  className="form-control"
                  value={book.author}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Describe this book"
                  name="description"
                  className="form-control"
                  value={book.description}
                  onChange={handleInputChange}
                />
              </div>
              <input type="submit" className="btn btn-info btn-block mt-4" />
            </form>
            {error ? (
              <div class="alert alert-danger" role="alert">
                Fill all the inputs
              </div>
            ) : (
              <span></span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
