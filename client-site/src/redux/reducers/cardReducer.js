import { ActionTypes } from "../contants/actionTypes";
const initialState = {
    products:[{
        id:1,
        title:"hello",
catagory:"programmer"
    }]
}

export const cardReducer = (state= initialState, {type, playload}) => {
    switch (type) {
        case ActionTypes.SET_CARDS:
return state;
            default:
                return state;
    }
}