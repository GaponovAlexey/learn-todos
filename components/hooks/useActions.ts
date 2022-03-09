import { bindActionCreators } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import { allActions } from '../Redux/reducer'

const fullActions = {...allActions}
export const useActions = () => {
  const dispatch = useDispatch()
  return bindActionCreators(fullActions, dispatch)
}
