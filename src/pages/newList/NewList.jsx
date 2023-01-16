import { useState } from "react";

import "./newList.css";
import { createMovie, getMovie } from "../../context/movieContext/movieApiCall";
import { useContext } from "react";
import { MovieContext } from "../../context/movieContext/MovieContext";
import { ListContext } from "../../context/listContext/ListContext";
import { useEffect } from "react";

export default function NewList() {
  const [list, setList] = useState(null);
  const { dispatch } = useContext(ListContext);
  const { movies, dispatch: dispatchMovie } = useContext(MovieContext);

  const handleChange = (e) => {
    const value = e.target.value;
    setList({ ...list, [e.target.name]: value });
  };
  
  useEffect(() => {
getMovie(dispatchMovie)
  }, [dispatchMovie])

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   createMovie(movie, dispatch);
  // };
  
  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New List</h1>
      <form className="addProductForm">
        <div className="formLeft">
          <div className="addProductItem">
            <label>Title</label>
            <input
              type="text"
              placeholder="Popular Movies"
              name="title"
              onChange={handleChange}
            />
          </div>
          <div className="addProductItem">
            <label>Genre</label>
            <input
              type="text"
              placeholder="action"
              name="genre"
              onChange={handleChange}
            />
          </div>
          <div className="addProductItem">
            <label>Type</label>
            <select name="type" onChange={handleChange}>
              <option>Type</option>
              <option value="movie">Movie</option>
              <option value="series">Series</option>
            </select>
          </div>
        </div>
        <div className="formRight">
          <div className="addProductItem">
            <label>Content</label>
            <select
              multiple
              name="content"
              
              style={{ height: "280px" }}
            >
              {movies?.map((movie) => (
               
                <option key={movie._id} value={movie._id}>
                  {movie.title}
                </option>
              ))}
            </select>
          </div>
        </div>
        <button className="addProductButton" >
          Create
        </button>
      </form>
    </div>
  );
}
