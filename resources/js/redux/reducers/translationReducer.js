import { translation, } from '../types'

const initState = {
  data: null,
  error: null,
  loading: false,
}

export default function translationReducer (state = initState, action) {
  switch (action.type) {
    
    case translation.GET_TRANSLATION_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      }
    
    case translation.GET_TRANSLATION_PENDING:
      return {
        ...state,
        loading: true,
      }
    
    case translation.GET_TRANSLATION_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
      }

    default:
      return state
  }
}
