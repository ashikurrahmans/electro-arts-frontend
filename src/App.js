import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Menu from "./Components/Menu/Menu";
import About from "./Components/About/About";
import LogIn from "./Components/Authentication/LogIn";
import Signup from "./Components/Authentication/Signup";
import NotFound from "./Components/NotFound/NotFound";

function App() {
  return (
    <div>
      <Menu>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Menu>
    </div>
  );
}

export default App;
