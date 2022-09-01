import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import Signin from "./pages/signin/Signin";
import ProtectedRoutes from "./protectedRoutes";
import { Provider } from "react-redux";
import store from "./redux/store";
function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route element={<ProtectedRoutes />}>
          <Route index path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
        <Route path="register" element={<Register />} />
        <Route path="signin" element={<Signin />} />
      </Routes>
    </Provider>
  );
}

export default App;
