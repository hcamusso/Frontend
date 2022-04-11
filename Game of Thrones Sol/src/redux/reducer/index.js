// Importa las actions types que necesites acá:


const initialState = {
    houses: [],
    house: {},
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        // Acá va tu código:
        case "CREATE_HOUSE": {
            return ({
                ...state, houses: [...state.houses, action.payload]
            })
        }
        case "GET_HOUSE": {
            return ({
                 ...state, house: action.payload
            })
        }
        case "GET_ALL_HOUSES": {
            return ({
                ...state,houses:[...action.payload]
            })
        }
        case "DELETE_HOUSE": {
            return ({
                ...state, houses: state.houses.filter(e => e.id != action.payload)
            })
        }


        default:
            return state
    };
};

export default rootReducer;
