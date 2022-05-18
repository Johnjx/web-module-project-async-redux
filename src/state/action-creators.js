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

  const options = {
    method: 'GET',
    url: 'https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/classes/hunter',
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

export const fetchClassCards = () => dispatch => {
    axios.request(options)
    .then(res => {
        dispatch({type: types.GET_CLASS_CARDS, payload: res.data })
    })
    .catch(err => console.log(err))
}