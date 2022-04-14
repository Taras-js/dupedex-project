import { combineReducers } from "redux";
import { todoReducer } from "./todoReducer";

const rootReducer = combineReducers({todo: todoReducer});
{
    todo: {
        // ... potatoes, and other state managed by the todoReducer ...
    }
}
export type RootState = ReturnType<typeof rootReducer>
export default rootReducer;