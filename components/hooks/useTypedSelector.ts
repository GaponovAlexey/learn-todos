import { TypedUseSelectorHook, useSelector } from 'react-redux'
import { TypeRootState } from '../Redux'

export const useTypedSelector: TypedUseSelectorHook<TypeRootState> = useSelector
