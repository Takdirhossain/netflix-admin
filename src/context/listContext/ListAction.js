export const getListStart = () => {
    return{
        type: "GET_LISTS_START"
    }
}
export const getListSuccess = (lists) => {
    return{
        type: "GET_LISTS_SUCCESS",
        payload: lists
    }
}
export const getListFail = () => {
    return{
        type: "GET_LISTS_FAILL"
    }
}
// export const createMovieStart = () => {
//     return{
//         type: "CREATE_MOVIE_START"
//     }
// }
// export const createMovieSuccess = (movie) => {
//     return{
//         type: "CREATE_MOVIE_SUCCESS",
//         payload: movie
//     }
// }
// export const createMovieFail = () => {
//     return{
//         type: "CREATE_MOVIE_FAILL"
//     }
// }
export const deleteListsStart = () => {
    return{
        type: "DELETE_LISTS_START"
    }
}
export const deleteListsSuccess = (id) => {
    return{
        type: "DELETE_LISTS_SUCCESS",
        payload: id
    }
}
export const deleteListsFail = () => {
    return{
        type: "DELETE_LISTS_FAILL"
    }
}