import "../scss/App.scss";
import Header from "./Header";
import Footer from "./Footer";
import Home from "../pages/Home";
import Landing from "../pages/Landing";
import { Route, Routes } from "react-router-dom";

function App() {

  return (
    <div className="body">
      <Header />
     
      <Routes>
        <Route path="/" element={<Landing />} />

        <Route
          path="/home"
          element={<Home />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
