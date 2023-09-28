import { Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Error from "./pages/Error";
import Landing from "./pages/Landing";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/home" element={<Layout />}>
        <Route index element={<Home />} />
        {/* <Route path="pizza" element={<Trending />} /> */}
      </Route>
      <Route path="*" element={<Error />} />
      {/* <Route path="/room/id/payment" element={<Payment />} />
      <Route path="/room/id/payment/success" element={<Success />} /> */}
    </Routes>
  );
}

export default App;
