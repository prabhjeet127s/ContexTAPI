import { useContext} from "react";
import { Link } from "react-router-dom";
import { IoReorderThreeOutline } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import UserContext from "../Context/UserContext";

const Sidebar = () => {

  const {setsidebaropen,sidebaropen}=useContext(UserContext);


  return (
    <>
      
      <div className={`sm:hidden  ${sidebaropen?"bg-no":"bg-gray-600" } text-white p-4`}>
        <button onClick={() => setsidebaropen(true)}>
          <IoReorderThreeOutline size={30} />
        </button>
      </div>


      <div
        className={`fixed top-0 left-0 h-full w-60 bg-gray-600 shadow-lg transform transition-transform duration-300 
        ${sidebaropen? "translate-x-0" : "-translate-x-full"} 
        sm:hidden`}
      >
        <div className="p-4">
          <button onClick={() => setsidebaropen(false)}>
            <IoClose size={28} />
          </button>
        </div>
        <div className="flex flex-col gap-6 p-6 text-white text-lg">
          <Link to="/" >Home</Link>
          <Link to="/product" >Product</Link>
          <Link to="/contact" >Contact</Link>
        </div>
      </div>
    </>
  );
};
export default Sidebar;