import Header from "./components/Header";
import AddRestaurantForm from "./components/AddOptionForm";
import Suggestions from "./components/Suggestions";
import Cards from "./components/Cards";
import Footer from "./components/Footer";

import { AppProvider } from "./contexts/AppContext";
import { NavLink, Route, Routes } from "react-router-dom";
import RandomPicker from "./components/RandomPicker";

function App() {
  return (
    <>
      <div className="padding py-10">
        <AppProvider>
          <Header />
          <AddRestaurantForm />
          <Suggestions />
          <nav className="my-5">
            <ul className="flex gap-3 text-center">
              <NavLink to="/" className="flex-1">
                Shuffle and Choose
              </NavLink>
              <NavLink to="/random-picker" className="flex-1">
                Random Picker Mode
              </NavLink>
            </ul>
          </nav>
          <Routes>
            <Route path="/" element={<Cards />} />
            <Route path="/random-picker" element={<RandomPicker />} />
          </Routes>
        </AppProvider>
      </div>
      {/* <div className="padding relative z-10 grid h-[20vh] items-center bg-black text-white">
        <Footer />
      </div> */}
    </>
  );
}

export default App;
