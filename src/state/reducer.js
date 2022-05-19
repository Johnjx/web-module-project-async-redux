import { combineReducers } from "redux";
import * as types from "./action-types"

const mainInfo = (mainInfoState = {}, action) => {
    switch (action.type) {
        case types.GET_INFO: {
            const infoFromServer = action.payload
            return infoFromServer
        }
        default:
            return mainInfoState
    }
}

const classCards = (classCardsState = [], action) => {
    switch(action.type) {
        case types.GET_CLASS_CARDS: {
            const cardsFromServer = action.payload
            return cardsFromServer
        }
        default:
            return classCardsState
    }
}

export default combineReducers({
    mainInfo,
    classCards,
})