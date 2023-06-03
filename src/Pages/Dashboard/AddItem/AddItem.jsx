import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const img_hosting_token = import.meta.env.VITE_img_upload_key;

const AddItem = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [axiosSecure] = useAxiosSecure();
  const img_hosting_url = `https://api.imgbb.com/1/upload?expiration=600&key=${img_hosting_token}`;

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);

    fetch(img_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageData) => {
        if (imageData.success) {
          const imgURL = imageData.data.display_url;
          const { name, price, category, recipe } = data;
          const newItem = {
            name,
            price: parseFloat(price),
            category,
            image: imgURL,
            recipe,
          };
          axiosSecure.post("/menu", newItem).then((data) => {
            if (data.data.insertedId) {
              reset();
              Swal.fire({
                position: "center",
                icon: "success",
                title: "Added Food Successfully",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
        }
      });
  };
  console.log(errors);
  return (
    <div className="w-full h-full">
      <Helmet>
        <title>Bistro Boss || AddItem</title>
      </Helmet>
      <SectionTitle
        subHeading={"Hurry Up!"}
        heading={"MANAGE ALL ITEMS"}
      ></SectionTitle>

      <div className="bg-gray-50 p-24 rounded-xl mx-10 ">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control">
            <label className="label mb-1">
              <span className="label-text text-xl font-semibold">
                Recipe name*
              </span>
            </label>
            <input
              type="text"
              {...register("name", { required: true })}
              placeholder="Recipe name"
              className="input input-bordered"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="form-control">
              <label className="label mb-1">
                <span className="label-text text-xl font-semibold">
                  Category*
                </span>
              </label>
              <select
                defaultValue="Select Category"
                {...register("category", { required: true })}
                className="select select-bordered w-full max-w-xs"
              >
                <option disabled>Select Category</option>
                <option value="Pizza">Pizza</option>
                <option value="Soup">Soup</option>
                <option value="Salad">Salad</option>
                <option value="Dessert">Dessert</option>
                <option value="Drinks">Drinks</option>
              </select>
            </div>
            <div className="form-control">
              <label className="label mb-1">
                <span className="label-text text-xl font-semibold">Price*</span>
              </label>
              <input
                type="number"
                {...register("price", { required: true })}
                placeholder="Price"
                className="input input-bordered"
              />
            </div>
          </div>
          <div className="form-control mt-5">
            <label className="label mb-1">
              <span className="label-text text-xl font-semibold">
                Recipe Details*
              </span>
            </label>
            <textarea
              {...register("recipe", { required: true })}
              id=""
              cols="20"
              rows="5"
              placeholder="Detail description"
              className="input input-bordered pt-3 h-[250px] resize-none"
            ></textarea>
          </div>
          <input
            type="file"
            {...register("image", { required: true })}
            className="file-input w-full max-w-xs mt-6 bg-[#E8E8E8]"
          />
          <div className="form-control mt-6 w-48 text-xl font-bold">
            <input
              type="submit"
              value=" Add Item"
              className="btn bg-[#835D23] text-white"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddItem;
