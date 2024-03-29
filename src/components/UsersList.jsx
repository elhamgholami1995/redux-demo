import { useEffect } from "react";
import fetchUsers from "../Redux/User/userActions";
import { useDispatch, useSelector } from "react-redux";

function UsersList() {
  const dispatch = useDispatch();
  const { loading, error, data } = useSelector((state) => state.user);
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  return (
    <div>
      <h2> Users List</h2>
      {data && data.map((user) => <li key={user.id}>{user.name}</li>)}
    </div>
  );

  // return (
  //   <div>
  //     <h2> Users List</h2>
  //     {state.loading ? (
  //       <p>Loading...</p>
  //     ) : state.error ? (
  //       <p>{state.error}</p>
  //     ) : (
  //       <div>
  //         {state.data &&
  //           state.data.map((user) => <li key={user.id}>{user.name}</li>)}
  //       </div>
  //     )}
  //   </div>
  // );
}

export default UsersList;
