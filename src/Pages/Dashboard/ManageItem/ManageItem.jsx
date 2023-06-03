import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useMenu from "../../../Hooks/useMenu";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { FaTrashAlt } from "react-icons/fa";

const ManageItem = () => {
  const [menu, , refetch] = useMenu();
  const [axiosSecure] = useAxiosSecure();

  const handleDelete = (item) => {
    console.log(item);
    Swal.fire({
      title: "Are you sure?",
      text: "This Item Is Delete!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/menu/${item._id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire("Deleted!", "Your Item has been deleted.", "success");
          }
        });
      }
    });
  };
  return (
    <div className="w-full h-full">
      <SectionTitle
        subHeading={"Hurry Up"}
        heading={"Manage All Item"}
      ></SectionTitle>

      <div className="overflow-x-auto px-4">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>##</th>
              <th>ITEM IMAGE</th>
              <th>ITEM NAME</th>
              <th>PRICE</th>
              <th>ACTION</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {menu.map((item, index) => (
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
                <td className="text-right">${item.price}</td>
                <td>
                  <button className="btn btn-ghost btn-xs">Update</button>
                </td>
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
        </table>
      </div>
    </div>
  );
};

export default ManageItem;
