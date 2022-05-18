import * as types from "./action-types"
import axios from "axios";

const info = {
    method: 'GET',
    url: 'https://omgvamp-hearthstone-v1.p.rapidapi.com/info',
    headers: {
      'X-RapidAPI-Host': 'omgvamp-hearthstone-v1.p.rapidapi.com',
      'X-RapidAPI-Key': '9fd65bd146mshe4cb4ebeb3d9767p113054jsnf5dbadfcfd50'
    }
  };

export const fetchGeneralInfo = () => dispatch => {
    axios.request(info)
    .then(res => {
        dispatch({ type: types.GET_INFO, payload: res.data })
    })
    .catch(err => {
        console.log(err)
    })
}