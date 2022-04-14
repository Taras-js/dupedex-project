import { combineReducers } from "redux-immutable";
import { Record } from "immutable";


export const initialState = Record({
    todo: Record({})(),

})();
const rootReducer = combineReducers({});

export type RootState = ReturnType<typeof rootReducer>
export default rootReducer;