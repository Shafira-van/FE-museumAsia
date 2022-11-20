import axios from "axios"

export const SUCCESS_GET_BENDA = "SUCCESS_GET_BENDA";
export const SUCCESS_GET_BURMA = "SUCCESS_GET_BURMA";

function successGetBenda(data) {
  // console.log(data)
  return {
    type: SUCCESS_GET_BENDA,
    payload: data
    
  } 
}

export const getBenda = () => {
 
  return async (dispatch) => {
    const result = await axios.get(
      "https://634aa22e5df9528514155265.mockapi.io/webDev/fe28/negara"
    )
    // console.log(result.data)
    dispatch(successGetBenda(result.data))
  }
}

function successGetBurma(data) {
  // console.log(data)
  return {
    type: SUCCESS_GET_BURMA,
    payload: data
    
  } 
}

export const getBurma = () => {
 
  return async (dispatch) => {
    const result = await axios.get(
      "https://634aa22e5df9528514155265.mockapi.io/webDev/fe28/negara"
    )
    console.log(result.data)
    dispatch(successGetBurma(result.data))
  }
}

