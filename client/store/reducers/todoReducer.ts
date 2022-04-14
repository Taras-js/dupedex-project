import {GET_TODOS} from "../shared/types";
import { Map, Record } from 'immutable';
import {Store} from "redux";
import { ActionType } from '../shared/types';
import * as Actions from '../actions';

export const defaultState = {
    todo: Map<unknown, Store>(),
};

export default (state: Record<typeof defaultState>, action: ActionType<typeof Actions>) => {
    switch (action.type) {
        case GET_TODOS: {
            return state.set(stateValue, value);
        }
        default: {
            return state;
        }
    }
}

// class ActionType<T> {
// }
//
// export const todoReducer = (state: Record<typeof defaultState>, action: ActionType<typeof Actions>) => {
//     switch (action.type) {
//         case GET_TODOS: {
//             return state.set('fetchStatus', status.GET_STATUS_TODOS);
//         }

        // case GET_STORES_SUCCEEDED: {
        //     const { payload: stores } = action;
        //     return state
        //         .set('fetchStatus', status.FETCH_STATUS_SUCCEEDED)
        //         .set('stores', Map(stores));
        // }
        //
        // case GET_STORES_FAILED: {
        //     return state.set('fetchStatus', status.FETCH_STATUS_FAILED);
        // }
        //
        // case GET_TABLES_EXTRACTED: {
        //     const { payload: tables } = action;
        //     return state.set('tables', Map(tables));
        // }
        //
        // case GET_TIMES_EXTRACTED: {
        //     const { payload: times } = action;
        //     return state.set('times', OrderedMap(times));
        // }
        //
        // case GET_SPECIFIC_TIMES_EXTRACTED: {
        //     const { payload: specificTimes } = action;
        //     return state.set('specificTimes', OrderedMap(specificTimes));
        // }

//         default: {
//             return state;
//         }
//     }
// };
