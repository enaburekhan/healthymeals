import axios from "axios"
import { categories } from "./api"

export const getCategories = () => async dispatch => {
  const { data: { meals: payload } } = await axios.get(categories); 
  dispatch({
    type: 'GET_CATEGORIES',
    payload,    
  })     
}