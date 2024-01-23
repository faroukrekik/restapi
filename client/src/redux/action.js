import axios from "axios";
import { GET_USERS } from "./actionTypes";

export const getUsers = () => async (dispatch) => {
  try {
    const res = await axios.get("/get");
    console.log(res);
    dispatch({
      type: GET_USERS,
      payload: res.data,
    });
  } catch (error) {
    alert("get error");
  }
};
