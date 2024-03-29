import { useEffect } from "react";
import fetchUsers from "../Redux/User/userActions";
import { useDispatch, useSelector } from "react-redux";

function UsersList() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.user);
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);
  return <div>UsersList</div>;
}

export default UsersList;
