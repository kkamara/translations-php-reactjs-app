import React, { useEffect, } from 'react'
import { useNavigate, } from 'react-router-dom'
import { useDispatch, useSelector, } from 'react-redux'
import ReactPaginate from 'react-paginate'
import { getUsers, } from '../../redux/actions/usersActions'
import { authorize } from '../../redux/actions/authActions'

import "./TranslationsHomeComponent.scss"

export default function TranslationsHomeComponent() {
  const navigate = useNavigate()

  const dispatch = useDispatch()
  const state = useSelector(state => ({
    auth: state.auth,
  }))

  useEffect(() => {
    dispatch(authorize())
  }, [])

  useEffect(() => {
    if (state.auth.error) {
      localStorage.removeItem('user-token')
      window.location.href = '/user/login'
    }
  }, [state.auth,])

  const handleFormSubmit = (e) => {
    e.preventDefault()
    console.log('form submitted.')
  }

  if (!state.auth.loading && typeof state.auth.data === 'object' && null !== state.auth.data) {
    console.log('authenticated', state.auth.data)
  }
  if (state.auth.loading) {
    return <p>Loading...</p>
  }

  return (
    <>
      <div className='container'>
        <br />
        <br />
        <form onSubmit={handleFormSubmit} className='col-md-4 offset-md-4'>
          <div className="col-12">
            <div className="input-group">
              <select name="lang" id="lang" className='form-control'>
                <option value="" selected>Please choose a language.</option>
                <option value="en">English</option>
                <option value="es">Español</option>
              </select>
              <input type="submit" className='btn btn-success' value='Go' />
            </div>
          </div>
        </form>
      </div>
    </>
  )
}