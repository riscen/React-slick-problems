import { createStore } from "redux";
import rootReducer from "../src/reducer";

export const store = createStore(rootReducer);
