import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuCart from "../../Shared/MenuCard/MenuCart";
import useMenu from "../../../Hooks/useMenu";

const PopularMenu = () => {
  const [menu] = useMenu();
  const popularMenu = menu.filter((item) => item.category === "popular");
  return (
    <section>
      <SectionTitle
        subHeading={"Check it out"}
        heading={"FROM OUR MENU"}
      ></SectionTitle>
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {popularMenu.map((item) => (
          <MenuCart key={item._id} item={item}></MenuCart>
        ))}
      </div>
      <div className="text-center">
        <button className="hover:text-white hover:btn-success py-5 px-8 rounded-lg border-b-4 border-[#1F2937] text-xl font-medium uppercase text-[#1F2937]">
          View Full Menu
        </button>
      </div>
    </section>
  );
};

export default PopularMenu;
