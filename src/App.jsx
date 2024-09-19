import { Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import { routes } from "./routes/routes";
import { Provider } from "react-redux";
import { store } from "./app/store";
import CustomPWA from "./customPWA";

function App() {
  return (
    <div className="w-full min-h-screen overflow-x-hidden">
      <Provider store={store}>
          <Navbar />
          <Routes>
            {routes?.map(({ path, element }, index) => (
              <Route key={index} path={path} element={element} />
            ))}
          </Routes>
          <Footer />
      </Provider>
    </div>
  );
}

export default App;
