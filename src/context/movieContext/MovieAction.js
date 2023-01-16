export const getMovieStart = () => {
    return{
        type: "GET_MOVIE_START"
    }
}
export const getMovieSuccess = (movie) => {
    return{
        type: "GET_MOVIE_SUCCESS",
        payload: movie
    }
}
export const getMovieFail = () => {
    return{
        type: "GET_MOVIE_FAILL"
    }
}
export const createMovieStart = () => {
    return{
        type: "CREATE_MOVIE_START"
    }
}
export const createMovieSuccess = (movie) => {
    return{
        type: "CREATE_MOVIE_SUCCESS",
        payload: movie
    }
}
export const createMovieFail = () => {
    return{
        type: "CREATE_MOVIE_FAILL"
    }
}
export const deleteMovieStart = () => {
    return{
        type: "DELETE_MOVIE_START"
    }
}
export const deleteMovieSuccess = (id) => {
    return{
        type: "DELETE_MOVIE_SUCCESS",
        payload: id
    }
}
export const deleteMovieFail = () => {
    return{
        type: "DELETE_MOVIE_FAILL"
    }
}