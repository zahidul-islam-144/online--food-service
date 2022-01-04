import { combineReducers } from "redux";
import { cardReducer } from "./cardReducer";

const reduceCards = combineReducers ({
    allCards: cardReducer
})
export default reduceCards;