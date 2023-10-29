import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <>
      <div className="w-full flex relative">
        <div className={`flex flex-col ease-in-out duration-500 w-full`}>
          <Header />
          <div className={`flex-grow w-[100%] pb-3`}>
            <Outlet />
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Layout;
