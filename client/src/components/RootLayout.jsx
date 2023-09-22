import Header from "./Header";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";

const RootLayout = () => {
  return (
    <div>
      <Header />
      <main className="py-8 px-6">
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
