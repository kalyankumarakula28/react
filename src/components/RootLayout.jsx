import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { Provider } from "react-redux";
import store from "../store/store";

const RootLayout = () => {
  return (
    <Provider store={store}>
      <div>
        <Navbar />
        <main>
          <Outlet />
        </main>
      </div>
    </Provider>
  );
};

export default RootLayout;
