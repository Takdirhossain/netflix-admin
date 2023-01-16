import { createMovieFail, createMovieStart, createMovieSuccess, deleteMovieFail, deleteMovieStart, deleteMovieSuccess, getMovieFail, getMovieStart, getMovieSuccess } from "./MovieAction";
import axios from "axios";
export const getMovie = async (dispatch) => {
  dispatch(getMovieStart());
  try {
    const res = await axios.get("http://localhost:5000/api/movies", {
      headers: {
        token: "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYThjNTZkODIzYjQ3MDM2ZjQzNzg5YiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3MzcyNTQ4MSwiZXhwIjoxNjc0MTU3NDgxfQ.kgudZMDluBdxjFYDY_5HXE8GmXS0gsO6aOmNsiOtw2A" 
      },
    });
    dispatch(getMovieSuccess(res.data));
  } catch (error) {
    dispatch(getMovieFail());
  }
};
export const createMovie = async (movie, dispatch) => {
  dispatch(createMovieStart());
  try {
    const res = await axios.post("http://localhost:5000/api/movies", movie, {
      headers: {
        token: "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYThjNTZkODIzYjQ3MDM2ZjQzNzg5YiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3MzcyNTQ4MSwiZXhwIjoxNjc0MTU3NDgxfQ.kgudZMDluBdxjFYDY_5HXE8GmXS0gsO6aOmNsiOtw2A" 
      },
    });
    dispatch(createMovieSuccess(res.data));
  } catch (error) {
    dispatch(createMovieFail());
  }
};

export const deleteMovie = async (id, dispatch) => {
  dispatch(deleteMovieStart());
  try {
     await axios.delete("http://localhost:5000/api/movies/" + id, {
      headers: {
        token: "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYThjNTZkODIzYjQ3MDM2ZjQzNzg5YiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3MzcyNTQ4MSwiZXhwIjoxNjc0MTU3NDgxfQ.kgudZMDluBdxjFYDY_5HXE8GmXS0gsO6aOmNsiOtw2A" 
      },
    });
    dispatch(deleteMovieSuccess(id));
  } catch (error) {
    dispatch(deleteMovieFail());
  }
};
