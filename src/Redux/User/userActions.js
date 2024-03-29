import axios from "axios";
import {
  FETCH_USER_FAILURE,
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
} from "./userTypes";

function fetchUsersRequest() {
  return {
    type: FETCH_USER_REQUEST,
  };
}
function fetchUsersSuccess(users) {
  return {
    type: FETCH_USER_SUCCESS,
    payload: users,
  };
}

function fetchUsersFailure(error) {
  return {
    type: FETCH_USER_FAILURE,
    payload: error,
  };
}

export default function fetchUsers() {
  return (dispatch) => {
    dispatch(fetchUsersRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => dispatch(fetchUsersSuccess(res.data)))
      .catch((err) => dispatch(fetchUsersFailure(res.message)));
  };
}
