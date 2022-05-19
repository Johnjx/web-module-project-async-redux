import * as types from "./action-types"
import axios from "axios";
import API_KEY from "../constants/constants";

const info = {
    method: 'GET',
    url: 'https://omgvamp-hearthstone-v1.p.rapidapi.com/info',
    headers: {
      'X-RapidAPI-Host': 'omgvamp-hearthstone-v1.p.rapidapi.com',
      'X-RapidAPI-Key': API_KEY
    }
  };

const URL = "https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/classes"

export const fetchGeneralInfo = () => dispatch => {
    axios.request(info)
    .then(res => {
        dispatch({ type: types.GET_INFO, payload: res.data })
    })
    .catch(err => {
        console.log(err)
    })
}

export const fetchClassCards = (name) => dispatch => {
    axios.request({
        method: 'GET',
        url: `${URL}/${name}`,
        headers: {
          'X-RapidAPI-Host': 'omgvamp-hearthstone-v1.p.rapidapi.com',
          'X-RapidAPI-Key': API_KEY
        }
      })
    .then(res => {
        dispatch({type: types.GET_CLASS_CARDS, payload: res.data })
    })
    .catch(err => console.log(err))
}