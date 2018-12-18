import * as actionTypes from './actions';
import data from './clients.json';
const initialState = {
    data:data.Customers,
    selected: {
        Country: '',
        City: '',
        ID:''
    },
    MapFocus:''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_DATA:
            return {
                ...state
            }
        case actionTypes.UPDATE_SELECTED:
            let selected = {...this.state.selected}
            selected[action.typeData]=action.val;
            return {
                ...state,
                selected:selected
            }
        
    }
    return state;
};

export default reducer;

