import Header from "./Header";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";

const RootLayout = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Toaster
        toastOptions={{
          style: {
            background: "#fefefe",
          },
        }}
      />
    </div>
  );
};

export default RootLayout;
