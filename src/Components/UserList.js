import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchStart } from "../Service/Action/Action";
import Loader from "../assets/loader.gif";
import "./User.css";

const UserList = () => {
  const ViewData = useSelector((state) => {
    return state;
  });

  const [userName, setUserName] = useState("majidkhan0786");
  const ChangeUserName = (e) => {
    setUserName(e.target.value);
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchStart(userName));
  }, [userName]);

  const { data, loading } = ViewData?.getDataStore;
  return (
    <>
      <div className="container">
        <input
          value={userName}
          onChange={ChangeUserName}
          type="text"
          class="form-control"
          placeholder="Search  Git Hub Users"
        />
      </div>
      {loading ? (
        <img src={Loader} alt="loader" />
      ) : (
        <>
          <div className="card-main-div">
            <h2 style={{ textAlign: "center" }}>User Profile Card</h2>
            <div className="usercard">
              <img
                src={data.avatar_url}
                alt="John"
                style={{ width: "100%", height: "15%" }}
              />
              <h3 className="username">{data.login}</h3>
              <p className="title">created_at: {data.created_at}</p>
              <p>User.id: {data.id}</p>
              <a>
                <p style={{ fontSize: 12 }}>User Rep : {data.repos_url}</p>
              </a>
              <p>
                <button>Contact</button>
              </p>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default UserList;
