import { loginFailure, loginStart, loginSuccess } from "./AuthAction";
import axios from "axios";
const login = async (user, dispatch) => {
  dispatch(loginStart());
  try {
    const res = await axios.post("http://localhost:5000/api/auth/login", user);
    res.data.isAdmin && dispatch(loginSuccess(res.data));
  } catch(error) {
    dispatch(loginFailure());
  }
};
export default login;
