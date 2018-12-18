import * as actionTypes from './actions';
import data from './clients.json';
const initialState = {
    data:data.Customers,
    selected: {
        Country: 0,
        City: 0,
        Id:0
    },
    MapFocus:''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_DATA:
        console.log(state.data[selected.Country])
            return {
                ...state
            }
        case actionTypes.UPDATE_SELECTED:
            console.log(action)
            let selected = {...state.selected}
            selected[action.typeData]=action.selected;
            return {
                ...state,
                selected:selected
            }
        
    }
    return state;
};

export default reducer;

