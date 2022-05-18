import { combineReducers } from "redux";
import * as types from "./action-types"



const mainInfo = (mainInfoState = {}, action) => {
    switch (action.type) {
        case types.GET_INFO: {
            const infoFromServer = action.payload
            return console.log(infoFromServer)
        }
        default:
            return mainInfoState
    }
}

export default combineReducers({
    mainInfo,
})