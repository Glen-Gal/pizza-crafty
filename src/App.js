import { Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Error from "./pages/Error";
import Landing from "./pages/Landing";
import Customize from "./pages/Customize";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/pizzacrafty" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="customize" element={<Customize />} />
        {/* <Route path="pizza" element={<Trending />} /> */}
      </Route>
      <Route path="*" element={<Error />} />
      {/* <Route path="/room/id/payment" element={<Payment />} />
      <Route path="/room/id/payment/success" element={<Success />} /> */}
    </Routes>
  );
}

export default App;
