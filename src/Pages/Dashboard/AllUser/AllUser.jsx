import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Helmet } from "react-helmet-async";
import { FaTrashAlt, FaUserCog } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const AllUser = () => {
  const [axiosSecure] = useAxiosSecure();

  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await axiosSecure.get("/users");
    return res.data;
  });
  const handleMakeAdmin = (user) => {
    fetch(`http://localhost:5000/users/admin/${user?._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "center",
            icon: "success",
            title: `${user?.name} is an admin now`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  const handleDelete = (user) => {};
  return (
    <div className="w-full h-full px-5">
      <Helmet>
        <title>Bistro Boss || All User</title>
      </Helmet>
      <h3 className="text-3xl font-bold mb-5">Total User : {users.length}</h3>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          {/* head */}
          <thead className="bg-red-300">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user?._id}>
                <td className="font-extrabold">{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  {user.role === "Admin" ? (
                    "Admin"
                  ) : (
                    <button
                      onClick={() => handleMakeAdmin(user)}
                      className="btn btn-md bg-[#D1A054] text-xl text-white"
                    >
                      <FaUserCog></FaUserCog>
                    </button>
                  )}
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(user)}
                    className="btn btn-md bg-[#B91C1C] text-white"
                  >
                    <FaTrashAlt></FaTrashAlt>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUser;
