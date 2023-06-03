import React from "react";
import useCart from "../../../Hooks/useCart";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const MyCart = () => {
  const [cart, refetch] = useCart();
  const total = cart.reduce((sum, item) => item.price + sum, 0);

  const handleDelete = (item) => {
    console.log(item);
    Swal.fire({
      title: "Are you sure?",
      text: "This Food Is Delete!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/carts/${item._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };

  return (
    <div className="w-full h-full">
      <SectionTitle
        subHeading={"My Cart"}
        heading={"WANNA ADD MORE?"}
      ></SectionTitle>
      <div className="p-12 ">
        <div className="uppercase md:flex justify-between items-center mb-8">
          <h2>Total orders: {cart.length}</h2>
          <h2>total price: ${total}</h2>
          <Link to="/dashboard/payment"><button className="btn btn-error btn-sm">Pay</button></Link>
        </div>
        <div>
          <div className="overflow-x-auto w-full">
            <table className="table w-full">
              {/* head */}
              <thead>
                <tr>
                  <th></th>
                  <th>ITEM IMAGE</th>
                  <th>ITEM NAME</th>
                  <th>PRICE</th>
                  <th>ACTION</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item, index) => (
                  <tr key={item._id}>
                    <td>{index + 1}</td>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img
                              src={item.image}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>{item.name}</td>
                    <td className="text-end">${item.price}</td>
                    <td>
                      <button
                        onClick={() => handleDelete(item)}
                        className="btn btn-md bg-[#B91C1C] text-white"
                      >
                        <FaTrashAlt></FaTrashAlt>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
              {/* foot */}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCart;
