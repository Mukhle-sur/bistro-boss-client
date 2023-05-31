import React, { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useCart from "../../Hooks/useCart";

const ShopCart = ({ item }) => {
  const { name, image, recipe, price, _id } = item;
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [, refetch] = useCart();

  const handleAddToCart = (item) => {
    if (user) {
      const cartItem = { menuId: _id, price, image, name, email: user.email };
      console.log(cartItem);
      fetch("http://localhost:5000/carts", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(cartItem),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.insertedId) {
            refetch();
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Your Food is Added",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    } else {
      Swal.fire({
        title: "Add to This Product ? Please Login",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Login",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="Shoes" className="w-full h-80" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p className="text-base text-[#151515]">{recipe}</p>
        <p className="py-2 px-5 bg-black text-white text-base font-semibold absolute top-5 right-5">
          ${price}
        </p>
        <div className="text-center">
          <button
            onClick={() => handleAddToCart(item)}
            className=" hover:bg-[#1F2937] py-5 px-8 rounded-lg bg-[#E8E8E8] border-b-4 border-[#BB8506] text-xl font-medium uppercase text-[#BB8506] hover:ease-in-out duration-300"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShopCart;
