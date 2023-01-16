
import axios from "axios";
import { createListFail, createListStart, createListSuccess, deleteListsFail, deleteListsStart, deleteListsSuccess, getListFail, getListStart, getListSuccess } from "./ListAction";
export const getLists = async (dispatch) => {
  dispatch(getListStart());
  try {
    const res = await axios.get("http://localhost:5000/api/list", {
      headers: {
        token: "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYThjNTZkODIzYjQ3MDM2ZjQzNzg5YiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3MzcyNTQ4MSwiZXhwIjoxNjc0MTU3NDgxfQ.kgudZMDluBdxjFYDY_5HXE8GmXS0gsO6aOmNsiOtw2A" 
      },
    });
    dispatch(getListSuccess(res.data));
  } catch (error) {
    dispatch(getListFail());
  }
};

export const createList = async (movie, dispatch) => {
  dispatch(createListStart());
  try {
    const res = await axios.post("http://localhost:5000/api/list", movie, {
      headers: {
        token: "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYThjNTZkODIzYjQ3MDM2ZjQzNzg5YiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3MzcyNTQ4MSwiZXhwIjoxNjc0MTU3NDgxfQ.kgudZMDluBdxjFYDY_5HXE8GmXS0gsO6aOmNsiOtw2A" 
      },
    });
    dispatch(createListSuccess(res.data));
  } catch (error) {
    dispatch(createListFail());
  }
};

export const deleteLists = async (id, dispatch) => {
  dispatch(deleteListsStart());
  try {
     await axios.delete("http://localhost:5000/api/list/" + id, {
      headers: {
        token: "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYThjNTZkODIzYjQ3MDM2ZjQzNzg5YiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3MzcyNTQ4MSwiZXhwIjoxNjc0MTU3NDgxfQ.kgudZMDluBdxjFYDY_5HXE8GmXS0gsO6aOmNsiOtw2A" 
      },
    });
    dispatch(deleteListsSuccess(id));
  } catch (error) {
    dispatch(deleteListsFail());
  }
};
