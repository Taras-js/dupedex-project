import { combineReducers } from "redux-immutable";
import { Record } from "immutable";
import todoReducer, { initialState as DefaultStateTodo } from "./todoReducer";

export const initialState = Record({
  todo: Record(DefaultStateTodo)(),
})();
const rootReducer = combineReducers({
  todoReducer
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;