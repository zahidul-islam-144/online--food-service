import {ActionTypes} from "../contants/actionTypes" 
export const setCards = (cards) => { //cards is a kind of an argument
    return {
        type:ActionTypes.SET_CARDS,
        playLoad:cards
    }
}
export const selectedCard = (card) => {
    return {
        type:ActionTypes.SELECTED_CARDS,
        playLoad:card
    }
}