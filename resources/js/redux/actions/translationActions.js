
import HttpService from '../../services/HttpService'
import { translation, } from '../types'

export const getTranslation = (lang) => {
  return async dispatch => {
    const http = new HttpService()
        
    dispatch({ type: translation.GET_TRANSLATION_PENDING, })

    const tokenId = "user-token"
    await new Promise((resolve, reject) => {
      http.getData(http.domain+'/sanctum/csrf-cookie').then( 
        http.getData('translation?lang='+lang, tokenId).then(res => {
          resolve(dispatch({
            type: translation.GET_TRANSLATION_SUCCESS,
            payload: res.data.data,
          }))                
        }, error => {
          reject(dispatch({ 
            type : translation.GET_TRANSLATION_ERROR, 
            payload: error,
          }))
        })
      ).catch(error => {
        reject(dispatch({ 
          type : translation.GET_TRANSLATION_ERROR, 
          payload: error,
        }))
      })
    })
  }
}

export const createTranslation = (lang) => {
  return async dispatch => {
    const http = new HttpService()
        
    dispatch({ type: translation.CREATE_TRANSLATION_PENDING, })

    const tokenId = "user-token"
    await new Promise((resolve, reject) => {
      http.getData(http.domain+'/sanctum/csrf-cookie').then( 
        http.postData('translation', { lang, }, tokenId).then(res => {
          resolve(dispatch({
            type: translation.CREATE_TRANSLATION_SUCCESS,
            payload: res.data.data,
          }))                
        }, error => {
          reject(dispatch({ 
            type : translation.CREATE_TRANSLATION_ERROR, 
            payload: error,
          }))
        })
      ).catch(error => {
        reject(dispatch({ 
          type : translation.CREATE_TRANSLATION_ERROR, 
          payload: error,
        }))
      })
    })
  }
}
