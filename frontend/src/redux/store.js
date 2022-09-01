import { createStore } from "redux";
import { userReducer } from "./user.js/userReducer";

// Create Store to store all the required states of the project
const store = createStore(userReducer);

export default store;
