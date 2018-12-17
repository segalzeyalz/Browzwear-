import * as actionTypes from './actions';
import data from './clients.json';
const initialState = {
    data:data.Customers
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_DATA:
            return {
                ...state
            }
    }
    return state;
};

export default reducer;

