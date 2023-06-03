import React from "react";
import useAuth from "../../../Hooks/useAuth";

const UserHome = () => {
  const { user } = useAuth();
  return (
    <div>
      <h2 className="text-4xl font-bold"> HI WELCOME BACK! {user?.name}</h2>
    </div>
  );
};

export default UserHome;
